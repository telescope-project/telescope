// See https://svelte.dev/docs/kit/types#app.d.ts

import type { ExecutionContext } from "hono"

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    interface Platform {
      env: {
      }
      context: ExecutionContext
      caches: CacheStorage & { default: Cache }
    }
  }
}

export {}
