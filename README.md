# Starter for Assemblyscript + Typescript

This is a starter project for developing Assemblyscript and Typescript code in the same project. It supports sharing code between the two languages, and running tests for both languages using [as-pect](https://as-pect.gitbook.io/as-pect/) and [vitest](https://vitest.dev/).

The code can either be used on a static web page, or as a node module, and it's bundled using [vite](https://vitejs.dev/).

Assemblyscript in [`assembly/`](assembly) folder
Typescript in [`lib/`](lib) folder
Shared code in [`shared/`](shared) folder

## Get started

Install dependencies:

```sh
yarn install
```

Build the Assemblyscript code:

```sh
yarn asbuild
```

Start the dev server

```sh
yarn start
```

Typescript code changes (in [`lib/`](lib) and [`shared/`](shared) folders) will be automatically reloaded on save.
Assemblyscript changes (in [`assembly/`](assembly) and [`shared/`](shared) folders) will require a manual rebuild using `yarn asbuild`.

## Development

### Prerequisites

```sh
yarn install
```

### Assembyscript

Write Assemblyscript code and tests in [`assembly/`](assembly) and [`shared/`](shared) folders.

See the note below under [Shared](#shared) regarding the [`shared/`](shared) folder.

#### Test: Assembyscript

To run Assemblyscript tests for the assemblyscript folder, execute:

```sh
yarn astest
```

It will run tests in [`assembly/`](assembly) and [`shared/`](shared) folders using [as-pect](https://as-pect.gitbook.io/as-pect/).

#### Build: Assembyscript

To build the assemblyscript folder, execute:

```sh
yarn asbuild
```

The code will be built to the [`build/wasm/`](build/wasm) folder.

### Typescript

Write typescript code and tests in [`lib/`](lib) and [`shared/`](shared) folders.

See the note below under [Shared](#shared) regarding the [`shared/`](shared) folder.

#### Test: Typescript

To run typescript tests for the [`lib/`](lib) folder, execute one of the following:

```sh
yarn libtest
yarn libtest-watch
yarn libtest-coverage
```

It will run tests in [`lib/`](lib) using [vitest](https://vitest.dev/)

To run typescript tests for the [`shared/`](shared) folder, execute one of the following:

```sh
yarn sharedtest
yarn sharedtest-watch
yarn sharedtest-coverage
```

It will run tests in [`shared/`](shared) using [vitest](https://vitest.dev/).

#### Build: Typescript

To build the typescript in the [`lib/`](lib) and [`shared/`](shared) folders, execute:

```sh
yarn libbuild
```

The code will be built to the [`build/lib/`](build/lib) folder.

### Shared

Code in [`shared/`](shared) folder is used by both Assemblyscript and Typescript . By default it only supports the basic portable types and their conversion functions like `i32` and `i32(value)`, see [as-minimal-portable](as-minimal-portable/README.md) for more details.
See the [portability section](https://www.assemblyscript.org/compiler.html#portability) in the Assemblyscript documentation for information om how to write portable code.

The shared folder is built and embedded in the wasm when used in the Assemblyscript code, and is converted to javascript when used in the Typescript code.

### Compile

This project can be compiled to a static web page or a node module.

#### Compile to static web

To compile the project to a static web page, execute:

```sh
yarn build
```

```sh
yarn asbuild
yarn start
```
