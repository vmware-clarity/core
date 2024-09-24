/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14"/><path d="M22.33 18a4.46 4.46 0 1 0-4.45 4.46A4.46 4.46 0 0 0 22.33 18m-4.45 2.9a2.86 2.86 0 1 1 2.85-2.9 2.86 2.86 0 0 1-2.85 2.9m0-13.47H18V5.84h-.12a12.21 12.21 0 0 0-12.2 11.91h1.6a10.61 10.61 0 0 1 10.6-10.32M30.08 18h-1.59a10.61 10.61 0 0 1-10.24 10.63v1.6A12.22 12.22 0 0 0 30.09 18s-.01 0-.01 0"/><path d="M18 11V9.44h-.12a8.62 8.62 0 0 0-8.6 8.32h1.6a7 7 0 0 1 7-6.72Zm.25 14v1.6a8.61 8.61 0 0 0 8.23-8.6h-1.6a7 7 0 0 1-6.63 7"/>',
  solid:
    '<path d="M18.17 1.92a16 16 0 1 0 16 16 16 16 0 0 0-16-16M26.23 18h1.54a9.61 9.61 0 0 1-9.6 9.53H18V26h.17a8.07 8.07 0 0 0 8.06-8M6.05 18h-1.6v-.08A13.72 13.72 0 0 1 18 4.21v1.6A12.13 12.13 0 0 0 6.05 17.92Zm4.05 0H8.56v-.08A9.61 9.61 0 0 1 18 8.32v1.54a8.07 8.07 0 0 0-7.9 8.06Zm4.32-.08a3.75 3.75 0 1 1 3.75 3.75 3.75 3.75 0 0 1-3.75-3.75m3.75 13.71H18V30h.17a12.13 12.13 0 0 0 12.11-12h1.6a13.73 13.73 0 0 1-13.71 13.63"/>',
};

export const cdDvdIconName = 'cd-dvd';
export const cdDvdIcon: IconShapeTuple = [cdDvdIconName, renderIcon(icon)];
