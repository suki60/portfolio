module.exports = {
  extends: ['next'],
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    'jsx-quotes': ['error', 'prefer-single'],
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
}
