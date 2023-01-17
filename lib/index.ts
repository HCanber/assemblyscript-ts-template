// import "assemblyscript/std/portable/index.js";  // To use full portable stdlib, import this insetad of as-minimal-portable
import "../as-minimal-portable";

import { calculate } from "wasm/debug.js";
import { halfOf } from "shared";

export function hello(): string {
  return `Hello, result=${halfOf(calculate(21, 2))}!`;
}
