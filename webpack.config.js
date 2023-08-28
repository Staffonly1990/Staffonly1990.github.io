const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { mergeWithEnvConfig } = require('@cec.front/webpack-config');

module.exports = (webpackConfigEnv, argv) => {
  console.log(argv?.mode || 'development');
  return mergeWithEnvConfig('development', {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),
    ],
    resolve: {
      plugins: [],
    },
    module: {
      rules: [],
    },
  });
};
