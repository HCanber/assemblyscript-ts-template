import { defineConfig } from "vitest/config";
import { baseConfig } from "./vite.config.base";

// See https://vitejs.dev/config/  and  https://vitest.dev/config/
export default defineConfig({
  ...baseConfig,
  test: {
    include: ["lib/**/*.test.ts"],
    coverage: {
      reporter: ["text", "html"],
      include: ["lib/"],
      reportsDirectory: "coverage/lib",
    },
  },
});
