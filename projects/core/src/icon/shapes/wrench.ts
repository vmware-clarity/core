/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.18 26.11 20.35 13.28A9.28 9.28 0 0 0 7.54 2.79l-1.34.59 5.38 5.38-2.82 2.83-5.38-5.38-.59 1.33a9.27 9.27 0 0 0 10.49 12.81l12.83 12.83a2 2 0 0 0 2.83 0l4.24-4.24a2 2 0 0 0 0-2.83m-5.66 5.66L13.88 18.12l-.57.16a7.27 7.27 0 0 1-9.31-7 7.2 7.2 0 0 1 .15-1.48l4.61 4.61 5.66-5.66-4.61-4.6a7.27 7.27 0 0 1 8.47 9.16l-.16.57 13.65 13.65Z"/><circle cx="27.13" cy="27.09" r="1.3" transform="rotate(-45 27.132 27.092)"/>',
  solid:
    '<path d="M33.73 27.72 19.67 13.66a8.79 8.79 0 0 0-12-10.5L13 8.53 8.53 13 3.16 7.67a8.79 8.79 0 0 0 10.5 12l14.06 14.06a1.07 1.07 0 0 0 1.5 0l4.51-4.51a1.07 1.07 0 0 0 0-1.5M29 29a1.38 1.38 0 1 1 0-2 1.38 1.38 0 0 1 0 2"/>',
};

export const wrenchIconName = 'wrench';
export const wrenchIcon: IconShapeTuple = [wrenchIconName, renderIcon(icon)];
