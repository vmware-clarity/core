/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2C10.28 2 4 8.28 4 16s5.75 13.43 13 13.95V33c0 .55.45 1 1 1s1-.45 1-1V21.41l4.71-4.71a.996.996 0 1 0-1.41-1.41l-3.29 3.29v-5l-3.29-3.29a.996.996 0 1 0-1.41 1.41l2.71 2.71v7.17l-3.29-3.29a.996.996 0 1 0-1.41 1.41l4.71 4.71v3.54c-6.15-.51-11-5.67-11-11.95C6 9.38 11.38 4 18 4s12 5.38 12 12c0 5.58-3.83 10.27-9 11.61v2.06c6.28-1.38 11-6.98 11-13.67 0-7.72-6.28-14-14-14"/>',
  solid:
    '<path d="M15.014 29.95V33c0 .55.45 1 1.001 1s1.001-.45 1.001-1v-3.05c-.33.02-.66.05-1.001.05s-.67-.03-1.001-.05M16.015 2C8.287 2 2 8.28 2 16s5.756 13.43 13.014 13.95v-5.04L9.798 19.7a.998.998 0 0 1 1.412-1.41l3.794 3.79v-7.67L12.29 11.7a.998.998 0 0 1 1.412-1.41l3.293 3.29v5l3.294-3.29A.998.998 0 0 1 21.7 16.7l-4.715 4.71v8.54C24.244 29.43 30 23.38 30 16S23.743 2 16.015 2"/>',
};

export const treeIconName = 'tree';
export const treeIcon: IconShapeTuple = [treeIconName, renderIcon(icon)];
