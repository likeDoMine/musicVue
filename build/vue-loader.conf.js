var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production';
var px2rem = require('postcss-px2rem');
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss:[px2rem({remUnit: 75})]
};
