/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import isNil from 'ramda/es/isNil.js';

export function isBrowser(win = window) {
  return !isNil(win);
}

export function isJestTest() {
  return (globalThis as any)?.process?.env?.JEST_WORKER_ID !== undefined;
}
