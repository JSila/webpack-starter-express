const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../webpack.config')

webpackConfig.entry.unshift('webpack-hot-middleware/client?reload=true')

let compiler = webpack(webpackConfig)

let devMiddleware = webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  contentBase: webpackConfig.output.path,
  noInfo: true,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
})

let hotMiddleware = webpackHotMiddleware(compiler)

module.exports = app => {
  app.use(devMiddleware)
  app.use(hotMiddleware)

  return {
    compiler,
    devMiddleware,
    hotMiddleware
  }
}
