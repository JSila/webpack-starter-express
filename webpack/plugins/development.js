const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')

module.exports = [
  new webpack.HotModuleReplacementPlugin(),
  new CaseSensitivePathsPlugin(),
  new WatchMissingNodeModulesPlugin('./node_modules')
]
