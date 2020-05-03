# Swaggerapi

Convert swagger json api to js (with types fo typescript)

## Install

```sh
npm install -g swaggerapi
# or
yarn globabl add swaggerapi
```

## Usage CLI

```sh
swaggerapi [options]

Options:
  --file <path>        Path swagger JSON file with api
  --output-dir <path>  Path output directory js api with types (default: "./api")
  --deprecated <type>  Action for deprecated methods: 'warning' | 'ignore' | 'exception' (default: 'warning')
```

## Usage CLI with config in `package.json`

```json
{
  "swaggerapi": {
    "file": "./swagger-api.json", // Path swagger JSON file with api
    "outputDir": "./src/api", // Path output directory js api with types (default: "./api")
    "deprecated": "exception" // Action for deprecated methods: 'warning' | 'ignore' | 'exception' (default: 'warning')
  }
}
```

## API

```js
import { swaggearpi } from "swaggerapi";

const apiJson = `{
  "swagger": "2.0",
  ...
  "paths": { ... },
  "definitions": { ... }
}`;

const config = {
  deprecated: "exception",
};

const { code, types } = swaggearpi(apiJson, config);

console.log(code);
// => formatted js code

console.log(types);
// => formatted typescript types
```
