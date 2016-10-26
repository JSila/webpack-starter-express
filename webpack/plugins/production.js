const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin')

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
    },
    mangle: {
      screw_ie8: true
    },
    output: {
      comments: false,
      screw_ie8: true
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('main.[hash].css'),
  new ManifestPlugin({
    fileName: 'asset-manifest.json'
  })
]
