const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'test'
const isDev = !isTest && !isProd
const PORT = process.env.PORT || 8080

module.exports = {
  PORT,
  isProd,
  isTest,
  isDev
}
