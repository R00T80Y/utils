module.exports = {
  editorconfig: true,

  semi: true,
  singleQuote: true,
  quoteProps: 'preserve',

  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,

  arrowParens: 'always',
  singleAttributePerLine: true,

  overrides: [
    {
      files: '*.yml',
      options: {
        singleQuote: false,
      },
    },
  ],
};
