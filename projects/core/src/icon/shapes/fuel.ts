/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M20.12 34H5.9A2.81 2.81 0 0 1 3 31.19V4.86a2.9 2.9 0 0 1 3-2.79h14.22A2.72 2.72 0 0 1 23 4.86v26.33A2.82 2.82 0 0 1 20.12 34M5.9 4a.87.87 0 0 0-.9.86v26.33a.87.87 0 0 0 .87.87h14.25a.94.94 0 0 0 .95-.87V4.86a.94.94 0 0 0-.95-.86Z"/><path d="M29.53 34A3.5 3.5 0 0 1 26 30.5V23a2 2 0 0 0-2-2h-1.43a1 1 0 0 1 0-2H24a4 4 0 0 1 4 4v7.5a1.5 1.5 0 0 0 3 0V17.3l-3.13-7A2.29 2.29 0 0 0 25.8 9h-.73a1 1 0 1 1 0-2h.73a4.3 4.3 0 0 1 3.93 2.55l3.21 7.16a1 1 0 0 1 .09.41V30.5a3.5 3.5 0 0 1-3.5 3.5M18 9H8a1 1 0 1 1 0-2h10a1 1 0 0 1 0 2m0 4H8a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2"/><path d="M25 12.08a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1"/>',
};

export const fuelIconName = 'fuel';
export const fuelIcon: IconShapeTuple = [fuelIconName, renderIcon(icon)];
