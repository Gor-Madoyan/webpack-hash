const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index1: './index.js',
    index2: './goodBy.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
}