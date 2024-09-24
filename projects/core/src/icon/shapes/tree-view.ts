/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M11 15h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.2H5.8v8.4H10V26a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.2H4.2V11H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5.8v6.2H10V16a1 1 0 0 1 1-1m1 14h2v-2h-2zM6 7H4v2h2zm8 12h-2v-2h2z" clip-rule="evenodd"/><path d="M33 7a1 1 0 1 1 0 2H10V7zm0 10H18v2h15a1 1 0 1 0 0-2M18 27h15a1 1 0 1 1 0 2H18z"/>',
  solid:
    '<path d="M15 15h-4a1 1 0 0 0-1 1v1.2H5.8V11H7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.2v17.8H10V30a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.2H5.8v-8.4H10V20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"/><path d="M10 7h23a1 1 0 1 1 0 2H10zm23 10H18v2h15a1 1 0 1 0 0-2M18 27h15a1 1 0 1 1 0 2H18z"/>',
};

export const treeViewIconName = 'tree-view';
export const treeViewIcon: IconShapeTuple = [treeViewIconName, renderIcon(icon)];
