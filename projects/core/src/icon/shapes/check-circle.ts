/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6m0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10"/><path d="m16.34 23.74-5-5a1 1 0 0 1 1.41-1.41l3.59 3.59 6.78-6.78a1 1 0 0 1 1.41 1.41Z"/>',
  solid:
    '<path d="M30 18A12 12 0 1 1 18 6a12 12 0 0 1 12 12m-4.77-2.16a1.4 1.4 0 0 0-2-2l-6.77 6.77L13 17.16a1.4 1.4 0 0 0-2 2l5.45 5.45Z"/>',
};

export const checkCircleIconName = 'check-circle';
export const checkCircleIcon: IconShapeTuple = [checkCircleIconName, renderIcon(icon)];
