/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M3 6h30a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m1 22V8h28v20zm18.52-12.14a.77.77 0 0 0 .56.24.81.81 0 0 0 .57-1.37L18 9.08l-5.65 5.65a.8.8 0 1 0 1.13 1.13L18 11.34zm0 6a.77.77 0 0 0 .56.24.81.81 0 0 0 .57-1.37L18 15.08l-5.65 5.65a.8.8 0 1 0 1.13 1.13L18 17.34z" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M2 7a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm21.08 8.5a1 1 0 0 1-.7-.29L18 10.83l-4.38 4.38a1 1 0 1 1-1.41-1.42L18 8l5.79 5.79a1 1 0 0 1-.71 1.71m-.7 5.91a1 1 0 0 0 .7.29v.01a1 1 0 0 0 .71-1.71L18 14.2l-5.79 5.76a1 1 0 1 0 1.41 1.42L18 17z" clip-rule="evenodd"/>',
};

export const expandCardIconName = 'expand-card';
export const expandCardIcon: IconShapeTuple = [expandCardIconName, renderIcon(icon)];
