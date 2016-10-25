let common = require('./common')

module.exports = isProd => [
  ...common,
  ...require(isProd ? './production' : './development')
]
