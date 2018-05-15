
var webpack = require('webpack');

module.exports = {
  entry: [ 'webpack-hot-middleware/client' ],

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    noInfo: true,
    //overlay: true,
    historyApiFallback: true,
  },

  devtool: '#eval-source-map'
}
