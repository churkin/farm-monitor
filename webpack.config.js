var webpack = require('webpack')

module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: "/dist/js",
    publicPath: "/dist/",
    filename: "app.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\//,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}