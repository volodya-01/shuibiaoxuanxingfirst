'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap,
    extract: isProduction
  }),
/*   cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting, */
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
  postcss:[require('postcss-px2rem')({'remUnit':10,'baseDpr':2})] /*因为我是以100px宽度为基准，所以remUnit为1*/     
}
