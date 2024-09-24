/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 22.61a1 1 0 0 1-1-1v-12a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1m1.33 3.45a1.33 1.33 0 1 1-2.66 0 1.33 1.33 0 0 1 2.66 0"/><path fill-rule="evenodd" d="M2 18c0 8.837 7.163 16 16 16a16 16 0 0 0 16-16c0-8.837-7.163-16-16-16S2 9.163 2 18m2 0c0-7.732 6.268-14 14-14s14 6.268 14 14-6.268 14-14 14S4 25.732 4 18" clip-rule="evenodd"/>',
  solid:
    '<path d="M18 2C9.16 2 2 9.16 2 18s7.16 16 16 16c4.24 0 8.31-1.69 11.31-4.69S34 22.24 34 18c0-8.84-7.16-16-16-16m-1 7.61c0-.55.45-1 1-1s1 .45 1 1v12c0 .55-.45 1-1 1s-1-.45-1-1zm1 17.65c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2"/>',
};

export const errorStandardIconName = 'error-standard';
export const errorStandardIcon: IconShapeTuple = [errorStandardIconName, renderIcon(icon)];
