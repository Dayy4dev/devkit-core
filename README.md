# devkit-core

> Modular, zero-dependency TypeScript utilities for modern applications.

[![CI](https://github.com/Dayy4dev/devkit-core/actions/workflows/ci.yml/badge.svg)](https://github.com/Dayy4dev/devkit-core/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- ⚡ **Zero Dependencies** - Ultra-lightweight footprint
- 🛡️ **Fully Typed** - Written in 100% strict TypeScript
- 🧩 **Tree-shakeable** - Import only what you need
- 🧪 **High Test Coverage** - Comprehensive test suites

## Installation

```bash
npm install @dayy4dev/devkit-core
# or
pnpm add @dayy4dev/devkit-core
# or
yarn add @dayy4dev/devkit-core
```

## Quick Start

```typescript
import { slugify, chunk, clamp, debounce } from '@dayy4dev/devkit-core';

// String manipulation
slugify("Hello World & Universe"); // "hello-world-universe"

// Array chunking
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]

// Math range
clamp(105, 0, 100); // 100
```

## License

MIT © [Rexd el vandimion](https://github.com/Dayy4dev)
