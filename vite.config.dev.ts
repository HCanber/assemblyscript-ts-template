import { defineConfig } from "vite";
import { baseConfig } from "./vite.config.base";

// See https://vitejs.dev/config/
export default defineConfig({
  ...baseConfig,
  resolve: {
    alias: {
      // When we're in dev mode, we want to use the debug version of the wasm
      "wasm/release.js": "wasm/debug.js",
    },
  },
});
