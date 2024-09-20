/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M16 4a12 12 0 1 0 12 12A12 12 0 0 0 16 4m0 21.91A10 10 0 1 1 26 16a10 10 0 0 1-10 9.91m15.71 3.78-5.17-5.17A14 14 0 0 1 25.15 26l5.15 5.15a1 1 0 0 0 1.41-1.41Z"/><path d="M20 15h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2"/>',
};

export const zoomOutIconName = 'zoom-out';
export const zoomOutIcon: IconShapeTuple = [zoomOutIconName, renderIcon(icon)];
