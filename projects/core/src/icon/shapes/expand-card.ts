/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 6H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-1 22H4V8h28Z"/><path d="M13.48 15.86 18 11.34l4.52 4.52a.77.77 0 0 0 .56.24.81.81 0 0 0 .57-1.37L18 9.08l-5.65 5.65a.8.8 0 1 0 1.13 1.13"/><path d="M13.48 21.86 18 17.34l4.52 4.52a.77.77 0 0 0 .56.24.81.81 0 0 0 .57-1.37L18 15.08l-5.65 5.65a.8.8 0 1 0 1.13 1.13"/>',
  solid:
    '<path d="M33 6H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-9.21 15.41a1 1 0 0 1-1.41 0L18 17l-4.38 4.38a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42L18 14.2l5.79 5.8a1 1 0 0 1 0 1.41m0-6.2a1 1 0 0 1-1.41 0L18 10.83l-4.38 4.38a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42L18 8l5.79 5.79a1 1 0 0 1 0 1.42"/>',
};

export const expandCardIconName = 'expand-card';
export const expandCardIcon: IconShapeTuple = [expandCardIconName, renderIcon(icon)];
