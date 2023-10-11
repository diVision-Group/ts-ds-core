const webpackBase = require("../webpack.config");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx", 
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../docs/**/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials", 
    "@storybook/addon-actions", 
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  framework: "@storybook/web-components",
  core: {
    builder: "webpack5",
  },
  webpackFinal: (config) => {
    config.module.rules.push(...webpackBase.module.rules);
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: "node_modules/@transdevoficial/design-tokens/dist/css/globals.css",
            to: "tokens/globals.css",
          },
          {
            from: `**/**/*.css`,
            context: "node_modules/@transdevoficial/design-tokens/dist/css",
            to: "tokens/[path]/[name][ext]",
          },
        ],
      })
    );
    return config;
  },
};
