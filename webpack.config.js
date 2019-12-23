/* eslint-disable import/no-dynamic-require */
/* eslint-disable indent */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');

const loadModeConfig = env => require(`./configs/${env.mode}.config`)(env);

module.exports = env => webpackMerge(
    {
      mode: env.mode,
      context: path.resolve(__dirname, 'src'),
      entry: './index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
          {
            test: /\.html$/,
            use: 'html-loader',
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[path][name].[ext]',
                  limit: 10000,
                },
              },
              'img-loader',
            ],
          },
          {
            test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/',
                  limit: 10000,
                  mimetype: 'application/font-woff',
                },
              },
            ],
          },
          {
            test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/',
                },
              },
            ],
          },
          {
            test: /\.hbs$/,
            exclude: /node_modules/,
            use: 'handlebars-loader',
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar(),
      ],
    },
    loadModeConfig(env),
  );
