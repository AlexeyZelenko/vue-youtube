// файл vue.config.js расположен в корне вашего репозитория

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' + process.env.CI_PROJECT_NAME + '/'
    : '/'
}
