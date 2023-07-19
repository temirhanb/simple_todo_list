// @ts-ignore
const path = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: path,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json"
      }
    }
  ]
};
