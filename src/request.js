function request(method, url, defaultParams = {}) {
  return (params = {}) => {
    const query = new URLSearchParams(params.query).toString();

    let body;

    if (params.body) {
      if (defaultParams.header) {
        switch (defaultParams.header.accept) {
          case "application/json":
            body = JSON.stringify(params.body);
            break;
          default:
            body = params.body;
            break;
        }
      }
    } else if (params.formData) {
      body = params.formData;
    }

    return fetch(`${url}${query ? `?${query}` : ""}`, {
      method,
      headers: { ...defaultParams.header, ...params.header },
      body,
    });
  };
}
