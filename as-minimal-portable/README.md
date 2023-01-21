# Minimal portable library

This folder contains minimal type definitions for writing portable code, i.e. code that can be used in AssemblyScript and TypeScript.
Only support for these types have been kept:

- `i8`
- `i16`
- `i32`
- `isize`
- `u16`
- `u32`
- `usize`
- `bool`
- `f32`
- `f64`

Conversion functions have alse been kept, e.g. `i8(value)` and constants like `i8.MIN_VALUE`.

If you miss anything, uncomment what you need in these files:

- `index.d.ts` contains the type definitions
- `index.js` contains implementations for javascript

If you want to use the full portable library, reference `assemblyscript/std/portable`. Update:

| File                                                  | Change                                          |
| ----------------------------------------------------- | ----------------------------------------------- |
| [`shared/tsconfig.json`](../shared/tsconfig.json)     | `types: ["assemblyscript/std/portable"]`        |
| [`lib/index.ts`](../lib/index.ts)                     | `import "assemblyscript/std/portable/index.js"` |
| [`vitest.shared.setup.ts`](../vitest.shared.setup.ts) | `import "assemblyscript/std/portable/index.js"` |
