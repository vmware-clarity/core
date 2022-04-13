/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { readdirSync } = require('fs');

/**
 * Searches for scopes based on predicate
 *
 * @param {String} path of folder
 * @param {Function} predicate that will verify the folder is a scope one
 * @param {Boolean} topLevel continues with next direct child directory if the predicate is met
 *
 * @returns {Array<string>} all scope names
 */
const findScopes = (path, predicate, topLevel) => {
  let scopes = [];

  const dir = readdirSync(path, { withFileTypes: true });

  dir
    .filter(x => x.isDirectory())
    .filter(x => x.name !== 'node_modules')
    .forEach(element => {
      const elementPath = `${path}/${element.name}`;

      if (predicate(elementPath)) {
        scopes.push(element.name);
      }

      if (topLevel) {
        return;
      }

      scopes = scopes.concat(findScopes(elementPath, predicate));
    });

  return scopes;
};

module.exports = {
  delimiter: ':',
  findScopes,
};
