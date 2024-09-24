/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29 32H7V22H5v10a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V22h-2Z"/><path d="M14 24a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-6a1 1 0 0 0-1 1m1-6H6v-4h9v-2H5.5A1.5 1.5 0 0 0 4 13.5V20h11.78a3 3 0 0 1-.78-2m15.5-6H21v2h9v4h-9a3 3 0 0 1-.78 2H32v-6.5a1.5 1.5 0 0 0-1.5-1.5"/><path d="m13 9.55 4-3.95V18a1 1 0 1 0 2 0V5.6l4 3.95a1 1 0 1 0 1.41-1.42L18 1.78l-6.39 6.35A1 1 0 0 0 13 9.55"/>',
  solid:
    '<path d="M18 21a3 3 0 0 1-2.22-1H5v12a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V20H20.21A3 3 0 0 1 18 21m4 3a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1m-7-12H5.5A1.5 1.5 0 0 0 4 13.5V18h11Zm15.5 0H21v6h11v-4.5a1.5 1.5 0 0 0-1.5-1.5"/><path d="m13 9.55 4-3.95V18a1 1 0 1 0 2 0V5.6l4 3.95a1 1 0 1 0 1.41-1.42L18 1.78l-6.39 6.35A1 1 0 0 0 13 9.55"/>',
};

export const unarchiveIconName = 'unarchive';
export const unarchiveIcon: IconShapeTuple = [unarchiveIconName, renderIcon(icon)];
