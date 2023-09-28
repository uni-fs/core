[![npm (scoped)](https://img.shields.io/npm/v/@uni-fs/core.svg)](https://www.npmjs.com/package/@uni-fs/core)
![npm](https://img.shields.io/npm/dm/@uni-fs/core.svg)
![NPM](https://img.shields.io/npm/l/@uni-fs/core.svg)
![npm type definitions](https://img.shields.io/npm/types/@uni-fs/core.svg)

## uni-fs/core


[SOME EXAMPLES HERE](examples/README.md)


## 📦 Installation

```bash
yarn add @uni-fs/core
# or
npm install @uni-fs/core --save
```

This library supports:

- **common-js** (require): transpiled as es2015, with .cjs extension, useful for old nodejs versions
- **module** (esm import): transpiled as esnext, with .mjs extension (requires node resolution for external packages)

In a **node** environment the library works immediately (no extra tooling required),
however, in a **browser** environment, you'll probably need to resolve external imports thought a bundler like
[snowpack](https://www.snowpack.dev/),
[rollup](https://rollupjs.org/guide/en/),
[webpack](https://webpack.js.org/),
etc...
or directly using [skypack](https://www.skypack.dev/):
[https://cdn.skypack.dev/@uni-fs/core](https://cdn.skypack.dev/@uni-fs/core)
