module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'prettier', 'import'],

  rules: {
    'max-len': ['error', { code: 160, ignoreUrls: true, ignoreRegExpLiterals: true }],
    'import/order': [
      'error',
      {
        groups: [['builtin'], ['external'], ['internal'], ['parent'], ['sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc'
        }
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      },
    ],
  }

};