module.exports = {
  root: true,
  extends: '@dooboo/eslint-config',
  rules: {
    'react/display-name': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/indent': ['error', 2],
    'comma-dangle': ['error', 'never'],
    'brace-style': ['error', 'allman', { allowSingleLine: true }],
    semi: ['error', 'always', { omitLastInOneLineBlock: true }]
  }
};
