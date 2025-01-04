import type app from "$lib/server/hono/app.ts"
import { hc } from "hono/client"

const rpc = hc<typeof app>("/")

export default rpc
