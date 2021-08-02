/*
 * @Author: Stevie
 * @Date: 2021-08-02 15:54:13
 * @LastEditTime: 2021-08-02 15:55:39
 * @LastEditors: Stevie
 * @Description:
 */
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')

const devConfig = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8020,
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
