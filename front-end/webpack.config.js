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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: require.resolve('babel-loader'),
    }, {
      test: /\.css$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
      ],
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
