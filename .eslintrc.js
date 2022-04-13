/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jasmine: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  ignorePatterns: ['**/*.css.ts', 'tools/**'],
  plugins: ['@typescript-eslint', 'import', 'jasmine'],
  rules: {
    'accessor-pairs': 'error',
    curly: 'error',
    eqeqeq: 'error',
    'no-var': 'error',
  },
};
