const isProd = process.env.NODE_ENV == 'production'
const isTest = process.env.NODE_ENV == 'test'
const isDev = !isTest && !isProd
const PORT = process.env.PORT || 8080

const {resolve} = require('path');
const express = require('express')

let app = module.export = express()

// app stuff

if (!isProd) {
  app.use(express.static('public'))

  let {devMiddleware} = require('./webpack/applyMiddlewares')(app)

  app.get('/*', (req, res) => {
    res.write(devMiddleware.fileSystem.readFileSync(resolve('public', 'index.html')))
    res.end()
  })
}

if (!isTest) {
  let server = app.listen(PORT, () => {
    console.log('Running on http://localhost:%s', server.address().port)
  })
}
