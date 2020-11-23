# Swagger-to-js

Convert swagger api to js (with types for typescript)

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
module.exports = {
  // Path to file with api (*.json, *.yaml, url)
  file: "./swagger-api.json", // string

  // Api in json (if not use option 'file', more important than path to file)
  apiJson: { ... },

  // Auth token for get api by url (it is header for request)
  authorization: "Token 123qwerty", // string

  // Path output directory js api with types
  outputDir: "./api", // string (default: "./api")

  // Mode for additional info
  mode: "prod", // "prod" | "dev" (default: "prod")

  // Action for deprecated methods
  deprecated: "warning", // "warning" | "ignore" | "exception" (default: "warning")

  // Import request code in out code
  // true — add import from `swagger-to-js/request`
  // false — embed request to `outputDir` and import from it
  // "disabled" — completely disable imporing `request`, use `templateCodeBefore`
  importRequest: true, // (default: false)

  // Build with original request body
  originalBody: true, // (default: false)

  // Ignore description of requests
  ignoreDescription: true, // default: false

  // Completely disable generating types file (.d.ts)
  disableTypesGenerate: true, // (default: false)

  /**
   * Change file name for source code
   * Also it can be a function
   * @example
   * templateFileNameCode: ({ swaggerData, changeCase }) => string,
   */
  templateFileNameCode: 'my-api.js', // (default: 'index.js')

  /**
   * Change file name for typing
   * Also it can be a function
   * @example
   * templateFileNameTypes: ({ swaggerData, changeCase }) => string,
   */
  templateFileNameTypes: 'my-api.d.ts', // (default: 'index.d.js')

  /**
   * Load presets and merge local properties to it
   * If preset created as a function, options can be passed
   * @example
   * presets: [
   *  ['my-super-swagger-to-js-preset', { passed: 'options' }],
   *  ['another-swagger-to-js-preset', { beautiful: 'options' }],
   * ]
   * If no options passed or used simple form, empty object passed to functional preset
   */
  presets: ['my-super-swagger-to-js-preset'], // (default: [])

  /**
   * Template before main block code
   * @param {{
   *  swaggerData: { info: object; paths: object; components: object; };
   *  changeCase: { paramCase: Function; camelCase: Function; pascalCase: Function; ... };
   * }} extra
   */
  templateCodeBefore: (extra) => "",

  /**
   * Template request code
   * @param {{
   *  name: string;
   *  method: string;
   *  url: string;
   *  isWarningDeprecated: boolean;
   *  isExistParams: boolean;
   *  defaultParams: object;
   * }} params
   * @param {{
   *  swaggerData: { info: object; paths: object; components: object; };
   *  requestSwaggerData: { operationId: string; requestBody?: object; responses: object };
   *  changeCase: { paramCase: Function; camelCase: Function; pascalCase: Function; ... };
   * }} extra
   */
  templateRequestCode: (params, extra) => "",

  /**
   * Template after maon block code
   * @param {{
   *  swaggerData: { info: object; paths: object; components: object; };
   *  changeCase: { paramCase: Function; camelCase: Function; pascalCase: Function; ... };
   * }} extra
   */
  templateCodeAfter: (extra) => "",

  /**
   * Template before main block types
   * @param {{
   *  swaggerData: { info: object; paths: object; components: object; };
   *  changeCase: { paramCase: Function; camelCase: Function; pascalCase: Function; ... };
   * }} extra
   */
  templateTypesBefore: (extra) => "",

  /**
   * Template request types
   * @param {{
   *  name: string;
   *  summary: string;
   *  description: string;
   *  countVariants: number;
   *  index: number;
   *  params: SwaggerData | null;
   *  addedParams: SwaggerData | null;
   *  result: SwaggerData | null;
   * }} params
   * * @param {{
   *  swaggerData: { info: object; paths: object; components: object; };
   *  requestSwaggerData: { operationId: string; requestBody?: object; responses: object };
   *  changeCase: { paramCase: Function; camelCase: Function; pascalCase: Function; ... };
   * }} extra
   *
   * @type {https://swagger.io/docs/specification/data-models/} SwaggerData
   */
  templateRequestTypes: (param, extra) => "",

  /**
   * Template after main block types
   * @param {{
   *  swaggerData: { info: object; paths: object; components: object; };
   *  changeCase: { paramCase: Function; camelCase: Function; pascalCase: Function; ... };
   * }} extra
   */
  templateTypesAfter: (extra) => "",
};
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

[More examples](https://github.com/EvgenyiFedotov/swagger-to-js/tree/next/examples)

## Additional notes

- If you will use this package after application created, you will have problem with generated api,
  because current api in your app will have different with your swagger api maybe.

## How to create custom preset

1. Create new NPM package (create directory and `npm init` there)
1. Name your package with `-swagger-to-js-preset` suffix
1. Create `index.js` and set `"main": "index.js"` in your package.json
1. Fill your `index.js` with any properties from list before
1. Save and publish
1. Use it like: `presets: ['example-swagger-to-js-preset']`

> Hint: if you want to use local file as a preset, just use `require.resolve`:
> `presets: [require.resolve('./local-preset')]`
> It is works only in `.js` configs

### Preset with options

1. Export from your javascript file function with single argument
1. Add valid options to your README.md
1. Use nested array form to pass options to preset

#### Example preset with options

```js
module.exports = (options) => ({
  templateRequestCode: (request, extra) =>
    options.parseBody
      ? generatorWithParser(request, extra)
      : simpleGenerator(request, extra),
});
```

Usage `swagger-to-js.config.js`:

```js
module.exports = {
  file: "./swagger-api.json",
  presets: [
    ["example-swagger-to-js-preset", { parseBody: true }],
    [
      "another-swagger-to-js-preset",
      { requestImport: { module: "./axios-fabric", name: "axios" } },
    ],
  ],
};
```

## Tested generation on swagger versions

- 2.0
- 3.0.1
- 3.0.2

## Roadmap

- [ ] Struct generated files by tags
- [ ] Detect `nullable`
- [ ] Validate by schema
- [ ] Combine types by

## Development

### How to release a new version

1. Wait for release-drafter to generates a new draft release
1. Pull all changes to local repository
1. Run tests `yarn test && yarn test-pack`
1. Create a new tag and change package.json `npm version 1.2.3` (use the version from a draft release)
1. Publish new version `npm publish`
1. Push tags and changes `git push origin master --tags`
1. Go to [Releases](https://github.com/evgenyifedotov/swagger-to-js/releases) and press "Edit" on draft release
1. Check and fix release text
1. Press "Publish release" button
