import { Hono } from "hono";
import type { Env } from "../../shared/types";

const plans = new Hono<{ Bindings: Env }>();

plans.get("/", async (c) => {
  const db = c.env.DB;
  
  const results = await db
    .prepare(`
      SELECT p.*, c.name as category_name, c.icon as category_icon
      FROM plans p
      JOIN categories c ON p.category_id = c.id
      ORDER BY p.display_order
    `)
    .all();

  return c.json(results.results);
});

plans.get("/:id", async (c) => {
  const db = c.env.DB;
  const id = c.req.param("id");
  
  const result = await db
    .prepare(`
      SELECT p.*, c.name as category_name, c.icon as category_icon
      FROM plans p
      JOIN categories c ON p.category_id = c.id
      WHERE p.id = ?
    `)
    .bind(id)
    .first();

  if (!result) {
    return c.json({ error: "Plan not found" }, 404);
  }

  return c.json(result);
});

export default plans;
