import { add } from "wasm/release.js";

export function hello(): string {
  return `Hello, 1+2=${add(1, 2)}!`;
}
