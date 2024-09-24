/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.297 26.49c-2.25 2.26-5.231 3.51-8.402 3.51s-6.162-1.25-8.402-3.51A11.9 11.9 0 0 1 10.702 22h14.304c.55 0 1-.45 1-1s-.45-1-1-1H10.182c-.22-1.32-.22-2.68 0-4h14.824c.55 0 1-.45 1-1s-.45-1-1-1H10.702c.57-1.64 1.49-3.18 2.79-4.49C15.744 7.25 18.725 6 21.896 6c3.17 0 6.161 1.25 8.402 3.51a.996.996 0 1 0 1.41-1.41A13.72 13.72 0 0 0 21.895 4c-3.711 0-7.202 1.46-9.823 4.1a13.85 13.85 0 0 0-3.48 5.9H5c-.55 0-1 .45-1 1s.45 1 1 1h3.161c-.19 1.33-.19 2.67 0 4h-3.16C4.45 20 4 20.45 4 21s.45 1 1 1h3.581a13.9 13.9 0 0 0 3.481 5.9c2.62 2.65 6.112 4.1 9.823 4.1 3.71 0 7.202-1.46 9.822-4.1a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0"/>',
  solid:
    '<path fill-rule="evenodd" d="M2 18C2 9.163 9.163 2 18 2a16 16 0 0 1 16 16c0 8.837-7.163 16-16 16S2 26.837 2 18m13.798 10.095a10.88 10.88 0 0 0 9.622-.935v-.04A1.251 1.251 0 0 0 24.09 25a8.36 8.36 0 0 1-12.22-4h9.28a1 1 0 1 0 0-2h-9.82a7.7 7.7 0 0 1 0-2h9.85a1 1 0 1 0 0-2h-9.36a8.36 8.36 0 0 1 12.24-4.19 1.25 1.25 0 0 0 1.32-2.12A10.86 10.86 0 0 0 9.19 15h-3.4a1 1 0 1 0 0 2h3v.93c0 .181.013.363.025.543A8 8 0 0 1 8.84 19h-3a1 1 0 1 0 0 2h3.39a10.88 10.88 0 0 0 6.568 7.095" clip-rule="evenodd"/>',
};

export const euroIconName = 'euro';
export const euroIcon: IconShapeTuple = [euroIconName, renderIcon(icon)];
