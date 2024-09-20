/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26.13 32H9.87C8.29 32 7 30.71 7 29.13V10.87C7 9.29 8.29 8 9.87 8h16.26C27.71 8 29 9.29 29 10.87v18.26c0 1.58-1.29 2.87-2.87 2.87M9.87 10a.87.87 0 0 0-.87.87v18.26c0 .48.39.87.87.87h16.26c.48 0 .87-.39.87-.87V10.87a.87.87 0 0 0-.87-.87z"/><path d="M12 34c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m12 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1M22 6h-2V4h-4v2h-2V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1zm-9 22c-.55 0-1-.45-1-1V13c0-.55.45-1 1-1s1 .45 1 1v14c0 .55-.45 1-1 1m5 0c-.55 0-1-.45-1-1V13c0-.55.45-1 1-1s1 .45 1 1v14c0 .55-.45 1-1 1m5 0c-.55 0-1-.45-1-1V13c0-.55.45-1 1-1s1 .45 1 1v14c0 .55-.45 1-1 1"/>',
  solid:
    '<path d="M12 34c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m12 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1M22 6h-2V4h-4v2h-2V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1z"/><path d="M26.13 8H9.87C8.29 8 7 9.29 7 10.87v18.26C7 30.71 8.29 32 9.87 32h16.26c1.58 0 2.87-1.29 2.87-2.87V10.87C29 9.29 27.71 8 26.13 8M14 27c0 .55-.45 1-1 1s-1-.45-1-1V13c0-.55.45-1 1-1s1 .45 1 1zm5 0c0 .55-.45 1-1 1s-1-.45-1-1V13c0-.55.45-1 1-1s1 .45 1 1zm5 0c0 .55-.45 1-1 1s-1-.45-1-1V13c0-.55.45-1 1-1s1 .45 1 1z"/>',
};

export const suitcaseIconName = 'suitcase';
export const suitcaseIcon: IconShapeTuple = [suitcaseIconName, renderIcon(icon)];
