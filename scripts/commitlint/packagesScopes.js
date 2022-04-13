/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { findScopes } = require('./common');

module.exports = {
  getScopes: path => {
    const websiteScopes = findScopes(path, () => true, true);
    return new Set(websiteScopes);
  },
};
