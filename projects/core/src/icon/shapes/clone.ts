/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M6 6h16v4h2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4v-2H6zm24 6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2zm-7 11v5h-2v-5h-5v-2h5v-5h2v5h5v2zm-9 7h16V14H14z" clip-rule="evenodd"/>',
  solid:
    '<path d="M24 6v4H12a2 2 0 0 0-2 2v12H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2"/><path fill-rule="evenodd" d="M32 14a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2zm-4 9h-5v5h-2v-5h-5v-2h5v-5h2v5h5z" clip-rule="evenodd"/>',
};

export const cloneIconName = 'clone';
export const cloneIcon: IconShapeTuple = [cloneIconName, renderIcon(icon)];
