/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

module.exports = {
  coverageDirectory: '<rootDir>/dist/coverage',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**'],
  transform: {
    '\\.(ts)$': 'ts-jest',
  },
  testRegex: '/src/.*\\.spec\\.ts$',
  testPathIgnorePatterns: ['/src/test-helper\\.spec\\.ts'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  testMatch: null,
};
