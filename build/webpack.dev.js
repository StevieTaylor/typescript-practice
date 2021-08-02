/*
 * @Author: Stevie
 * @Date: 2021-07-30 16:30:22
 * @LastEditTime: 2021-07-30 16:57:43
 * @LastEditors: Stevie
 * @Description:
 */
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')

const devConfig = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 7300,
    hot: true,
    compress: true,
    stats: 'errors-only',
  },
  devtool: 'eval-cheap-module-source-map',
  cache: {
    type: 'memory',
  },
  optimization: {
    minimize: true,
  },
}

module.exports = merge(baseConfig, devConfig)
