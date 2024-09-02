module.exports = {
  plugins: [
    require('postcss-preset-env')(),
    require('postcss-pxtorem')({
      rootValue: 16,
      minPixelValue: 0,
      propList: ['*'],
      selectorBlackList: ['unpxtorem', 'html'],
      exclude: file => {
        const { sep } = require('path')
        const { findIndex } = require('lodash')
        const adaptivePages = require('./config/adaptive-page.ts')

        const filePath = file.split(sep).join('/')
        return findIndex(adaptivePages, page => filePath.includes(page)) === -1
      }
    })
  ]
}
