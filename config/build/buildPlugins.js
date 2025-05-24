const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SvgSpriteLoaderPlugin = require("svg-sprite-loader/plugin");

const webpack = require("webpack");


function buildPlugins(options) {
  const { pages, isDev } = options;

  const plugins = [
    ...pages.map(
      ({ filename, chunks, template }) =>
        new HtmlWebpackPlugin({
          filename,
          template,
          chunks,
        })
    ),
    new SvgSpriteLoaderPlugin({ plainSprite: true }),
    new webpack.ProgressPlugin(),
  ];

  if (!isDev) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:6].css",
        ignoreOrder: true,
      })
    );
  }
  return plugins;
}

module.exports = buildPlugins;
