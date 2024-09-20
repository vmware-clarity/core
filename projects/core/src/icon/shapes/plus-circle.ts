/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26.17 17H19V9.83a1 1 0 0 0-2 0V17H9.83a1 1 0 0 0 0 2H17v7.17a1 1 0 0 0 2 0V19h7.17a1 1 0 0 0 0-2"/><path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14"/>',

  solid:
    '<path d="M34 18A16 16 0 1 1 18 2a16 16 0 0 1 16 16m-8.41-1.5H19.5v-6.09a1.5 1.5 0 0 0-3 0v6.09h-6.09a1.5 1.5 0 0 0 0 3h6.09v6.09a1.5 1.5 0 0 0 3 0V19.5h6.09a1.5 1.5 0 0 0 0-3"/>',
};

export const plusCircleIconName = 'plus-circle';
export const plusCircleIcon: IconShapeTuple = [plusCircleIconName, renderIcon(icon)];
