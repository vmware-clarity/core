/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 26H6V6h24Z"/><path d="M14.6 23.07a1.29 1.29 0 0 0 1.24.09l8.73-4a1.3 1.3 0 0 0 0-2.37l-8.73-4A1.3 1.3 0 0 0 14 14v8a1.29 1.29 0 0 0 .6 1.07m1-8.6L23.31 18l-7.71 3.51ZM8 7h2v3H8zm6 0h2v3h-2zm6 0h2v3h-2zm6 0h2v3h-2zM8 26h2v3H8zm6 0h2v3h-2zm6 0h2v3h-2zm6 0h2v3h-2z"/>',
  solid:
    '<path d="M30 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M20 7h2v3h-2Zm-6 0h2v3h-2Zm-4 22H8v-3h2Zm0-19H8V7h2Zm6 19h-2v-3h2Zm6 0h-2v-3h2Zm3.16-10.16-9.77 4.36a1 1 0 0 1-1.39-.92v-8.71a1 1 0 0 1 1.41-.91L25.16 17a1 1 0 0 1 0 1.84M28 29h-2v-3h2Zm0-19h-2V7h2Z"/>',
};

export const filmStripIconName = 'film-strip';
export const filmStripIcon: IconShapeTuple = [filmStripIconName, renderIcon(icon)];
