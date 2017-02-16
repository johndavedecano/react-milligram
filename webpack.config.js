var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var PORT = 5000;
var DIST_PATH = path.resolve(__dirname, 'dist');
var SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: DIST_PATH,
    port: PORT
  },
  entry: [
    'webpack-dev-server/client?http://localhost:' + PORT,
    SRC_PATH + '/sample.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders:[
      { 
        test: /\.js[x]?$/,
        include: SRC_PATH,
        exclude: /node_modules/,
        loader: ['react-hot-loader', 'babel-loader']
      },
      {
          test: /\.scss$/,
          loaders: [
              'style-loader?sourceMap',
              'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
              'sass-loader?sourceMap'
          ]
      }
    ]
  },
  resolve: {
    modules: [SRC_PATH, 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({url: 'http://localhost:' + PORT})
  ]
}