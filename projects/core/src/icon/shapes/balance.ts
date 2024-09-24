/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27.17 8c-.44 0-.827.28-.97.68l-3.057 9a.996.996 0 0 0 .642 1.26c.54.18 1.111-.11 1.284-.63l2.09-6.15 2.09 6.15c.142.42.54.68.968.68.102 0 .214-.02.326-.05.53-.17.826-.74.643-1.26l-3.059-9c-.142-.41-.53-.68-.968-.68zm-4.374 12.29L21.36 21.7c1.58 1.55 3.7 2.32 5.82 2.32s4.24-.77 5.82-2.32l-1.437-1.41c-2.375 2.33-6.382 2.33-8.757 0zM6.782 6h22.426c.56 0 1.02-.45 1.02-1s-.46-1-1.02-1H6.782c-.56 0-1.02.45-1.02 1s.46 1 1.02 1M5.436 18.95c.54.18 1.111-.11 1.285-.63l2.09-6.15 2.09 6.15c.142.42.54.68.967.68a1.3 1.3 0 0 0 .327-.05c.53-.17.825-.74.642-1.26l-3.058-9a1.032 1.032 0 0 0-1.937 0l-3.048 8.99a.996.996 0 0 0 .642 1.26zm9.195 2.76-1.437-1.41c-2.375 2.33-6.382 2.33-8.757 0L3 21.71c1.58 1.55 3.7 2.32 5.82 2.32s4.241-.77 5.821-2.32zM27.159 30h-8.155V8h-2.039v22H8.821c-.561 0-1.02.45-1.02 1s.459 1 1.02 1h18.348c.56 0 1.02-.45 1.02-1s-.46-1-1.02-1z"/>',
};

export const balanceIconName = 'balance';
export const balanceIcon: IconShapeTuple = [balanceIconName, renderIcon(icon)];
