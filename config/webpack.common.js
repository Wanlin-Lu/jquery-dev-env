const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const getDefinePlugin = require('../modules/create-define-plugin')
const { getEntry, createHtmlWebpackPlugin } = require('../modules/html-webpack-config')

const entries = getEntry() //获取到所有入口文件

const DefinePlugin = process.env.NODE_ENV === 'production' ? getDefinePlugin(require('./dev.config')) : getDefinePlugin(require('./prod.config'))

module.exports = {
  /* entry: {
    index: './src/script/index.js',
    about: './src/script/about.js'
  }, */
  entry: entries,
  output: {
    publicPath: './', // debug: Error: Automatic publicPath is not supported in this browser
    filename: 'js/[name]-[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: 'font',
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              // publicPath: './images/',
              outputPath: 'img',
            },
          },
        ],
        // use: 'file-loader'
        // use: ['url-loader?name=fonst/[name].[md5:hash:hex:7].[ext]']
      },
      {
        test: /\.js$/,
        exclude: /[\\/]node_modules[\\/]/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attributes: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    /* 全局引入jquery、lodash、echarts */
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash',
      echarts: 'echarts',
      Popper: ['popper.js', 'default'],
    }),
    DefinePlugin,
    ...createHtmlWebpackPlugin(entries),
  ],
}