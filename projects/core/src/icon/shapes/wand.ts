/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m34.1 4-2.39-2.4a1.83 1.83 0 0 0-1.31-.54 2.05 2.05 0 0 0-1.45.62L1.76 29.23A2 2 0 0 0 1.68 32l2.4 2.43a1.83 1.83 0 0 0 1.31.57 2.05 2.05 0 0 0 1.45-.62L34 6.79A2 2 0 0 0 34.1 4M5.42 32.93l-2.26-2.28L24.11 9.43l2.25 2.28ZM32.61 5.39l-5.12 5.18-2.25-2.28 5.13-5.2 2.25 2.28Zm-.08 15.08 2.09-2.09a.8.8 0 0 0-1.13-1.13l-2.09 2.09-2.09-2.09a.8.8 0 0 0-1.13 1.13l2.09 2.09-2.09 2.09a.8.8 0 0 0 1.13 1.13l2.09-2.09 2.09 2.09a.8.8 0 0 0 1.13-1.13ZM14.78 6.51a.8.8 0 0 0 1.13 0L17.4 5l1.49 1.49A.8.8 0 0 0 20 5.38l-1.46-1.49L20 2.4a.8.8 0 0 0-1.13-1.13L17.4 2.76l-1.49-1.49a.8.8 0 1 0-1.13 1.13l1.49 1.49-1.49 1.49a.8.8 0 0 0 0 1.13m-6.45 8.75a.8.8 0 0 0 1.13 0l1.16-1.16 1.16 1.16a.8.8 0 1 0 1.13-1.13L11.76 13l1.16-1.16a.8.8 0 1 0-1.13-1.13l-1.16 1.16-1.17-1.19a.8.8 0 1 0-1.13 1.13L9.49 13l-1.16 1.13a.8.8 0 0 0 0 1.13"/>',
};

export const wandIconName = 'wand';
export const wandIcon: IconShapeTuple = [wandIconName, renderIcon(icon)];
