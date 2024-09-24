/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M15 32h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-3-2h2v-2h-2Z"/><path d="M15 16h-4a1 1 0 0 0-1 1v1.2H5.8V12H7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.2v17.8h6.36a.8.8 0 0 0 0-1.6H5.8v-8.4H10V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M4 8h2v2H4Zm10 12h-2v-2h2Z"/><path d="M34 9a1 1 0 0 0-1-1H10v2h23a1 1 0 0 0 1-1m-1 9H18v2h15a1 1 0 0 0 0-2m0 10H18v2h15a1 1 0 0 0 0-2"/>',
  solid:
    '<rect width="6" height="6" x="10" y="26" rx="1" ry="1"/><path d="M15 16h-4a1 1 0 0 0-1 1v1.2H5.8V12H7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.2v17.8H11a.8.8 0 1 0 0-1.6H5.8v-8.4H10V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"/><path d="M33 8H10v2h23a1 1 0 0 0 0-2m0 10H18v2h15a1 1 0 0 0 0-2m0 10H18v2h15a1 1 0 0 0 0-2"/>',
};

export const treeViewIconName = 'tree-view';
export const treeViewIcon: IconShapeTuple = [treeViewIconName, renderIcon(icon)];
