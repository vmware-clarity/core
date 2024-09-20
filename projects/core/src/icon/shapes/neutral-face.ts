/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.05 22.06h-12a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2"/><path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14"/><circle cx="25.16" cy="14.28" r="1.8"/><circle cx="11.16" cy="14.28" r="1.8"/>',
  solid:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m7.05 21.06a1 1 0 0 1-1 1h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1M27 14.28a1.8 1.8 0 1 1-1.8-1.8 1.8 1.8 0 0 1 1.8 1.8m-15.8 1.8a1.8 1.8 0 1 1 1.8-1.8 1.8 1.8 0 0 1-1.84 1.8Z"/>',
};

export const neutralFaceIconName = 'neutral-face';
export const neutralFaceIcon: IconShapeTuple = [neutralFaceIconName, renderIcon(icon)];
