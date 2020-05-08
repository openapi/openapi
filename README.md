# Swagger-to-js

Convert swagger json api to js (with types fo typescript)

## Next

- [ ] headers into params to camel case, and into request to cebab case
- [ ] enums into parameters
- [ ] api.yml

## Install

```sh
npm install swagger-to-js
# or
yarn add swagger-to-js
```

## Usage CLI

```sh
yarn swagger-to-js [options]

Options:
  --file <path>        Path swagger JSON file with api
  --output-dir <path>  Path output directory js api with types (default: "./api")
  --deprecated <type>  Action for deprecated methods: 'warning' | 'ignore' | 'exception' (default: 'warning')
```

## Usage CLI with config in `package.json`

```json
{
  "swagger-to-js": {
    "file": "./swagger-api.json",
    "outputDir": "./api",
    "deprecated": "warning"
  }
}
```

## API

```js
import { swaggerToJs } from "swagger-to-js";

const apiJson = `{
  "swagger": "2.0",
  ...
  "paths": { ... },
  "definitions": { ... }
}`;

const config = {
  deprecated: "exception",
};

const { code, types } = swaggerToJs(apiJson, config);

console.log(code);
// => js code

console.log(types);
// => typescript types
```
