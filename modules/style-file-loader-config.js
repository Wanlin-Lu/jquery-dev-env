const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/**
 * @description 根据入参判定是否启用热重载
 * @param {Boolean} | isOn
 * @returns {Array}
 */
module.exports = (isOn) => {
  const baseLoader = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../',
        // hmr: isHmr,
        // reloadAll: isHmr,
      },
    },
    'css-loader'
  ]

  return [
    {
      test: /\.styl$/,
      use: [...baseLoader,'stylus-loader']
    },
    {
      test: /\.(sa|sc)ss$/,
      use: [
        ...baseLoader,
        {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            postcssOptions: {
              plugins: [
                ["autoprefixer"]
              ]
            }
          }
        },
        'sass-loader'
      ]
    },
    {
      test: /\.css$/,
      use: baseLoader,
    }
  ]
}
