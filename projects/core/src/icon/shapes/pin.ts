/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 16.59a1 1 0 0 1-.71-.29L19.7 3.71a1 1 0 0 1 1.41-1.41l12.6 12.59a1 1 0 0 1-.71 1.7m-4.48-1.03-1.41-1.41-7.2 7.2a1 1 0 0 0-.25 1 9 9 0 0 1-1.53 8.09L5.58 17.87a9 9 0 0 1 8.09-1.53 1 1 0 0 0 1-.25l7.2-7.2-1.43-1.41-6.79 6.79a10.94 10.94 0 0 0-10.24 2.84 1 1 0 0 0 0 1.42l6.33 6.33-7.45 7.43A1 1 0 1 0 3.7 33.7l7.44-7.44 6.33 6.33a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.3 11 11 0 0 0 2.84-10.24Z"/>',

  solid:
    '<path d="M33 16.71a1 1 0 0 1-.71-.29L19.7 3.82a1 1 0 0 1 1.41-1.41L33.71 15a1 1 0 0 1-.71 1.71M20.44 7.59l-6.79 6.79a10.94 10.94 0 0 0-10.24 2.84 1 1 0 0 0 0 1.42L9.73 25l-7.44 7.41a1 1 0 1 0 1.41 1.41l7.44-7.44 6.33 6.33a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.3 11 11 0 0 0 2.84-10.24l6.79-6.79Z"/>',
};

export const pinIconName = 'pin';
export const pinIcon: IconShapeTuple = [pinIconName, renderIcon(icon)];
