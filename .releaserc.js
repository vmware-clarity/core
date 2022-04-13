/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

module.exports = {
  branches: ['main', '+([0-9]).x', { name: 'beta', prerelease: true }],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { breaking: true, release: 'major' },
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'chore', release: false },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    '@semantic-release/release-notes-generator',
    './scripts/semantic-release-add-peer-dependency.js',
    './scripts/semantic-release-set-runtime-version.js',
    '@semantic-release/github',
    [
      '@amanda-mitchell/semantic-release-npm-multiple',
      {
        registries: {
          angular: {
            npmPublish: true,
            pkgRoot: './projects/angular/dist/lib',
          },
          core: {
            npmPublish: true,
            pkgRoot: './projects/core/dist/lib',
          },
          eslint: {
            npmPublish: true,
            pkgRoot: './projects/eslint-plugin-clarity-adoption/dist/lib',
          },
          react: {
            npmPublish: true,
            pkgRoot: './projects/react/dist/lib',
          },
        },
      },
    ],
    [
      'semantic-release-slack-bot',
      {
        notifyOnSuccess: true,
        notifyOnFail: true,
      },
    ],
  ],
};
