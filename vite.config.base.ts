import { UserConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import tsconfigPaths from "vite-tsconfig-paths";

// See https://vitejs.dev/config/
export const baseConfig: UserConfig = {
  build: {
    sourcemap: true,
    rollupOptions: {
      // See https://rollupjs.org/guide/en/#big-list-of-options
      output: {
        // Since we include sources, there's no point
        // in bloating sourcemaps with another copy of it.
        sourcemapExcludeSources: true,
      },
    },
  },
  plugins: [tsconfigPaths(), topLevelAwait()],
};
