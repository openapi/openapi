module.exports = (options) => ({
  parentOptions: options,
  demo: 3,
  just: 5,
  presets: [[require.resolve("./preset-options"), { options }]],
  deep: true,
});
