module.exports = ({ dummy = "DEMO" } = {}) => ({
  templateRequestCode: (params, { requestSwaggerData }) => {
    console.log("PARAMS", params);
    console.log("requestSwaggerData", requestSwaggerData);
    return dummy;
  },
});
