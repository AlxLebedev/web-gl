const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  entry: {
    index: './src/js/index.js',
    cubes: './src/js/cubes.js',
    torus: './src/js/torus.js',
    scene: './src/js/scene.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new WebpackMd5Hash(),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      hash: true,
      template: './src/pages/index.html',
      filename: 'index.html',
      favicon: './src/static/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      chunks: ['cubes'],
      hash: true,
      template: './src/pages/cubes.html',
      filename: 'cubes.html',
      favicon: './src/static/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      chunks: ['torus'],
      hash: true,
      template: './src/pages/torus.html',
      filename: 'torus.html',
      favicon: './src/static/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      chunks: ['scene'],
      hash: true,
      template: './src/pages/scene.html',
      filename: 'scene.html',
      favicon: './src/static/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: './postcss.config.js' } }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: './postcss.config.js' } }
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
    ],
  },
};
