/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M28.993 8H9.859a1.89 1.89 0 0 1-1.86-2 2 2 0 0 1 1.86-2h19.134a1 1 0 0 0 0-2H9.859a4 4 0 0 0-3.86 4q-.013.245 0 .49a1 1 0 0 0 0 .24V30a4 4 0 0 0 3.86 4h19.134a1 1 0 0 0 1-1V9.07a1.07 1.07 0 0 0-1-1.07m-1 24H9.86A2 2 0 0 1 8 30V9.55c.569.314 1.21.47 1.86.45h18.134z" clip-rule="evenodd"/><path d="M27.993 5.2H10v1.55h17.994z"/>',
  solid:
    '<path d="M9.859 8h19.134c.563.037 1 .505 1 1.07V33a1 1 0 0 1-1 1H9.859a4 4 0 0 1-3.86-4V6.73a1 1 0 0 1 0-.24A4 4 0 0 1 6 6a4 4 0 0 1 3.86-4h19.134a1 1 0 0 1 0 2H9.859a2 2 0 0 0-1.86 2 1.89 1.89 0 0 0 1.86 2"/><path d="M27.993 5.2H10v1.55h17.994z"/>',
};

export const bookIconName = 'book';
export const bookIcon: IconShapeTuple = [bookIconName, renderIcon(icon)];
