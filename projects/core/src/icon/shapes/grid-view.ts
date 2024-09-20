/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14 4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 14V6h8v8ZM30 4h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-8 10V6h8v8Zm-8 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2M6 30v-8h8v8Zm24-10h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m-8 10v-8h8v8Z"/>',
  solid:
    '<rect width="12" height="12" x="4" y="4" rx="2" ry="2"/><rect width="12" height="12" x="20" y="4" rx="2" ry="2"/><rect width="12" height="12" x="4" y="20" rx="2" ry="2"/><rect width="12" height="12" x="20" y="20" rx="2" ry="2"/>',
};

export const gridViewIconName = 'grid-view';
export const gridViewIcon: IconShapeTuple = [gridViewIconName, renderIcon(icon)];
