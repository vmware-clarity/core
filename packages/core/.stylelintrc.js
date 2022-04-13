/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const postcssScss = require('postcss-scss');

// we need to add https://github.com/AndyOGo/stylelint-declaration-strict-value
module.exports = {
  extends: './../../.stylelintrc.js',
  customSyntax: postcssScss,
  ignoreFiles: ['**/generated/*'],
  plugins: ['stylelint-no-px'],
  rules: {
    'color-no-hex': true,
    'meowtec/no-px': [
      true,
      {
        ignore: ['1px', '-1px'],
      },
    ],
  },
  overrides: [
    {
      files: ['.storybook/**/*.css'],
      rules: {
        'meowtec/no-px': null,
      },
    },
  ],
};
