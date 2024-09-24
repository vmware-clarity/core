/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14"/><path d="M18 7.2A10.8 10.8 0 1 0 28.8 18 10.81 10.81 0 0 0 18 7.2m0 20a9.2 9.2 0 1 1 9.2-9.2 9.21 9.21 0 0 1-9.2 9.2"/><path d="M18 12.31A5.69 5.69 0 1 0 23.69 18 5.69 5.69 0 0 0 18 12.31m0 9.77A4.09 4.09 0 1 1 22.09 18 4.09 4.09 0 0 1 18 22.09Z"/>',
  solid:
    '<circle cx="18" cy="18" r="4.09"/><path d="M18 7.83A10.17 10.17 0 1 0 28.17 18 10.18 10.18 0 0 0 18 7.83m0 16A5.88 5.88 0 1 1 23.88 18 5.88 5.88 0 0 1 18 23.88Z"/><path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 27.83A11.83 11.83 0 1 1 29.83 18 11.85 11.85 0 0 1 18 29.83"/>',
};

export const targetIconName = 'target';
export const targetIcon: IconShapeTuple = [targetIconName, renderIcon(icon)];
