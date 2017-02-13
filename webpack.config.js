var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var PORT = 5000;
var ROOT_PATH = __dirname;
var DIST_PATH = path.resolve(__dirname, 'dist');
var SRC_PATH = path.resolve(__dirname, 'sample');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: DIST_PATH,
    port: PORT
  },
  entry: [
    'webpack-dev-server/client?http://localhost:' + PORT,
    SRC_PATH + '/index.js'
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
        loader: ["react-hot-loader", "babel-loader"]
      }
    ]
  },
  resolve: {
    modules: [SRC_PATH, "node_modules"],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:' + PORT })
  ]
}