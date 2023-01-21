# Starter for AssemblyScript + TypeScript

This is a starter project for creating WASMs using AssemblyScript and interacting with it using TypeScript. Code can be shared between the two languages and it comes with two test frameworks [as-pect](https://as-pect.gitbook.io/as-pect/) for AssemblyScript and [vitest](https://vitest.dev/) for testing the TypeScript code.

The code can either be used on a static web page, or as a module, and it's bundled using [vite](https://vitejs.dev/).

AssemblyScript in [`assembly/`](assembly) folder
TypeScript in [`lib/`](lib) folder
Shared code in [`shared/`](shared) folder

## Get started

Install dependencies:

```sh
yarn install
```

Build the AssemblyScript code:

```sh
yarn asbuild
```

Start the dev server

```sh
yarn start
```

TypeScript code changes (in [`lib/`](lib) and [`shared/`](shared) folders) will be automatically reloaded by the browser on save.
AssemblyScript changes (in [`assembly/`](assembly) and [`shared/`](shared) folders) will require a manual rebuild using `yarn asbuild`.

## Development

### Prerequisites

```sh
yarn install
```

### Automatically rebuild and test on save

To rebuild the WASM and run all tests on save, execute:

```sh
yarn dev
```

This will run the following commands in parallel:

```sh
yarn asbuild:debug-watch
yarn astest-watch
yarn libtest-watch
yarn sharedtest-watch
yarn start
```

### Assembyscript

Write AssemblyScript code and tests in [`assembly/`](assembly) and [`shared/`](shared) folders.

See the note below under [Shared](#shared) regarding the [`shared/`](shared) folder.

#### Test: Assembyscript

To run AssemblyScript tests for the AssemblyScript folder, execute one of the following:

```sh
yarn astest
yarn astest-watch
```

It will run tests in [`assembly/`](assembly) and [`shared/`](shared) folders using [as-pect](https://as-pect.gitbook.io/as-pect/).

#### Build: Assembyscript

To build the AssemblyScript folder, execute one of the following:

```sh
yarn asbuild
yarn asbuild-watch
```

The code will be built to the [`build/wasm/`](build/wasm) folder.

### TypeScript

Write TypeScript code and tests in [`lib/`](lib) and [`shared/`](shared) folders.

See the note below under [Shared](#shared) regarding the [`shared/`](shared) folder.

#### Test: TypeScript

To run TypeScript tests for the [`lib/`](lib) folder, execute one of the following:

```sh
yarn libtest
yarn libtest-watch
yarn libtest-coverage
```

It will run tests in [`lib/`](lib) using [vitest](https://vitest.dev/)

To run TypeScript tests for the [`shared/`](shared) folder, execute one of the following:

```sh
yarn sharedtest
yarn sharedtest-watch
yarn sharedtest-coverage
```

It will run tests in [`shared/`](shared) using [vitest](https://vitest.dev/).

#### Build: TypeScript

To build the TypeScript in the [`lib/`](lib) and [`shared/`](shared) folders, execute:

```sh
yarn libbuild
```

The code will be built to the [`build/lib/`](build/lib) folder.

### Shared

Code in [`shared/`](shared) folder is used by both AssemblyScript and TypeScript . By default it only supports the basic portable types and their conversion functions like `i32` and `i32(value)`, see [as-minimal-portable](as-minimal-portable/README.md) for more details and information on how to enable more features or switch to the full portable library.

See the [portability section](https://www.AssemblyScript.org/compiler.html#portability) in the AssemblyScript documentation for information om how to write portable code.

The shared folder is built and embedded in the wasm when used in the AssemblyScript code, and is converted to javascript when used in the TypeScript code.

### Compile

This project can be compiled to a static web page or a node module.

#### Compile to a static web

To compile the project to a static web page, execute one of the following:

```sh
yarn build
yarn build-watch
```

#### Compile to a library

To compile to a library, execute one of the following:

```sh
yarn build-lib
yarn build-lib-watch
```

#### Debug WASM vs Release WASM

By default the debug version of the WASM is used when compiling and running tests.
The version can be controlled by setting environment variable `WASM=release` or `WASM=debug`.

If environment variable `NODE_ENV=production` is set, or `CI` is set, and `WASM` hasn't been set, then the release version of the WASM is automatically used.

When compiling to a static web or library, the release version of the WASM is used, as vite sets `NODE_ENV=production` by default.

## Optional: VS Code Setup to format AssemblyScript code

AssemblyScript can be formatted using [prettier](https://prettier.io/) as long as decorators, such as `@inline`, on top level functions and variables aren't used. TypeScript only allows them on classes and its members.
This is an example that prettier can't handle:

```ts
// @ts-ignore: decorator
@inline
export function add(a: i32, b: i32): i32 {
  return a + b;
}
```

To be able to format AssemblyScript code in VS Code on save, follow these steps to install a custom formatter that uses a few tricks so that prettier can format the code.

- Install https://marketplace.visualstudio.com/items?itemName=jkillian.custom-local-formatters in VS Code

- Install the formatter for assembly script

  **Yarn 1:**

  ```sh
  yarn add -D prettier https://github.com/HCanber/AssemblyScript-prettier
  ```

  **Yarn 2+:**

  ```sh
  yarn add -D prettier AssemblyScript-prettier@github:HCanber/AssemblyScript-prettier
  ```

  **NPM:**

  ```sh
  npm install -D prettier git+https://github.com/HCanber/AssemblyScript-prettier.git
  ```

- Open [.vscode/settings.json](.vscode/settings.json) and uncomment the lines for the formatter

Now when AssemblyScript (and TypeScript) code is saved, it will be formatted using the newly installed formatter.

## Optional: Format code on commits

Follow the steps for [Prettier's Pre-commit Hook](https://prettier.io/docs/en/precommit.html) but change the `prettier` command to `as-prettier` instead.
