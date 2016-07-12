const path = require('path');
const webpack = require('webpack');
const config = require('config');
const _ = require('lodash');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry:  [
    // 'webpack-dev-server/client?http://127.0.0.1:8080/',
    // 'webpack/hot/only-dev-server',
    './client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions: ['', '.js', '.jsx']
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  externals: {
    config: JSON.stringify(_.pick(config, ['API_PATH', 'BASE_URL'])),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'dev'),
      },
    }),
    new ExtractTextPlugin("bundle.css")
  ]/*,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
    },
    host: '127.0.0.1'
  }*/
};