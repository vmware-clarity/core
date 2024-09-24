/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m22.61 14.22-6.36 6.36-3.54-3.54a.996.996 0 1 0-1.41 1.41l4.95 4.95 7.78-7.78a.996.996 0 1 0-1.41-1.41zM18 6C11.38 6 6 11.38 6 18s5.38 12 12 12 12-5.38 12-12S24.62 6 18 6m0 22c-5.51 0-10-4.49-10-10S12.49 8 18 8s10 4.49 10 10-4.49 10-10 10"/>',
  solid:
    '<path d="M18 6C11.38 6 6 11.38 6 18s5.38 12 12 12 12-5.38 12-12S24.62 6 18 6m6.16 9.78-7.92 7.92-5.09-5.09a1.201 1.201 0 1 1 1.7-1.7l3.39 3.39 6.22-6.22a1.201 1.201 0 1 1 1.7 1.7"/>',
};

export const checkCircleIconName = 'check-circle';
export const checkCircleIcon: IconShapeTuple = [checkCircleIconName, renderIcon(icon)];
