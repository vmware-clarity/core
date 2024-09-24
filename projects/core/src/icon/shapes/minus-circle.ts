/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M18 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 18 2m0 30c-7.732 0-14-6.268-14-14S10.268 4 18 4s14 6.268 14 14a14 14 0 0 1-14 14m-7-14a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1" clip-rule="evenodd"/>',

  solid:
    '<path fill-rule="evenodd" d="M2 18C2 9.163 9.163 2 18 2a16 16 0 0 1 16 16c0 8.837-7.163 16-16 16S2 26.837 2 18m8.5 0a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 0-3H12a1.5 1.5 0 0 0-1.5 1.5" clip-rule="evenodd"/>',
};

export const minusCircleIconName = 'minus-circle';
export const minusCircleIcon: IconShapeTuple = [minusCircleIconName, renderIcon(icon)];
