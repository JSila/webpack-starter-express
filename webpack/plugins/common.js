const webpack = require('webpack')
const {resolve} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = [
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    template: resolve('src', 'index.html')
  }),
  new CleanPlugin(['public'], {
    root: resolve(),
    verbose: false,
    dry: true,
  })
]
