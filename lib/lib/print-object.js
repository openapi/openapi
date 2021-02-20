function printObject(properties, callback = (value) => value) {
  if (properties.length) {
    return (
      properties.reduce((memo, [name, value]) => {
        memo += ` "${name}": ${callback(value)},`;

        return memo;
      }, "{") + " }"
    );
  }

  return "";
}

function printObjectType(properties, callback = (value) => value) {
  if (properties.length) {
    return (
      properties.reduce((memo, [name, property]) => {
        const { required = false } = property;
        const requiredStr = required ? "" : "?";

        memo += ` "${name}"${requiredStr}: ${callback(property.value)};`;

        return memo;
      }, "{") + " }"
    );
  }

  return "";
}

function objectToArray(object) {
  return Object.keys(object).reduce((memo, name) => {
    memo.push([name, object[name]]);
    return memo;
  }, []);
}

function objectToArrayType(object) {
  return Object.keys(object).reduce((memo, name) => {
    memo.push([name, { value: object[name], requried: true }]);
    return memo;
  }, []);
}

module.exports = {
  printObject,
  printObjectType,
  objectToArray,
  objectToArrayType,
};
