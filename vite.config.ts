import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/index.ts",
      name: "Wasm",
      fileName: "index",
      formats: ["es"],
    },
  },
  plugins: [tsconfigPaths(), topLevelAwait()],
});
