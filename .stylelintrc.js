/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier'],
  defaultSeverity: 'error',
  plugins: ['stylelint-scss', 'stylelint-plugin-license-header'],
  rules: {
    'max-nesting-depth': 3,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'no-invalid-position-at-import-rule': null,
    'plugin/license-header': [true, { license: './.license-header.js' }],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'scss/at-extend-no-missing-placeholder': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-import-partial-extension': null,
    'scss/comment-no-empty': null,
    'scss/no-global-function-names': null,
    'scss/operator-no-newline-after': null,
    'scss/operator-no-unspaced': null,
  },
};
