import type { RequestHandler } from "@sveltejs/kit"
import app, { type HonoBindings } from "$lib/server/hono/app.ts"

// All methods
// https://svelte.dev/docs/kit/routing#server
// https://zenn.dev/ryoppippi/articles/9f975b207b7f64
export const GET: RequestHandler = async ({ request, platform }) => {
  const Env = {
    ...platform?.env,
    ...(platform?.caches ? { caches: platform.caches } : {}),
  } as const satisfies HonoBindings

  return await app.fetch(request, Env, platform?.context)
}
export const POST: RequestHandler = GET
export const PATCH: RequestHandler = GET
export const PUT: RequestHandler = GET
export const DELETE: RequestHandler = GET
export const OPTIONS: RequestHandler = GET
export const HEAD: RequestHandler = GET
