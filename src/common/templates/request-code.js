const { joinStrings } = require("../../lib/join-strings");
const { printObject, objectToArray } = require("../../lib/print-object");

function templateRequestCode(props) {
  const name = props.name;
  const params = templateParams(props);
  const body = templateBody(props);

  return `export function ${name}(${params}) {${body}}`;
}

function templateParams(props) {
  const { isExistParams } = props;

  return isExistParams ? "params" : "";
}

function templateBody(props) {
  const wariningDeprecated = templateWariningDeprecated(props);
  const request = templateRequest(props);
  const joinConfig = { before: "  ", separator: "\n" };
  const body = joinStrings([wariningDeprecated, request], joinConfig);

  return lineBreak(body, { before: true, after: true });
}

function templateWariningDeprecated(props) {
  const { isWarningDeprecated, name } = props;

  if (isWarningDeprecated) {
    return `console.warn("Api method '${name}' is deprecated");`;
  }
}

function templateRequest(props) {
  const args = templateRequestArgs(props);
  const params = templateParams(props);

  return `return request(${args})(${params});`;
}

function templateRequestArgs(props) {
  const method = `"${props.method}"`;
  const url = `\`${templateUrl(props)}\``;
  const defaultParams = templateDefaultParams(props);
  const joinConfig = { separator: ", " };
  const args = joinStrings([method, url, defaultParams], joinConfig);

  return args;
}

function templateUrl(props) {
  if (props.isExistParams) {
    return props.url.replace(/\{(.*)\}/g, "${params.path.$1}");
  }

  return props.url;
}

function templateDefaultParams(props) {
  const { defaultParams } = props;

  if (defaultParams && typeof defaultParams === "object" && Object.keys(defaultParams).length) {
    return printObject(objectToArray(defaultParams), (propValue) =>
      printObject(objectToArray(propValue)),
    );
  }

  return "";
}

function lineBreak(value, options = {}) {
  const before = options.before ? "\n" : "";
  const after = options.before ? "\n" : "";

  return value.length ? `${before}${value}${after}` : "";
}

module.exports = { templateRequestCode };
