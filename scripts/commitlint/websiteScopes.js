/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { readdirSync } = require('fs');
const { findScopes, delimiter } = require('./common');

const isScopeDirectory = directory => {
  const dir = readdirSync(directory, { withFileTypes: true });

  const isScope = dir.find(el => el.isFile() && el.name === 'README.md');

  if (isScope) {
    return true;
  }

  return false;
};

module.exports = {
  getScopes: websiteProjectPath => {
    const projectName = 'website';
    const websiteScopes = findScopes(websiteProjectPath, isScopeDirectory)
      .map(x => `${projectName}${delimiter}${x}`)
      .concat([projectName]);
    return new Set(websiteScopes);
  },
};
