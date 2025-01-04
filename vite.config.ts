import { defineConfig } from "vite"

import unoCSS from "unocss/vite"
import { sveltekit } from "@sveltejs/kit/vite"
import UnpluginTypia from "@ryoppippi/unplugin-typia/vite"

export default defineConfig({
  plugins: [
    unoCSS(),
    sveltekit(),
    UnpluginTypia(),
  ],
})
