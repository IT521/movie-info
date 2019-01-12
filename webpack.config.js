'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { dependencies } = require('./package.json');

const APP_PORT = process.env.npm_package_config_node_port || 3000;
const dependencyKeys = Object.keys(dependencies || {}).filter(
  (key) => !key.startsWith('@')
);
const pathsToClean = ['dist', 'build'];
const cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false
};

module.exports = {
  entry: {
    main: ['@babel/polyfill', 'react-hot-loader/patch', './src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          },
          {
            loader: 'prettier-loader',
            options: {
              enforce: 'pre',
              exclude: /node_modules/
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new MiniCssExtractPlugin({
      filename: 'style.[hash].css'
    }),
    new HtmlWebPackPlugin({
      inject: false,
      hash: true,
      template: path.join(__dirname, 'public/views', 'index.ejs'),
      files: {
        chunks: {
          main: {
            entry: '[name].[hash].js',
            css: []
          }
        }
      }
    }),
    // new HtmlWebPackPlugin({
    //   inject: false,
    //   hash: true,
    //   filename: 'movie.html',
    //   template: path.join(__dirname, 'public/views', 'movie.ejs')
    // }),
    // new HtmlWebPackPlugin({
    //   inject: false,
    //   hash: true,
    //   filename: 'movies.html',
    //   template: path.join(__dirname, 'public/views', 'movies.ejs')
    // }),
    // new HtmlWebPackPlugin({
    //   inject: false,
    //   hash: true,
    //   filename: 'principal.html',
    //   template: path.join(__dirname, 'public/views', 'principal.ejs')
    // }),
    new WebpackMd5Hash(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ],
  externals: [...dependencyKeys],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Configs: path.resolve(__dirname, 'config/'),
      Routes: path.resolve(__dirname, 'routes/')
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: APP_PORT,
    publicPath: `http://localhost:${APP_PORT}/dist/`,
    hotOnly: true
  }
};
