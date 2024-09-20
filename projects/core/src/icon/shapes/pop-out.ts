/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27 33H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10v2H5v22h22V21h2v10a2 2 0 0 1-2 2"/><path d="M18 3a1 1 0 0 0 0 2h11.59L15.74 18.85a1 1 0 1 0 1.41 1.41L31 6.41V18a1 1 0 0 0 2 0V3Z"/>',
};

export const popOutIconName = 'pop-out';
export const popOutIcon: IconShapeTuple = [popOutIconName, renderIcon(icon)];
