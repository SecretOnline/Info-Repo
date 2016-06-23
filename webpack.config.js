var path = require('path');
var webpack = require('webpack');

var PATHS = {
  app: './src/main.jsx',
  build: './www/scripts'
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
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
};
