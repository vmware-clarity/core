/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 5a1 1 0 0 1 1-1h13v13a1 1 0 1 1-2 0V7.41l-9.25 9.25a1 1 0 1 1-1.41-1.41L28.59 6H19a1 1 0 0 1-1-1M5 18a1 1 0 0 0-1 1v13h13a1 1 0 1 0 0-2H7.41l9.25-9.25a1 1 0 1 0-1.41-1.41L6 28.59V19a1 1 0 0 0-1-1"/>',
};

export const resizeIconName = 'resize';
export const resizeIcon: IconShapeTuple = [resizeIconName, renderIcon(icon)];
