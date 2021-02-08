const { jsonToXml } = require("./json-to-xml");
const { xmlToJson } = require("./xml-to-json");

function request(method, url, defaultParams = {}) {
  return (params = {}) => {
    const query = new URLSearchParams(params.query).toString();
    const headers = { ...defaultParams.header, ...params.header };

    let body;

    const buildFormData = (object) => {
      const result = new FormData();

      Object.keys(object).forEach((key) => {
        result.append(key, object[key]);
      });

      return result;
    };

    if (params.body) {
      switch (headers.accept) {
        case "multipart/form-data":
          body = buildFormData(params.body);
          break;
        case "application/xml":
          body = jsonToXml(params.body);
          break;
        case "application/json":
          body = JSON.stringify(params.body);
          break;
        default:
          body = params.body;
          break;
      }
    } else if (params.formData) {
      body = buildFormData(params.formData);
    }

    return fetch(`${url}${query ? `?${query}` : ""}`, {
      method,
      headers,
      body,
    }).then(async (response) => {
      let data = null;

      const headersValues = Object.values(headers);
      const headersKeys = Object.keys(headers).map((value) => value.toLocaleLowerCase());

      switch (headersValues[headersKeys.indexOf("content-type")]) {
        case "multipart/form-data":
          data = await response.formData();
          break;
        case "application/xml":
          data = xmlToJson(await response.text());
          break;
        case "application/json":
          data = await response.json();
          break;
        default:
          break;
      }

      return { response, data };
    });
  };
}

module.exports = { request };
