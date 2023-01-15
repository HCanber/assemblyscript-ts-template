import { defineConfig } from "vitest/config";
import { baseConfig } from "./vite.config.base";

// See https://vitejs.dev/config/  and  https://vitest.dev/config/
export default defineConfig({
  ...baseConfig,
  test: {
    include: ["shared/**/*.test.ts"],
    globals: true,
    setupFiles: ["./vitest.shared.setup.ts"],
    coverage: {
      reporter: ["text", "html"],
      include: ["shared/"],
      reportsDirectory: "coverage/shared",
    },
  },
});
