/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.698 24.297 25.7 18.295a.997.997 0 1 0-1.41 1.41l4.289 4.292H8.998c-1.65 0-2.999-1.26-2.999-2.81V5c0-.55-.45-1-1-1S4 4.45 4 5v16.196c0 2.651 2.239 4.812 4.998 4.812h19.581l-4.288 4.291A.997.997 0 0 0 25 32c.26 0 .51-.1.71-.29l5.997-6.002a.997.997 0 0 0 0-1.41z"/>',
};

export const childArrowIconName = 'child-arrow';
export const childArrowIcon: IconShapeTuple = [childArrowIconName, renderIcon(icon)];
