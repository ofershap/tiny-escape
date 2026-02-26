# tiny-escape

[![npm version](https://img.shields.io/npm/v/tiny-escape.svg)](https://www.npmjs.com/package/tiny-escape)
[![npm downloads](https://img.shields.io/npm/dm/tiny-escape.svg)](https://www.npmjs.com/package/tiny-escape)
[![CI](https://github.com/ofershap/tiny-escape/actions/workflows/ci.yml/badge.svg)](https://github.com/ofershap/tiny-escape/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bundle size](https://img.shields.io/badge/gzip-201_B-brightgreen)](https://github.com/ofershap/tiny-escape)
[![Zero dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://github.com/ofershap/tiny-escape)

Escape special characters in a string for use in a regular expression. A modern, type-safe replacement for [`escape-string-regexp`](https://github.com/sindresorhus/escape-string-regexp).

```ts
import { escapeRegExp } from "tiny-escape";

const input = "price is $5.00 (USD)";
const re = new RegExp(escapeRegExp(input));
re.test(input); // true
```

> Native TypeScript. ESM + CJS dual export. Zero dependencies. 201 bytes gzipped.

## Why tiny-escape?

[`escape-string-regexp`](https://github.com/sindresorhus/escape-string-regexp) has 163M weekly downloads but hasn't been updated in 3 years. Version 5 went ESM-only, breaking CommonJS consumers and forcing many projects to pin v4. `tiny-escape` ships both ESM and CJS with native TypeScript types.

|             | `escape-string-regexp` | `tiny-escape` |
| ----------- | ---------------------- | ------------- |
| CJS support | v4 only (v5 ESM-only)  | ESM + CJS     |
| TypeScript  | native (v5)            | native        |
| Maintenance | inactive (3 years)     | active        |
| API         | default export         | named export  |

## Install

```bash
npm install tiny-escape
```

## Usage

```ts
import { escapeRegExp } from "tiny-escape";

escapeRegExp("hello.world"); // "hello\\.world"
escapeRegExp("[test] (1+1)"); // "\\[test\\] \\(1\\+1\\)"
escapeRegExp("foo|bar"); // "foo\\|bar"
escapeRegExp("a-b"); // "a\\x2db"

// Use in RegExp constructor
const userInput = "How much $ for mass?";
const re = new RegExp(escapeRegExp(userInput), "i");
re.test(userInput); // true
```

## API

### `escapeRegExp(string: string): string`

Escapes all characters with special meaning in regular expressions: `| \ { } ( ) [ ] ^ $ + * ? .` and `-`.

Throws `TypeError` if the input is not a string.

## Migrating from escape-string-regexp

```diff
- import escapeStringRegexp from "escape-string-regexp";
- const escaped = escapeStringRegexp(input);
+ import { escapeRegExp } from "tiny-escape";
+ const escaped = escapeRegExp(input);
```

## Author

[![Made by ofershap](https://gitshow.dev/api/card/ofershap)](https://gitshow.dev/ofershap)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/ofershap)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat&logo=github&logoColor=white)](https://github.com/ofershap)

## License

MIT
