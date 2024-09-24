/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M18 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 18 2m0 30c-7.732 0-14-6.268-14-14S10.268 4 18 4s14 6.268 14 14a14 14 0 0 1-14 14m.982-14.981h7.037a.982.982 0 0 1 0 1.963h-7.037v7.037a.982.982 0 0 1-1.963 0v-7.037H9.98a.982.982 0 0 1 0-1.963h7.038V9.98a.982.982 0 0 1 1.963 0z" clip-rule="evenodd"/>',

  solid:
    '<path fill-rule="evenodd" d="M2 18c0 8.837 7.163 16 16 16s16-7.163 16-16A16 16 0 0 0 18 2C9.163 2 2 9.163 2 18m17.5-1.5h6.09a1.5 1.5 0 0 1 0 3H19.5v6.09a1.5 1.5 0 0 1-3 0V19.5h-6.09a1.5 1.5 0 0 1 0-3h6.09v-6.09a1.5 1.5 0 0 1 3 0z" clip-rule="evenodd"/>',
};

export const plusCircleIconName = 'plus-circle';
export const plusCircleIcon: IconShapeTuple = [plusCircleIconName, renderIcon(icon)];
