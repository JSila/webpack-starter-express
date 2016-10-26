const {resolve} = require('path');
const express = require('express')

const {isTest, isProd, PORT} = require('./config/app')

let app = module.exports = express()

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
    console.log(`Running on http://localhost:${server.address().port}`)
  })
}
