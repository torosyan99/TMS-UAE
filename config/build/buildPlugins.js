const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SvgSpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const CopyPlugin = require("copy-webpack-plugin");

const webpack = require("webpack");

function buildPlugins(options) {
  const { pages, isDev } = options;

  const plugins = [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css",
      ignoreOrder: true,
    }),

    ...pages.map(
      ({ template, chunks, filename }) =>
        new HtmlWebpackPlugin({
          filename,
          template,
          chunks,
        })
    ),

    new SvgSpriteLoaderPlugin({ plainSprite: true }),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  return plugins;
}

module.exports = buildPlugins;
