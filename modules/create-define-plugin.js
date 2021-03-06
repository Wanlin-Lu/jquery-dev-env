const webpack = require('webpack')

/**
 * @description 根据dev.config.js或prod.config.js设定的值创建DefinePlugin，前端页面可全局调用这些值
 */
module.exports = options => {
  const obj = {}
  for (const key in options) {
    const value = options[key]
    obj[key] = JSON.stringify(value)
  }
  return new webpack.DefinePlugin(obj)
}