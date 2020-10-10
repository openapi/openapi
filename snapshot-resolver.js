module.exports = {
  testPathForConsistencyCheck: "lib/demo.test.js",

  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace(/\.test\.([tj]sx?)/, `${snapshotExtension}.$1`),

  resolveTestPath: (snapshotPath, snapshotExtension) =>
    snapshotPath.replace(snapshotExtension, ".test"),
};
