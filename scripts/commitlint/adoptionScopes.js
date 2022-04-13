/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

const { delimiter } = require('./common');

const components = ['documentation', 'features'];

module.exports = {
  components,
  getScopes: () => {
    return components.map(c => `adoption${delimiter}${c}`).concat(['adoption']);
  },
};
