import { defineConfig, loadEnv, UserConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import { createMpaPlugin } from 'vite-plugin-virtual-mpa'
import mpaEntry from './config/mpa-entry'
import buildInfo from './config/build-info'

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      __APP_ENV__: JSON.stringify({ ...env, ...buildInfo })
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      vue(),
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
          drop_console: ['log', 'warn', 'error'] as any,
          drop_debugger: true
        }
      }
    },
    optimizeDeps: { force: true }
  }
})
