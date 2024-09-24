/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10.16 31.71a4.4 4.4 0 0 1-4.64-1 4.34 4.34 0 0 1-1.29-3.11 4.4 4.4 0 0 1 .18-1.2 11.6 11.6 0 0 1-1-2.56 6.4 6.4 0 0 0 9.33 8.63 11.6 11.6 0 0 1-2.58-.76m8.25-4.03a7.61 7.61 0 0 1-9.08-1.26 7.58 7.58 0 0 1-1.27-9.06 14.3 14.3 0 0 1-.37-2.85 9.58 9.58 0 0 0 .22 13.33 9.63 9.63 0 0 0 13.35.22 14.5 14.5 0 0 1-2.85-.38"/><path d="M21.66 26.21a12.1 12.1 0 1 1 8.57-3.54 12.1 12.1 0 0 1-8.57 3.54m0-22.21a10.11 10.11 0 0 0-10.12 10.11 10 10 0 0 0 3 7.14 10.12 10.12 0 0 0 14.31 0A10.11 10.11 0 0 0 21.66 4m7.86 18"/>',
  solid:
    '<path d="M3.5 23.77a6.41 6.41 0 0 0 9.33 8.67 11.65 11.65 0 0 1-9.33-8.67"/><path d="M7.68 14.53a9.6 9.6 0 0 0 13.4 13.7 14.11 14.11 0 0 1-13.4-13.7"/><path d="M21.78 2A12.12 12.12 0 1 1 9.66 14.15 12.12 12.12 0 0 1 21.78 2"/>',
};

export const animationIconName = 'animation';
export const animationIcon: IconShapeTuple = [animationIconName, renderIcon(icon)];
