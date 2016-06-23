var path = require('path');
var webpack = require('webpack');

var PATHS = {
  app: './src/main.jsx',
  build: './www/scripts'
};

module.exports = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'scripts/bundle.js',
  },
  module: {
    loaders: [{
      test: /.jsx/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devServer: {
    contentBase: './www',
    historyApiFallback: true
  }
};
