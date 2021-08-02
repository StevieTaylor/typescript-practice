/*
 * @Author: Stevie
 * @Date: 2021-08-02 15:54:13
 * @LastEditTime: 2021-08-02 15:55:55
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
