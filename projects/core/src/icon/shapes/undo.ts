/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M20.885 11.092H7.873l5.565-5.454a1 1 0 0 0 0-1.42 1.02 1.02 0 0 0-1.431 0L4 12.075l8.007 7.818a1.007 1.007 0 0 0 1.416-.005.99.99 0 0 0-.005-1.406L7.863 13.08h13.012c5.007-.028 9.094 3.97 9.138 8.94a8.93 8.93 0 0 1-5.005 7.946 1.033 1.033 0 0 0-.1 1.79 1.05 1.05 0 0 0 1.041.058c4.57-2.289 6.947-7.4 5.738-12.336s-5.684-8.394-10.802-8.345z"/>',
};

export const undoIconName = 'undo';
export const undoIcon: IconShapeTuple = [undoIconName, renderIcon(icon)];
