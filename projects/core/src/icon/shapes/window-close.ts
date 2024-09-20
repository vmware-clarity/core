/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m19.41 18 7.29-7.29a1 1 0 0 0-1.41-1.41L18 16.59l-7.29-7.3A1 1 0 0 0 9.3 10.7l7.29 7.3-7.3 7.29a1 1 0 1 0 1.41 1.41l7.3-7.29 7.29 7.29a1 1 0 0 0 1.41-1.41Z"/>',
};

export const windowCloseIconName = 'window-close';
export const windowCloseIcon: IconShapeTuple = [windowCloseIconName, renderIcon(icon)];
