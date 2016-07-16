var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var PATHS = {
  js: './src/js/main.jsx',
  css: './src/css/main.scss',
  buildDir: './www'
};

module.exports = {
  entry: {
    js: PATHS.js,
    css: PATHS.css
  },
  output: {
    path: PATHS.buildDir,
    filename: 'scripts/info.js',
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /.s?css$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles/info.css')
  ],
  devServer: {
    contentBase: './www',
    historyApiFallback: true
  }
};
