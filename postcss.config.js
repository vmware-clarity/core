/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

module.exports = {
  parser: '',
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions', 'ie 11', '> 5%', 'Firefox > 35', 'Chrome > 35'],
      cascade: false,
    }),
  ],
};
