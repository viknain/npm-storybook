'use strict';

const path = require("path");
const ROOT = path.resolve(__dirname, "../");
const SRC = `${ROOT}/src`;

module.exports = {
  stories: ["../src/**/*.stories.[tj]sx"],
  addons: [
  
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '../src')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    }, 
    {
      name: "@storybook/addon-docs",
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '../src')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    }, 
    "@storybook/addon-controls",
    "storybook-svgr-react-component",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.tsx?$/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.stories\.tsx?$/,
        loaders: [
          {
            loader: require.resolve("@storybook/source-loader"),
            options: { parser: "typescript" },
          },
        ],
        enforce: "pre",
      }
    );
    config.resolve.extensions.push(".ts", ".tsx");

    config.resolve.modules.push(SRC, "node_modules");

    return config;
  },
};
//# sourceMappingURL=index.js.map
