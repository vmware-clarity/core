/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M20.87 11.14h-13l5.56-5.49A1 1 0 0 0 12 4.22l-8 7.91L12 20a1 1 0 0 0 1.41-1.42l-5.55-5.44h13a9.08 9.08 0 0 1 9.13 9 9 9 0 0 1-5 8 1 1 0 0 0 .94 1.86 11 11 0 0 0-5.06-20.82Z"/>',
};

export const undoIconName = 'undo';
export const undoIcon: IconShapeTuple = [undoIconName, renderIcon(icon)];
