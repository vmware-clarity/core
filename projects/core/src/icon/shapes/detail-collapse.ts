/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 18H18.35l2.89-3a1 1 0 1 0-1.44-1.39l-4.51 4.67-.68.71.68.71 4.51 4.67a1 1 0 0 0 .72.31 1.05 1.05 0 0 0 .7-.28 1 1 0 0 0 0-1.42l-2.89-3H32a1 1 0 0 0 0-2zM7 32a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v26a1 1 0 0 1-1 1m4 0a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v26a1 1 0 0 1-1 1"/>',
};

export const detailCollapseIconName = 'detail-collapse';
export const detailCollapseIcon: IconShapeTuple = [detailCollapseIconName, renderIcon(icon)];
