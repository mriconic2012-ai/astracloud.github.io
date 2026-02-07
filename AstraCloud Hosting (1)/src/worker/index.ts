import { Hono } from "hono";
import plans from "../backend/routes/plans";
import reviews from "../backend/routes/reviews";
import type { Env } from "../shared/types";

const app = new Hono<{ Bindings: Env }>();

app.route("/api/plans", plans);
app.route("/api/reviews", reviews);

export default app;
