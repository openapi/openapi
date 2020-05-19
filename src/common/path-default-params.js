function pathDefaultParams(variants) {
  if (variants.length === 1) {
    const { consume, produce } = variants[0];
    const header = {};

    if (consume) {
      header.accept = `"${consume}"`;
    }

    if (produce) {
      header["Content-Type"] = `"${produce}"`;
    }

    if (Object.keys(header).length) {
      return { header };
    }
  }

  return null;
}

module.exports = { pathDefaultParams };
