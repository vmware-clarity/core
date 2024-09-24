/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.36 8H27.5v2H31v20h-3.5v2H33V9.67A1.65 1.65 0 0 0 31.36 8M5 10h3.5V8H4.64A1.65 1.65 0 0 0 3 9.67V32h5.5v-2H5Z"/><ellipse cx="18.01" cy="25.99" rx="1.8" ry="1.79"/><path d="M24.32 4H11.68A1.68 1.68 0 0 0 10 5.68V32h16V5.68A1.68 1.68 0 0 0 24.32 4M24 30H12V6h12Z"/><path d="M13.5 9.21h9v1.6h-9z"/>',

  outlineAlerted:
    '<path d="M5 10h3.5V8H4.64A1.65 1.65 0 0 0 3 9.67V32h5.5v-2H5Z"/><ellipse cx="18.01" cy="25.99" rx="1.8" ry="1.79"/><path d="m19 9.89.39-.68H13.5v1.6h5.17a3.7 3.7 0 0 1 .33-.92"/><path d="M24 30H12V6h9.29l1.15-2H11.68A1.68 1.68 0 0 0 10 5.68V32h16V15.4h-2Zm7-14.6V30h-3.5v2H33V15.4z"/>',

  outlineBadged:
    '<path d="M5 10h3.5V8H4.64A1.65 1.65 0 0 0 3 9.67V32h5.5v-2H5Z"/><ellipse cx="18.01" cy="25.99" rx="1.8" ry="1.79"/><path d="M13.5 9.21h9v1.6h-9z"/><path d="M24 10.49V30H12V6h10.5a7.5 7.5 0 0 1 .28-2h-11.1A1.68 1.68 0 0 0 10 5.68V32h16V12.34a7.5 7.5 0 0 1-2-1.85m7 2.94V30h-3.5v2H33V12.87a7.5 7.5 0 0 1-2 .56"/>',

  solid:
    '<path d="M31.36 8H27.5v24H33V9.67A1.65 1.65 0 0 0 31.36 8M3 9.67V32h5.5V8H4.64A1.65 1.65 0 0 0 3 9.67M24.32 4H11.68A1.68 1.68 0 0 0 10 5.68V32h16V5.68A1.68 1.68 0 0 0 24.32 4M18 27.79A1.79 1.79 0 1 1 19.81 26 1.8 1.8 0 0 1 18 27.79m5-17.19H13V9h10Z"/>',

  solidAlerted:
    '<path d="M3 9.67V32h5.5V8H4.64A1.65 1.65 0 0 0 3 9.67m24.5 5.73H33V32h-5.5zM19 13.56a3.68 3.68 0 0 1-.31-3H13V9h6.56l2.89-5H11.68A1.68 1.68 0 0 0 10 5.68V32h16V15.4h-3.77A3.69 3.69 0 0 1 19 13.56m-1 14.23A1.79 1.79 0 1 1 19.81 26 1.8 1.8 0 0 1 18 27.79"/>',

  solidBadged:
    '<path d="M3 9.67V32h5.5V8H4.64A1.65 1.65 0 0 0 3 9.67M22.5 6a7.5 7.5 0 0 1 .28-2h-11.1A1.68 1.68 0 0 0 10 5.68V32h16V12.34A7.49 7.49 0 0 1 22.5 6M18 27.79A1.79 1.79 0 1 1 19.81 26 1.8 1.8 0 0 1 18 27.79m5-17.19H13V9h10Zm7 2.9a7.5 7.5 0 0 1-2.5-.44V32H33V12.87a7.5 7.5 0 0 1-3 .63"/>',
};

export const clusterIconName = 'cluster';
export const clusterIcon: IconShapeTuple = [clusterIconName, renderIcon(icon)];
