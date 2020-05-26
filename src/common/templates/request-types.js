const { joinStrings } = require("../../lib/join-strings");
const { templateSwaggerType } = require("./swagger-type");
const { capitalize } = require("../../lib/capitalize");

function templateRequestTypes(props) {
  const params = buildParams(props);
  const addedParams = buildAddedParams(props);
  const result = buildResult(props);
  const method = templateMethod(props, { params, addedParams, result });
  const lineConfig = { separator: "\n" };

  return joinStrings(
    [
      templateParams(params),
      templateAddedParams(addedParams),
      templateResult(result),
      tempalteNote(props),
      method,
    ],
    lineConfig,
  );
}

function tempalteNote(props) {
  const lineConfig = { separator: "\n", before: "* " };
  const comments = joinStrings([props.summary, props.description], lineConfig);

  if (comments) {
    return `/**\n${comments}\n*/`;
  }

  return null;
}

function buildParams(props) {
  const { params } = props;

  if (params) {
    return {
      name: templateNameParams(props),
      type: templateSwaggerType(params),
    };
  }

  return null;
}

function templateParams(params) {
  if (params && params.type.length) {
    return `type ${params.name} = ${params.type};`;
  }

  return "";
}

function buildAddedParams(props) {
  const { addedParams, countVariants } = props;

  if (countVariants > 1 && addedParams) {
    return {
      name: templateNameAddedParams(props),
      type: templateSwaggerType(addedParams),
    };
  }

  return null;
}

function templateAddedParams(params) {
  if (params) {
    return `type ${params.name} = ${params.type};`;
  }

  return "";
}

function buildResult(props) {
  const { result } = props;

  return {
    name: templateNameResult(props),
    type: result ? templateSwaggerType(result) || "null" : "null",
  };
}

function templateResult(params) {
  return `type ${params.name} = RequestResult<${params.type}>;`;
}

function templateMethod(props, scope) {
  const { name } = props;
  const args = templateMethodArgs(scope);
  const result = templateMethodResult(scope);

  return `export function ${name}(${args}): ${result};`;
}

function templateMethodArgs(scope) {
  if (scope.params && scope.params.type.length) {
    if (scope.addedParams && scope.addedParams.type.length) {
      return `params: ${scope.params.name} & ${scope.addedParams.name}`;
    }

    return `params: ${scope.params.name}`;
  }

  if (scope.addedParams && scope.addedParams.type.length) {
    return `params: ${scope.addedParams.name}`;
  }

  return "";
}

function templateMethodResult(scope) {
  return scope.result.name;

  if (scope.result && scope.result.type.length) {
    return `RequestResult<${scope.result.name}>`;
  }

  return `RequestResult<null>`;
}

function templateNameParams(props) {
  const { name, index } = props;

  return `${capitalize(name)}Params${index}`;
}

function templateNameAddedParams(props) {
  const { name, index } = props;

  return `${capitalize(name)}AddedParams${index}`;
}

function templateNameResult(props) {
  const { name, index } = props;

  return `${capitalize(name)}Result${index}`;
}

module.exports = { templateRequestTypes };
