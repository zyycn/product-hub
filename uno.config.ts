import presetUno from '@unocss/preset-uno'
import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno({
      important: '#app'
    }),
    presetRemToPx({
      baseFontSize: 4
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  postprocess: [
    util => {
      // implement postcss-pxtorem
      const pxRE = /(-?[\.\d]+)px/g
      util.entries.forEach(entry => {
        const value = entry[1]
        if (typeof value === 'string' && pxRE.test(value)) {
          const rootValue = 16
          entry[1] = value.replace(pxRE, (_, pixelValue) => `${pixelValue / rootValue}rem`)
        }
      })
    }
  ]
})
