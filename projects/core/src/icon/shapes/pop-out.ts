/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 3a1 1 0 0 1 1-1h15v15a1 1 0 1 1-2 0V5.41L18.15 19.26a1 1 0 1 1-1.41-1.41L30.59 4H19a1 1 0 0 1-1-1"/><path d="M6 32h22a2 2 0 0 0 2-2V20h-2v10H6V8h10V6H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2"/>',
};

export const popOutIconName = 'pop-out';
export const popOutIcon: IconShapeTuple = [popOutIconName, renderIcon(icon)];
