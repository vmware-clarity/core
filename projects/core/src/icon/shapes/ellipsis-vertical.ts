/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21.1 4.9c0 1.602-1.343 2.9-3 2.9s-3-1.298-3-2.9 1.343-2.9 3-2.9 3 1.298 3 2.9m-3 16c1.657 0 3-1.298 3-2.9s-1.343-2.9-3-2.9-3 1.298-3 2.9 1.343 2.9 3 2.9m0 13.1c1.657 0 3-1.298 3-2.9s-1.343-2.9-3-2.9-3 1.298-3 2.9 1.343 2.9 3 2.9"/>',
  outlineBadged:
    '<path d="M21.1 4.9c0 1.602-1.343 2.9-3 2.9s-3-1.298-3-2.9 1.343-2.9 3-2.9 3 1.298 3 2.9m-3 16c1.657 0 3-1.298 3-2.9s-1.343-2.9-3-2.9-3 1.298-3 2.9 1.343 2.9 3 2.9m0 13.1c1.657 0 3-1.298 3-2.9s-1.343-2.9-3-2.9-3 1.298-3 2.9 1.343 2.9 3 2.9M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',
};

export const ellipsisVerticalIconName = 'ellipsis-vertical';
export const ellipsisVerticalIcon: IconShapeTuple = [ellipsisVerticalIconName, renderIcon(icon)];
