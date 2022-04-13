/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const { readFileSync } = require('fs');
const { resolve } = require('path');
const { delimiter } = require('./common');

const getJsonData = path => {
  const json = readFileSync(path, 'utf8');

  try {
    return JSON.parse(json);
  } catch {
    throw new Error(`${path} has invalid syntax`);
  }
};

const generateCommitLintScopes = projects => {
  let _scopes = [];

  Object.entries(projects).forEach(([project, scopes]) => {
    const projectScopes = scopes.map(scope => `${project}${delimiter}${scope}`);
    _scopes = _scopes.concat([project, ...projectScopes]);
  });

  return _scopes;
};

const getScopes = path => {
  if (!path) {
    path = resolve(process.cwd(), './scripts/commitlint/customScopes.json');
  }

  const scopes = getJsonData(path);

  if (scopes) {
    return new Set(generateCommitLintScopes(scopes));
  }

  return new Set([]);
};

module.exports = {
  getScopes,
};
