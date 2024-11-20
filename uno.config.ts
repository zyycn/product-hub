import presetUno from '@unocss/preset-uno'
import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
