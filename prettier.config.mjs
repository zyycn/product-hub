export default {
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  trailingComma: 'none',
  printWidth: 120,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.json5'],
      options: {
        quoteProps: 'preserve',
        singleQuote: false
      }
    }
  ]
}
