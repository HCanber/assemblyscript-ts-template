// This is the base configuration for Vite.
// It is used by all other Vite configurations.
// See https://vitejs.dev/config/ for more information on Vite configuration.

import { basename } from "node:path";
import { AliasOptions, UserConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import tsconfigPaths from "vite-tsconfig-paths";

const filename = basename(__filename);

const cfg: UserConfig = {
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

// By default, if release version is imported use debug version.
let alias: AliasOptions = {
  "wasm/release.js": "wasm/debug.js",
};

const env = process.env;
const nodeEnvIsProduction = env.NODE_ENV === "production";
const ciIsSet = !!env.CI;
const wasm = env.WASM;
const wasmIsRelease = wasm === "release";

// If we're in production mode, or if CI is set, and debug version hasn't been
// explicitly requested, or release version has been requested,
// then use the release version of the WASM.
if (nodeEnvIsProduction || ciIsSet || wasmIsRelease) {
  if (wasm === "debug") {
    const message = `\x1b[1m${filename}: \x1b[32mUsing WASM debug version\x1b[0m, as WASM_VERSION=debug`;
    console.log(message);
  } else {
    alias = {
      "wasm/debug.js": "wasm/release.js",
    };

    const reason = [
      wasmIsRelease ? "WASM=" + env.WASM : null,
      ciIsSet ? "CI=" + env.CI : null,
      nodeEnvIsProduction ? "NODE_ENV=" + env.NODE_ENV : null,
    ]
      .filter((s) => s)
      .join(", ");

    const message = `\x1b[1m${filename}: \x1b[32mUsing WASM release version\x1b[0m, as ${reason}`;
    console.log(message);
  }
}

cfg.resolve = { alias };

export const baseConfig: UserConfig = cfg;
