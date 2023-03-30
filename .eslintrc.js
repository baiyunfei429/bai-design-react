module.exports = {
  plugins: [
    'import'
  ],
  extends: [require.resolve('@umijs/fabric/dist/eslint'), 'plugin:prettier/recommended', 'prettier'],
  rules: {
    // add custom rules
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-restricted-syntax': 'off',
    'no-prototype-builtins': 'off',
    'no-continue': 'off',
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': [
          'tests/**',
          'resolvers/*/test/**',
          'scripts/**'
      ],
      'optionalDependencies': false,
      'peerDependencies': true,
      'bundledDependencies': false,
    }],
    '@typescript-eslint/no-empty-function': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
  },
  settings: {
    'import/resolver': {
        node: {
            paths: [
              'src',
            ],
        },
    },
  },
  parserOptions: {
    sourceType: 'module',
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: './',
  },
};
