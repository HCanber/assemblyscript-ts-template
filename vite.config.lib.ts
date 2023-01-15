import { defineConfig } from "vite";
import { baseConfig } from "./vite.config.base";

// See https://vitejs.dev/config/
export default defineConfig({
  ...baseConfig,
  build: {
    ...baseConfig.build,
    lib: {
      entry: "./lib/index.ts",
      name: "Wasm",
      fileName: "index",
      formats: ["es"],
    },
  },
});
