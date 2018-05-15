
var path = require('path');
var webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [ './front/main.js' ],
  output: {
    publicPath: '/',
    filename: 'build.js',
    chunkFilename: '[name]-chunk.js',
    path: path.resolve(__dirname, '../dist'),
  },

  module: {
    rules: [
      {
        test: /\.(css|styl)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ],
      }, {
        test: /\.(vue)$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
        }
      }, {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]'
        }
      }]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      //'@lib': path.resolve(__dirname, '../common/lib'),
    },
    extensions: [ '*', '.js', '.vue', '.json' ]
  },

  plugins: [
    new copyWebpackPlugin([{
      to: 'vendors/',
      from: 'vendors/',
      context: path.resolve(__dirname, '../front/')
    }]),
  ],

  performance: {
    hints: false
  },

}

