var path = require('path');
var webpack = require('webpack');
require('es6-promise').polyfill();

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: [
          require.resolve('babel-preset-es2015'),
          require.resolve('babel-preset-react'),
        ],
      },
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.woff$/,
      loader: 'url?limit=100000'
    }],
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    fallback: path.join(__dirname, "node_modules")
  },
};
