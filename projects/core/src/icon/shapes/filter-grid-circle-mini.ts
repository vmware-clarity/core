/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 4a14 14 0 1 0 14 14A14 14 0 0 0 18 4m2 23.8V23l5.29-5.76A1.9 1.9 0 0 0 23.92 14H11.7a1.9 1.9 0 0 0-1.37 3.21L16 23.08v4.72a10 10 0 1 1 4 0"/>',
  solid:
    '<path d="M18 4a14 14 0 1 0 14 14A14 14 0 0 0 18 4m8.76 10.68L20 20.8v5.08h-4V20.8l-6.76-6.12A1.56 1.56 0 0 1 10.52 12h15a1.56 1.56 0 0 1 1.24 2.68"/>',
};

export const filterGridCircleMiniIconName = 'filter-grid-circle-mini';
export const filterGridCircleMiniIcon: IconShapeTuple = [filterGridCircleMiniIconName, renderIcon(icon)];
