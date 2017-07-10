'use strict';

var path = require('path');
var APP = path.join(__dirname, 'app');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["react", "es2015", "stage-0", "react-hmre"]
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }]
  },
  resolve: {
    alias: {
      actions: path.join(APP, 'actions'),
      components: path.join(APP, 'components'),
      constants: path.join(APP, 'constants'),
      containers: path.join(APP, 'containers'),
      reducers: path.join(APP, 'reducers'),
      routes: path.join(APP, 'routes'),
      sagas: path.join(APP, 'sagas'),
      utils: path.join(APP, 'utils'),
      img: path.join(APP, 'assets', 'img'),
      stylesheet: path.join(APP, 'assets', 'stylesheet'),
    },
  }
};
