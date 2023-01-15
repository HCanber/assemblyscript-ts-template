// The entry file of your WebAssembly module.
import { halfOf } from "../shared";

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function calculate(a: i32, b: i32): i32 {
  return halfOf(add(a, b));
}
