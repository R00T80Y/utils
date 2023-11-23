module.exports = {
  'root': true,
  'env': {
    'node': true,
    'browser': true,
    'es6': true,
  },
  'parser': '@typescript-eslint/parser',
  'plugins': ['@typescript-eslint'],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  'parserOptions': {
    'tsconfigRootDir': __dirname,
    'parser': '@typescript-eslint/parser',
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
  },
  'rules': {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',

    // Запятая при описании обьектов
    // 'comma-dangle': ['error', 'always-multiline'],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
      },
    ],

    // Везде одинарные ковычки
    'quotes': ['error', 'single'],

    // Точка с запятой
    'semi': ['error', 'always'],

    // Табы 2 пробела
    'indent': ['error', 2],

    // Принудительное применение пробелов внутри блоков после открытия блока и перед закрытием блока
    'block-spacing': ['error', 'always'],

    // Обеспечьте постоянное расстояние между блоками / if (foo){
    'space-before-blocks': ['error', 'always'],

    // Стиль блоков
    'brace-style': ['error', '1tbs'],

    // Всегда const, let только если переопределяется
    'prefer-const': 'warn',

    // Двойные ковычки для jsx
    'jsx-quotes': ['warn', 'prefer-double'],

    // console.log в коде
    'no-console': 'warn',

    // Имена для анонимных функций
    'func-names': ['warn', 'as-needed'],

    // ===
    'eqeqeq': ['warn', 'always'],

    // Требует, чтобы имена конструкторов начинались с заглавной буквы
    // const a = new A();
    'new-cap': [
      'warn',
      {
        // позволяет вызывать указанные имена функций с прописными буквами без оператора new.
        'capIsNewExceptions': ['$.Deferred'],
      },
    ],

    // Длина строки
    'max-len': [
      'warn',
      {
        'code': 160,
        'tabWidth': 2,
        'ignoreComments': true,
        'ignoreUrls': true,
      },
    ],

    // Решает проблему с types/index.d.ts
    'no-undef': 'off',
  },
};
