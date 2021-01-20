const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function getEntry() {
  const entry = {}
  const list = glob.sync('./src/script/*.js')
  list.forEach(function (path) {
    const [flag, suffix] = ['script/', '.js']
    const start = path.indexOf(flag) + flag.length
    const end = path.length - suffix.length
    const name = path.slice(start, end)
    entry[name] = path
  })
  return entry
}

function getHtmlConfig(name) {
  return {
    chunks: [name],
    template: `./src/view/${name}.html`,
    filename: `${name}.html`,
    favicon: './static/logo.png', //该配置回导致在html同级目录下多出一个logo.png文件
    hash: true,
    inject: 'body',
  }
}

function createHtmlWebpackPlugin(list) {
  const pluginArr = []
  for (const key in list) {
    if (list.hasOwnProperty(key)) {
      const configOptions = getHtmlConfig(key)
      pluginArr.push(new HtmlWebpackPlugin(configOptions))
    }
  }
  return pluginArr
}

module.exports = { getEntry, createHtmlWebpackPlugin }