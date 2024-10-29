import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import importPlugin from 'eslint-plugin-import'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  // 忽略文件
  {
    ignores: ['node_modules', 'dist', 'public']
  },

  // 配置全局变量
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  // JS推荐配置
  eslint.configs.recommended,
  // TS推荐配置
  ...tseslint.configs.recommended,
  // Vue推荐配置
  ...eslintPluginVue.configs['flat/recommended'],
  // 代码风格
  eslintPluginPrettierRecommended,

  // 全局规则
  {
    plugins: {
      import: importPlugin
    },
    rules: {
      'prettier/prettier': 'warn',

      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unexpected-multiline': 'error', // 禁止空余的多行
      'no-useless-escape': 'off', // 禁止不必要的转义字符

      // 导入规则
      'import/first': 'error', // 确保所有导入出现在其他语句之前
      'import/no-duplicates': 'error',
      'import/order': 'error' // 导入排序
    }
  },

  // Vue规则
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...(await import('./node_modules/.unplugin-auto-import/.eslintrc.mjs')).default.globals
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
)
