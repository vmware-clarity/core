/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26.628 15.15C22.948 7.96 19.308 5 14.128 5s-9.19 4.12-9.19 9.19V15c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2V17h20c4.41 0 8 3.59 8 8h-4.56a3.98 3.98 0 0 0-3.44-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4h4c1.1 0 2-.9 2-2 0-4.94-3.6-9.04-8.31-9.85M10.938 15h-4v-.81c0-2.82 1.63-5.26 4-6.43zm2 0V7.11c.39-.06.78-.11 1.19-.11 3.48 0 6.57 1.41 10.16 8zm12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m-14-6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4h4c0-.7.13-1.37.35-2h-4.91a3.98 3.98 0 0 0-3.44-2m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m6-10h-4v2h4z"/>',
  solid:
    '<path d="M26.628 15.15C22.948 7.96 19.308 5 14.128 5s-9.19 4.12-9.19 9.19V15c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2 0-3.31 2.69-6 6-6h.05v2h-.05c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4h4c0-3.31 2.69-6 6-6v2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4h4c1.1 0 2-.9 2-2 0-4.94-3.6-9.04-8.31-9.85M10.938 15h-4v-.81c0-2.82 1.63-5.26 4-6.43zm0 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m6-8h-4v-2h4zm-4-6V7.11c.39-.06.78-.11 1.19-.11 3.48 0 6.57 1.41 10.16 8zm12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"/>',
};

export const carIconName = 'car';
export const carIcon: IconShapeTuple = [carIconName, renderIcon(icon)];
