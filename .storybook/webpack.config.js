const { resolve } = require('path')
const {
  compilerOptions: { paths },
} = require('../jsconfig')

// Convert jsonfig paths into webpack alias
const alias = Object.fromEntries(
  Object.keys(paths).map((key) => {
    return [
      key.split('/*')[0],
      resolve(__dirname, '../' + paths[key][0].split('/*')[0]),
    ]
  })
)

module.exports = ({ config }) => {
  config.resolve.extensions.push('.svg')

  config.resolve.alias = {
    ...config.resolve.alias,
    ...alias,
  }

  config.module.rules = config.module.rules.map((data) => {
    if (/svg\|/.test(String(data.test)))
      data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/

    return data
  })

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      { loader: require.resolve('babel-loader') },
      { loader: require.resolve('react-svg-loader') },
    ],
  })

  return config
}
