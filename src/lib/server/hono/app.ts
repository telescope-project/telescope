import { Hono } from "hono"

export type HonoBindings = Partial<
  App.Platform["env"] & { caches: App.Platform["caches"] }
>

type Variables = {
}

const app = new Hono<{
  Bindings: HonoBindings,
  Variables: Variables,
}>()
.get("/", c => c.text("Hello from Hono"))
.get("/hono", c => c.text("Hono!"))

export default app
