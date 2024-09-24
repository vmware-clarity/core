/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M18 34C9.163 34 2 26.837 2 18S9.163 2 18 2s16 7.163 16 16a16 16 0 0 1-16 16m0-30C10.268 4 4 10.268 4 18s6.268 14 14 14 14-6.268 14-14S25.732 4 18 4m6.47 9.14L19.61 18l4.72 4.69a1 1 0 0 1-1.41 1.41l-4.74-4.74-4.77 4.77A1 1 0 1 1 12 22.72L16.78 18l-4.88-4.94a1 1 0 0 1 1.41-1.41l4.89 4.89 4.86-4.81a1 1 0 0 1 1.41 1.41" clip-rule="evenodd"/>',

  solid:
    '<path fill-rule="evenodd" d="M2 18C2 9.163 9.163 2 18 2a16 16 0 0 1 16 16c0 8.837-7.163 16-16 16S2 26.837 2 18m24 8.1a1.414 1.414 0 0 0 0-2l-6-6.02 6.17-6.15a1.414 1.414 0 1 0-2-2L18 16.1l-6.17-6.24a1.414 1.414 0 0 0-2 2L16 18.08l-6 6.04a1.414 1.414 0 0 0 2 2l6-6.02 6 6a1.414 1.414 0 0 0 2 0" clip-rule="evenodd"/>',
};

export const timesCircleIconName = 'times-circle';
export const timesCircleIcon: IconShapeTuple = [timesCircleIconName, renderIcon(icon)];
