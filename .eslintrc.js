module.exports = {
   env: {
      browser: true,
      node: true
   },
   extends: ['eslint:recommended', 'plugin:react/recommended'],
   parser: 'babel-eslint',
   parserOptions: {
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true,
         modules: true,
         experimentalObjectRestSpread: true
      },
      ecmaVersion: 2018
   },
   plugins: ['react'],
   rules: {
      indent: ['error', 3],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-unused-vars': 0,
      'no-undef': 2,
      'no-console': 0,
      'no-unexpected-multiline': 'warn'
   }
};
