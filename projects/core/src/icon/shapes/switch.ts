/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5.71 14h15.21v-2H5.71l3.71-3.73A1 1 0 1 0 8 6.86L1.89 13 8 19.14a1 1 0 1 0 1.42-1.4ZM23 12h3v2h-3zm5 0h2v2h-2zm-.08 5.86a1 1 0 0 0-1.42 1.41L30.21 23H15v2h15.21l-3.71 3.74a1 1 0 1 0 1.42 1.4L34 24ZM10 23h3v2h-3zm-4 0h2v2H6z"/>',
};

export const switchIconName = 'switch';
export const switchIcon: IconShapeTuple = [switchIconName, renderIcon(icon)];
