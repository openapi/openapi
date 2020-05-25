# Swagger-to-js

Convert swagger api to js (with types fo typescript)

## Install

```sh
npm install swagger-to-js
# or
yarn add swagger-to-js
# or to global space
```

## Examples

```sh
yarn swagger-to-js --file ../src/mocks/local-file-api.json
# or
yarn swagger-to-js --file ../src/mocks/local-file-api.yaml
# or
yarn swagger-to-js --file protocol://url/api.json
```

## Usage CLI

```sh
yarn swagger-to-js [options]

Options:
  -V, --version            output the version number
  --output-dir <path>      Path output directory js api with types (default: './api')
  --config <path>          Path to config
  --mode <type>            Mode for additional info: 'prod' | 'dev' (default: 'prod')
  --file <path>            Path to file with api (*.json, *.yaml, url)
  --authorization <value>  Auth token for get api by url (it is header for request)
  --deprecated <type>      Action for deprecated methods: 'warning' | 'ignore' | 'exception' (default: 'warning')
  --import-request         Import request code in out code
  --original-body          Build with original request body
  --ignore-description     Print description of request
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

```js
{
  // Path to file with api (*.json, *.yaml, url)
  "file": "./swagger-api.json", // string

  // Api in json (if not use option 'file', more important than path to file)
  "apiJson": { ... },

  // Auth token for get api by url (it is header for request)
  "authorization": "Token 123qwerty", // string

  // Path output directory js api with types
  "outputDir": "./api", // string (default: "./api")

  // Mode for additional info
  "mode": "prod", // "prod" | "dev" (default: "prod")

  // Action for deprecated methods
  "deprecated": "warning", // "warning" | "ignore" | "exception" (default: "warning")

  // Import request code in out code
  "importRequest": true, // (default: false)

  // Build with original request body
  "originalBody": true, // (default: false)

  // Ignore description of requests
  "ignoreDescription": true // default: false
}
```

## API

```js
import { swaggerToJs } from "swagger-to-js";

const { code, types } = swaggerToJs({
  file: "./swagger-api.json",
});

console.log(code);
// => js code

console.log(types);
// => typescript types
```

[More examples](https://github.com/EvgenyiFedotov/swagger-to-js/tree/next/examples/api)

## Additional notes

- If you will use this package after application created, you will have problem with generated api,
  because current api in your app will have different with your swagger api maybe.

## Tests swagger versions

- 2.0
- 3.0.1
- 3.0.2

## Next

- [ ] Struct generated files by tags
