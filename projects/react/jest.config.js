/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

module.exports = {
  roots: ['./'],
  coverageDirectory: '<rootDir>/dist/coverage',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleNameMapper: {
    '@cds/core(.*)': '<rootDir>/../core/dist/lib/$1',
    '../converter/react-wrapper.js': '<rootDir>/dist/lib/converter/react-wrapper.js',
    '.*(utils/index.js)$': '<rootDir>/dist/lib/utils/index.js',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@cds/core|lit|@lit|@lit-labs|ramda)'],
};
