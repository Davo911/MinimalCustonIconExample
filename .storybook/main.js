const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require('path');

module.exports = {
  webpackFinal: async (config) => {

       config.resolve.modules = [
         path.resolve(__dirname, "..", "src"),
         "node_modules",
       ]
       config.resolve.plugins = config.resolve.plugins || [];
       config.resolve.plugins.push(new TsconfigPathsPlugin({}));
       return config;
  },
  logLevel: 'debug',
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss',
    '@storybook/addon-docs'
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "webpack5"
  },
  features: {
    babelModeV7: true,
  },
}