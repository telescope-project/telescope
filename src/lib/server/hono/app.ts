import { Hono } from "hono"
import { drizzle, DrizzleD1Database } from "drizzle-orm/d1"
import type * as s from "$lib/server/db/schema/index.ts"

export type HonoBindings = Partial<
  App.Platform["env"] & { caches: App.Platform["caches"] }
>

type Variables = {
  db: DrizzleD1Database<typeof s>,
}

const app = new Hono<{
  // biome-ignore lint/style/useNamingConvention:
  Bindings: HonoBindings,
  Variables: Variables,
}>()
.use("*", async c => {
  c.set("db", drizzle<{ schema: s }>(c.env.DB))
})
.get("/", c => c.text("Hello from Hono"))
.get("/hono", c => c.text("Hono!"))

export default app
