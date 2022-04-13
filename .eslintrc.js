/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const bannedTSTypes = {
  Array: 'Use [] instead.',
  Object: 'Use {} instead.',
  Boolean: 'Use `boolean` instead.',
  Number: 'Use `number` instead.',
  String: 'Use `string` instead.',
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jasmine: true,
  },
  extends: ['eslint:recommended', 'plugin:json/recommended-with-comments', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['license-header'],
  rules: {
    curly: 'error',
    eqeqeq: 'error',
    'no-var': 'error',
    'no-irregular-whitespace': ['error', { skipTemplates: true }],
    'license-header/header': ['error', './.license-header.js'],
  },
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
      plugins: ['@typescript-eslint', 'jasmine', 'license-header', 'unused-imports'],
      rules: {
        '@typescript-eslint/ban-types': ['error', { types: bannedTSTypes }],
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
        '@typescript-eslint/no-explicit-any': 'off', // Would LOVE to turn this on
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        curly: 'error',
        eqeqeq: 'error',
        'jasmine/no-focused-tests': 'error',
        'no-irregular-whitespace': ['error', { skipTemplates: true }],
        'unused-imports/no-unused-imports-ts': 'error',
      },
    },
    {
      files: ['**/*.json'],
      rules: {
        'license-header/header': 'off',
      },
    },
  ],
  root: true,
};
