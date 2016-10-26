const {resolve} = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = require('./scripts/webpack/plugins')

const {isProd} = require('./config/app')

module.exports = {
  devtools: isProd ? 'source-map' : 'eval',
  entry: [
    resolve('config', 'polyfills.js'),
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
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: resolve('src', 'js', 'main.js'),
      }
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: isProd ? ExtractTextPlugin.extract(['css', 'sass']) : ['style', 'css', 'sass'].join('!')
    }, {
      test: /\.json$/,
      loaders: ['json-loader']
    }]
  },
  resolve: {
    extentions: ['', '.js', '.json']
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
