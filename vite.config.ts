import { resolve } from 'path'
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
import unoCSS from 'unocss/vite'
import commitInfo from './config/commit-info'
import mpaEntry from './config/mpa-entry'

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    root: process.cwd(),
    define: {
      __APP_INFO__: JSON.stringify({ ...env, ...commitInfo, PAGES: mpaEntry })
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      unoCSS(),
      unpluginAutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: 'types/auto-imports.d.ts'
      }),
      unpluginVueComponents({
        dts: false,
        resolvers: [ElementPlusResolver()]
      }),
      createMpaPlugin({
        htmlMinify: true,
        verbose: false,
        template: 'config/mpa-template.html',
        pages: mpaEntry,
        rewrites: [{ from: /^\/$/, to: '/index.html' }]
      }),
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
      })
    ],
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: ['log', 'warn', 'error'],
          drop_debugger: true
        }
      }
    }
  }
})
