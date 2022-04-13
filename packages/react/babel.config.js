/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// used by our jest test suite; not used for running the dev app
module.exports = {
  presets: [['@babel/preset-env', { targets: { esmodules: true } }]],
};
