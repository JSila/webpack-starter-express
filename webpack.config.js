const {resolve} = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = require('./webpack/plugins')

const isProd = process.env.NODE_ENV == 'production'

module.exports = {
  devtools: isProd ? 'source-map' : 'eval',
  entry: [
    resolve('src', 'js', 'main.js'),
    resolve('src', 'scss', 'main.scss')
  ],
  output: {
    filename: 'bundle.[hash].js',
    path: resolve('public'),
    publicPath: '/'
  },
  plugins: plugins(isProd),
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: isProd ? ExtractTextPlugin.extract(['css', 'sass']) : 'style!css!sass'
    }, {
      test: /\.json$/,
      loaders: ['json-loader']
    }]
  },
  resolve: {
    extentions: ['', '.js', '.json']
  }
}
