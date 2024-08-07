/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// Configuration for `lite-server` which is actually wrapping BrowserSync
// See https://www.npmjs.com/package/lite-server
module.exports = {
  open: false,
  port: 6006,
  logLevel: 'silent',
  server: {
    middleware: {
      0: null,
    },
  },
};
