import { Hono } from "hono"

const app = new Hono()
.get("/", c => c.text("Hello from Hono"))
.get("/hono", c => c.text("Hono!"))

export default app
