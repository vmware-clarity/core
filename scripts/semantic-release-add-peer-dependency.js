/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const fs = require('fs');

// https://semantic-release.gitbook.io/semantic-release/developer-guide/plugin
function prepare(_, context) {
  const packagePaths = ['./projects/angular/dist/lib/package.json', './projects/react/dist/lib/package.json'];

  packagePaths.forEach(packagePath => {
    const package = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    package.peerDependencies['@cds/core'] = context.nextRelease.version;
    fs.writeFileSync(packagePath, JSON.stringify(package, null, 2) + '\n');
  });
}

module.exports = {
  prepare,
};
