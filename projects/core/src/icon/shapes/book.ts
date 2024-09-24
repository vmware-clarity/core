/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10 5.2h18v1.55H10z"/><path d="M29 8H9.86A1.89 1.89 0 0 1 8 6a2 2 0 0 1 1.86-2H29a1 1 0 0 0 0-2H9.86A4 4 0 0 0 6 6a4 4 0 0 0 0 .49 1 1 0 0 0 0 .24V30a4 4 0 0 0 3.86 4H29a1 1 0 0 0 1-1V9.07A1.07 1.07 0 0 0 29 8m-1 24H9.86A2 2 0 0 1 8 30V9.55a3.63 3.63 0 0 0 1.86.45H28Z"/>',
  solid:
    '<path d="M10 5.2h18v1.55H10z"/><path d="M29 8H9.86A1.89 1.89 0 0 1 8 6a2 2 0 0 1 1.86-2H29a1 1 0 1 0 0-2H9.86A4 4 0 0 0 6 6a4 4 0 0 0 0 .49 1 1 0 0 0 0 .24V30a4 4 0 0 0 3.86 4H29a1 1 0 0 0 1-1V9.07A1.07 1.07 0 0 0 29 8"/>',
};

export const bookIconName = 'book';
export const bookIcon: IconShapeTuple = [bookIconName, renderIcon(icon)];
