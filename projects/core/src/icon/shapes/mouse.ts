/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 34A10 10 0 0 1 8 24V12a10 10 0 0 1 20 0v12a10 10 0 0 1-10 10m0-30a8 8 0 0 0-8 8v12a8 8 0 0 0 16 0V12a8 8 0 0 0-8-8"/><path d="M18 15a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"/>',
  solid:
    '<path d="M18 2A10 10 0 0 0 8 12v12a10 10 0 0 0 20 0V12A10 10 0 0 0 18 2m1.3 11.44a1.3 1.3 0 0 1-2.6 0V10a1.3 1.3 0 0 1 2.6 0Z"/>',
};

export const mouseIconName = 'mouse';
export const mouseIcon: IconShapeTuple = [mouseIconName, renderIcon(icon)];
