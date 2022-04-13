/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

require('eslint-plugin-rulesdir').RULES_DIR = [require('path').resolve(__dirname, './build/eslint-rules')];

module.exports = {
  extends: ['plugin:lit/recommended', 'plugin:lit-a11y/recommended', 'plugin:wc/recommended'],
  plugins: ['eslint-plugin-wc', 'lit', 'lit-a11y', 'rulesdir'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'Demo|Test' }],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          'ramda',
          'rxjs',
          'rxjs/operators',
          {
            name: '@cds/core/icon',
            message:
              'Please import icon service and icons directly https://clarity.design/storybook/core/?path=/story/internal-documentation-using-icons--page',
          },
        ],
        patterns: ['lit-element', 'lit-element/*', 'lit-html', 'lit-html/*', '@angular/*'],
      },
    ],
    'lit-a11y/img-redundant-alt': ['off'],
    'lit-a11y/anchor-is-valid': ['off'],
    'lit-a11y/alt-text': ['off'],
    'lit-a11y/click-events-have-key-events': ['off'],
    'rulesdir/reserved-property-names': ['error'],
    'rulesdir/reserved-event-names': ['error'],
  },
  overrides: [
    {
      files: ['./build/**'],
      rules: {
        'import/extensions': 'off',
      },
    },
  ],
};
