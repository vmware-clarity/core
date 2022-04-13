/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const fs = require('fs');

// https://semantic-release.gitbook.io/semantic-release/developer-guide/plugin
function prepare(_, context) {
  const path = './projects/core/dist/lib/internal/utils/global.js';
  const content = fs.readFileSync(path, 'utf8');
  const newContent = content.replace('PACKAGE_VERSION', context.nextRelease.version);

  fs.writeFileSync(path, newContent);
}

module.exports = {
  prepare,
};
