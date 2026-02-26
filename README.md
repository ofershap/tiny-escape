# tiny-escape

[![npm version](https://img.shields.io/npm/v/tiny-escape.svg)](https://www.npmjs.com/package/tiny-escape)
[![npm downloads](https://img.shields.io/npm/dm/tiny-escape.svg)](https://www.npmjs.com/package/tiny-escape)
[![CI](https://github.com/ofershap/tiny-escape/actions/workflows/ci.yml/badge.svg)](https://github.com/ofershap/tiny-escape/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Escape special characters in a string for use in a regular expression. Same behavior as [`escape-string-regexp`](https://github.com/sindresorhus/escape-string-regexp), but ships both ESM and CJS.

```ts
import { escapeRegExp } from "tiny-escape";

const input = "price is $5.00 (USD)";
new RegExp(escapeRegExp(input)).test(input); // true
```

> 201 bytes gzipped. Zero dependencies.

![Demo](assets/demo.gif)

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

const userInput = "How much $ for mass?";
const re = new RegExp(escapeRegExp(userInput), "i");
re.test(userInput); // true
```

## Differences from `escape-string-regexp`

`escape-string-regexp` v5 is ESM-only. If you `require("escape-string-regexp")` you get `ERR_REQUIRE_ESM`. `tiny-escape` works with both `import` and `require()`.

|             | `escape-string-regexp` | `tiny-escape` |
| ----------- | ---------------------- | ------------- |
| CJS support | v4 only (v5 ESM-only)  | ESM + CJS     |
| TypeScript  | native (v5)            | native        |
| Export      | default                | named         |

## Migrating from escape-string-regexp

```diff
- import escapeStringRegexp from "escape-string-regexp";
- const escaped = escapeStringRegexp(input);
+ import { escapeRegExp } from "tiny-escape";
+ const escaped = escapeRegExp(input);
```

## API

### `escapeRegExp(string: string): string`

Escapes `| \ { } ( ) [ ] ^ $ + * ? .` and `-`.

Throws `TypeError` if the input is not a string.

## Author

[![Made by ofershap](https://gitshow.dev/api/card/ofershap)](https://gitshow.dev/ofershap)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/ofershap)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat&logo=github&logoColor=white)](https://github.com/ofershap)

## License

[MIT](LICENSE) &copy; [Ofer Shapira](https://github.com/ofershap)
