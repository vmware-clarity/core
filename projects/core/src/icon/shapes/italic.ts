/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.42 8H17.1a1.1 1.1 0 1 0 0 2.19h2.13l-6.12 15.36h-2.64a1.1 1.1 0 1 0 0 2.19h7.33a1.1 1.1 0 1 0 0-2.19h-2.29l6.13-15.36h2.78a1.1 1.1 0 1 0 0-2.19"/>',
};

export const italicIconName = 'italic';
export const italicIcon: IconShapeTuple = [italicIconName, renderIcon(icon)];
