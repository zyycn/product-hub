module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['import', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    './node_modules/.unplugin-auto-import/.eslintrc.json' // 自动导入的ESlint修复
  ],
  rules: {
    'prettier/prettier': 'warn',

    'vue/multi-word-component-names': 'off',

    '@typescript-eslint/no-explicit-any': 'off',

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
}
