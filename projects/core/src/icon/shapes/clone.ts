/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6 6h16v4h2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4v-2H6Z"/><path d="M30 12H14a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2m0 18H14V14h16Z"/><path d="M21 28h2v-5h5v-2h-5v-5h-2v5h-5v2h5z"/>',
  solid:
    '<path d="M24 10V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4V12a2 2 0 0 1 2-2Z"/><path d="M30 12H14a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2m-2 11h-5v5h-2v-5h-5v-2h5v-5h2v5h5Z"/>',
};

export const cloneIconName = 'clone';
export const cloneIcon: IconShapeTuple = [cloneIconName, renderIcon(icon)];
