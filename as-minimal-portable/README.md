# Minimal portable library

This folder contains minimal type definitions for writing portable code, i.e. code that can be used in assemblyscript and typescript.
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

If you want to use the full portable library, instead of referencing theese files, reference `assemblyscript/std/portable`

- in `shared/tsconfig.json`, set `types` to `types: ["assemblyscript/std/portable"]`
- in `lib/index.ts` import: `import "assemblyscript/std/portable/index.js"`
