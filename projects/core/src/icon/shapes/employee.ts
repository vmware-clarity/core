/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14 14c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6m0-10c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m19 18h-5v2h4v8H18v-8h6v1c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v2h-7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V23c0-.55-.45-1-1-1m-11 7h6v-1.4h-6zm-.02-11.2C20.01 16.84 17.33 16 14 16c-5.39 0-9.09 2.21-10.81 3.53-.76.58-1.19 1.45-1.19 2.39v5.07c0 .55.45 1 1 1s1-.45 1-1v-5.07a1 1 0 0 1 .4-.8C5.92 19.95 9.2 18 14 18c3.51 0 6.19 1.05 7.98 2.06z"/>',
  solid:
    '<path d="M33 22.006h-5v2h4v8.003H18v-8.002h6v1c0 .55.45 1 1 1s1-.45 1-1v-5.001c0-.55-.45-1-1-1s-1 .45-1 1v2h-2.02v-4.201c-1.97-.96-4.65-1.8-7.98-1.8-5.39 0-9.09 2.21-10.81 3.53-.76.58-1.19 1.45-1.19 2.391v5.072c0 .55.45 1 1 1h13V33c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V22.997c0-.55-.45-1-1-1zm-19-8.002c3.31 0 6-2.691 6-6.002A6.006 6.006 0 0 0 14 2c-3.31 0-6 2.69-6 6.002a6.006 6.006 0 0 0 6 6.002m8 15.004h6v-1.4h-6z"/>',
};

export const employeeIconName = 'employee';
export const employeeIcon: IconShapeTuple = [employeeIconName, renderIcon(icon)];
