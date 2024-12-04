import { sep } from 'node:path'
import { findIndex } from 'lodash-es'
import postcssPresetEnv from 'postcss-preset-env'
import postcssPxtorem from 'postcss-pxtorem'
import postcssImport from 'postcss-import'
import tailwindcss from 'tailwindcss'
import adaptivePages from './config/mpa-adative-pages'

export default () => {
  return {
    plugins: [
      postcssImport(),
      tailwindcss(),
      postcssPresetEnv(),
      postcssPxtorem({
        rootValue: 16,
        minPixelValue: 0,
        propList: ['*'],
        selectorBlackList: ['ignore-', 'html'],
        exclude: (file: string) => {
          const filePath = file.split(sep).join('/')
          return findIndex(adaptivePages, (page: string) => filePath.includes(page)) === -1
        }
      })
    ]
  }
}
