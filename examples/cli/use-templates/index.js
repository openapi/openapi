const { execSync } = require("child_process");

execSync(
  "node ./src/cli.js --config ./examples/cli/use-templates/config.js --mode dev",
);
