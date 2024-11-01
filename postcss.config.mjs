import { sep } from 'path'
import { findIndex } from 'lodash-es'
import postcssPresetEnv from 'postcss-preset-env'
import postcssPxtorem from 'postcss-pxtorem'

const adaptivePages = []

export default function () {
  return {
    plugins: [
      postcssPresetEnv(),
      postcssPxtorem({
        rootValue: 16,
        minPixelValue: 0,
        propList: ['*'],
        selectorBlackList: ['unpxtorem', 'html'],
        exclude: file => {
          const filePath = file.split(sep).join('/')
          return findIndex(adaptivePages, page => filePath.includes(page)) === -1
        }
      })
    ]
  }
}
