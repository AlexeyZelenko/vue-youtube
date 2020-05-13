module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-youtube/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}
