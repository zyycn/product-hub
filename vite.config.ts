import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig, loadEnv, UserConfig } from 'vite'
import checker from 'vite-plugin-checker'
import viteCompression from 'vite-plugin-compression'
import { createMpaPlugin } from 'vite-plugin-virtual-mpa'

import buildInfo from './config/build-info'
import mpaEntry from './config/mpa-entry'

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    root: process.cwd(),
    define: {
      __APP_INFO__: JSON.stringify({ ...env, ...buildInfo }),
      __APP_PAGES__: JSON.stringify(mpaEntry)
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
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia',
          {
            from: 'vue',
            imports: ['App'],
            type: true
          },
          {
            from: 'vue-router',
            imports: ['Router'],
            type: true
          }
        ],
        dts: 'src/types/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
          filepath: './node_modules/.unplugin-auto-import/.eslintrc.mjs'
        }
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
        eslint: {
          useFlatConfig: true,
          lintCommand: 'eslint "./src/**/*.{ts,tsx,vue}"'
        },
        stylelint: {
          lintCommand: 'stylelint "./src/**/*.{vue,css,scss}"'
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
    },
    optimizeDeps: { force: true }
  }
})
