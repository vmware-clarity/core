/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 17H19V6a1 1 0 1 0-2 0v11H6a1 1 0 0 0-1 1 .91.91 0 0 0 1 .94h11V30a1 1 0 1 0 2 0V19h11a1 1 0 0 0 1-1 1 1 0 0 0-1-1"/>',
};

export const plusIconName = 'plus';
export const plusIcon: IconShapeTuple = [plusIconName, renderIcon(icon)];
