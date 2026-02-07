import { Hono } from "hono";
import type { Env } from "../../shared/types";

const reviews = new Hono<{ Bindings: Env }>();

// Get all reviews
reviews.get("/", async (c) => {
  const db = c.env.DB;
  const result = await db.prepare(
    "SELECT * FROM reviews ORDER BY created_at DESC"
  ).all();
  
  return c.json(result.results);
});

// Submit a new review
reviews.post("/", async (c) => {
  const db = c.env.DB;
  const body = await c.req.json();
  
  const { customer_name, rating, review_text, service_type } = body;
  
  if (!customer_name || !rating || !review_text) {
    return c.json({ error: "Missing required fields" }, 400);
  }
  
  if (rating < 1 || rating > 5) {
    return c.json({ error: "Rating must be between 1 and 5" }, 400);
  }
  
  await db.prepare(
    `INSERT INTO reviews (customer_name, rating, review_text, service_type, created_at, updated_at)
     VALUES (?, ?, ?, ?, datetime('now'), datetime('now'))`
  ).bind(customer_name, rating, review_text, service_type || null).run();
  
  return c.json({ success: true });
});

export default reviews;
