/*
 * @Author: Stevie
 * @Date: 2021-07-30 16:30:29
 * @LastEditTime: 2021-07-30 16:56:30
 * @LastEditors: Stevie
 * @Description:
 */
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')

const prodConfig = {
  mode: 'production',
  devtool: 'hidden-source-map',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
}

module.exports = merge(baseConfig, prodConfig)
