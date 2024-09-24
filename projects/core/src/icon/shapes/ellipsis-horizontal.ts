/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M7.8 18.1c0 1.657-1.298 3-2.9 3S2 19.757 2 18.1s1.298-3 2.9-3 2.9 1.343 2.9 3m10.2 3c1.602 0 2.9-1.343 2.9-3s-1.298-3-2.9-3-2.9 1.343-2.9 3 1.298 3 2.9 3m13.1 0c1.602 0 2.9-1.343 2.9-3s-1.298-3-2.9-3-2.9 1.343-2.9 3 1.298 3 2.9 3"/>',
  outlineBadged:
    '<path d="M4.9 21.1c1.602 0 2.9-1.343 2.9-3s-1.298-3-2.9-3-2.9 1.343-2.9 3 1.298 3 2.9 3m13.1 0c1.602 0 2.9-1.343 2.9-3s-1.298-3-2.9-3-2.9 1.343-2.9 3 1.298 3 2.9 3m16-3c0 1.657-1.298 3-2.9 3s-2.9-1.343-2.9-3 1.298-3 2.9-3 2.9 1.343 2.9 3M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',
};

export const ellipsisHorizontalIconName = 'ellipsis-horizontal';
export const ellipsisHorizontalIcon: IconShapeTuple = [ellipsisHorizontalIconName, renderIcon(icon)];
