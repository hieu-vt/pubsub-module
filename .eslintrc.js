module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import'],
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.ts',
          '.d.ts',
        ],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'no-empty-pattern': 1,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'import/extensions': ['error', 'never', { svg: 'always' }],
    'no-shadow': 0,
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'internal',
          'external',
          'builtin',
          'index',
          'sibling',
          'parent',
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-duplicates': 2,
    'import/no-useless-path-segments': 2,
    'import/prefer-default-export': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/no-unused-modules': 0,
    'import/no-deprecated': 0,
    '@typescript-eslint/indent': 0,
    'import/no-anonymous-default-export': 2,
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': [
      'warn',
      { additionalHooks: '(useDidMount)' },
    ],
    'jest/no-identical-title': 2,
    'jest/valid-expect': 2,
    camelcase: 0,
    'prefer-destructuring': 2,
    'no-nested-ternary': 2,
    'comma-dangle': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  env: {
    node: true,
    es2020: true,
  },
};
