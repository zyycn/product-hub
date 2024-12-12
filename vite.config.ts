import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv, UserConfig } from 'vite'
import checker from 'vite-plugin-checker'
import viteCompression from 'vite-plugin-compression'
import { createMpaPlugin } from 'vite-plugin-virtual-mpa'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unpluginAutoImport from 'unplugin-auto-import/vite'
import unpluginVueComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import mpaConfig from './config/mpa-config'
import gitRevision from './config/git-revision'

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    root: process.cwd(),
    base: './',
    define: {
      __APP_INFO__: JSON.stringify({ ...env, ...gitRevision, PAGES: mpaConfig.pages })
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      tailwindcss(),
      unpluginAutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: 'types/auto-imports.d.ts'
      }),
      unpluginVueComponents({
        dts: false,
        resolvers: [ElementPlusResolver()]
      }),
      createMpaPlugin(mpaConfig),
      viteCompression({
        verbose: false,
        deleteOriginFile: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
      }),
      checker({
        root: process.cwd(),
        terminal: false,
        vueTsc: {
          tsconfigPath: 'tsconfig.app.json'
        },
        eslint: {
          useFlatConfig: true,
          lintCommand: 'eslint src'
        },
        stylelint: {
          lintCommand: 'stylelint **/*.{vue,css,scss}'
        }
      }),
      vueDevTools()
    ],
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          assetFileNames: 'static/[ext]/asset-[name]-[hash].[ext]',
          chunkFileNames: 'static/js/chunk-[name]-[hash].js',
          entryFileNames: 'static/js/entry-[name]-[hash].js'
        }
      }
    },
    esbuild: {
      pure: ['console.log', 'console.warn', 'console.error'],
      drop: ['debugger']
    }
  }
})
