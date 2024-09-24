/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23.43 16.83A1 1 0 0 0 22 18.24L25.72 22H7.83a1 1 0 0 0 0 2h17.89L22 27.7a1 1 0 1 0 1.42 1.41L29.53 23Zm-10.19 1.62a1 1 0 0 0 .71-1.71L10.24 13h17.88a1 1 0 0 0 0-2H10.24l3.71-3.73a1 1 0 0 0-1.42-1.41L6.42 12l6.11 6.14a1 1 0 0 0 .71.31"/>',
};

export const twoWayArrowsIconName = 'two-way-arrows';
export const twoWayArrowsIcon: IconShapeTuple = [twoWayArrowsIconName, renderIcon(icon)];
