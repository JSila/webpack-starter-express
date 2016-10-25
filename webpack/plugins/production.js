const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('main.[hash].css')
]
