const [OFF, , ERROR] = [0, 1, 2]

const importRules = {
  'import/no-anonymous-default-export': OFF,
  'import/no-duplicates': ERROR,
  'import/order': [
    ERROR,
    {
      groups: ['builtin', 'external', 'internal'],
      pathGroups: [
        {
          pattern: 'react',
          group: 'external',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: ['react'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
}

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
    ...importRules,
  },
  
}
