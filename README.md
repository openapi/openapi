# Swagger-to-js

Convert swagger api to js (with types fo typescript)

## Install

```sh
npm install swagger-to-js
# or
yarn add swagger-to-js
# or to global space
```

## Usage CLI

```sh
yarn swagger-to-js [options]

Options:
  -V, --version            output the version number
  --file <path>            Path to file with api (*.json, *.yaml, url)
  --output-dir <path>      Path output directory js api with types (default: './api')
  --authorization <value>  Auth token for get api by url (it is header for request)
  --config <path>          Path to config
  --mode <type>            Mode for additional info: 'prod' | 'dev' (default: 'prod')
  --deprecated <type>      Action for deprecated methods: 'warning' | 'ignore' | 'exception' (default: 'warning')
  --import-request         Import request code in out code
  --original-body          Build with original request body
  -h, --help               display help for command
```

## Usage config in file

This package use [`cosmiconfig`](https://github.com/davidtheclark/cosmiconfig) for find config.

### Config can exist next places

- a swagger-to-js property in package.json
- a .swagger-to-jsrc file in JSON or YAML format
- a .swagger-to-jsrc.json file
- a .swagger-to-jsrc.yaml, .swagger-to-jsrc.yml, or .swagger-to-jsrc.js file
- a swagger-to-js.config.js file exporting a JS object

### Example

```js
{
  // Cli options
  // Path to file with api (*.json, *.yaml, url)
  "file": "./swagger-api.json", // string

  // Path output directory js api with types
  "outputDir": "./api", // string (default: "./api")

  // Auth token for get api by url (it is header for request)
  "authorization": "Token 123qwerty", // string

  // Common options
  // Mode for additional info
  "mode": "prod", // "prod" | "dev" (default: "prod")

  // Api options
  // Action for deprecated methods
  "deprecated": "warning", // "warning" | "ignore" | "exception" (default: "warning")

  // Import request code in out code
  "import-request": true, // (default: false)

  // Build with original request body
  "original-body": true // (default: false)
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
  mode: "dev",
  deprecated: "exception",
};

const outputFiles = swaggerToJs(apiJson, config);

console.log(outputFiles["index.js"]);
// => js code

console.log(outputFiles["index.d.js"]);
// => typescript types

console.log(outputFiles["request.js"]);
// => code with method request for api
```

## Additional notes

- If you will use this package after application created, you will have problem with generated api,
  because current api in your app will have different with your swagger api maybe.

## Tests swagger versions

- 2.0
- 3.0.1
- 3.0.2

## Next

- [ ] Using multiple api files
- [ ] Struct by files by tags
