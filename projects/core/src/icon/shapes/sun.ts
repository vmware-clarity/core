/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 6.31a1 1 0 0 0 1-1v-3.4a1 1 0 0 0-2 0v3.4a1 1 0 0 0 1 1m0 23.38a1 1 0 0 0-1 1v3.4a1 1 0 0 0 2 0v-3.4a1 1 0 0 0-1-1M8.32 9.74A1 1 0 0 0 9 10a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L7.33 5.92a1 1 0 0 0-1.41 1.41Zm19.36 16.52a1 1 0 1 0-1.42 1.42l2.41 2.4a1 1 0 0 0 .71.3 1 1 0 0 0 .7-.3 1 1 0 0 0 0-1.41ZM6.31 18a1 1 0 0 0-1-1h-3.4a1 1 0 0 0 0 2h3.4a1 1 0 0 0 1-1m27.78-1h-3.4a1 1 0 1 0 0 2h3.4a1 1 0 0 0 0-2M8.32 26.26l-2.4 2.41a1 1 0 0 0 .7 1.71 1 1 0 0 0 .71-.3l2.41-2.4a1 1 0 1 0-1.42-1.42M27 10a1 1 0 0 0 .71-.29l2.4-2.41a1 1 0 0 0 0-1.41 1 1 0 0 0-1.41 0l-2.41 2.4a1 1 0 0 0 0 1.42A1 1 0 0 0 27 10"/><path d="M18.13 7.75a10.13 10.13 0 1 0 10 10.13 10.08 10.08 0 0 0-10-10.13m0 18.25a8.13 8.13 0 1 1 8-8.12 8.08 8.08 0 0 1-8 8.12"/>',
  solid:
    '<path d="M18 6.42a1 1 0 0 0 1-1V1.91a1 1 0 0 0-2 0v3.51a1 1 0 0 0 1 1m0 23.16a1 1 0 0 0-1 1v3.51a1 1 0 0 0 2 0v-3.51a1 1 0 0 0-1-1M8.4 9.81A1 1 0 0 0 9.81 8.4L7.33 5.92a1 1 0 0 0-1.41 1.41Zm19.2 16.38a1 1 0 0 0-1.41 1.41l2.48 2.48a1 1 0 0 0 1.41-1.41ZM6.42 18a1 1 0 0 0-1-1H1.91a1 1 0 0 0 0 2h3.51a1 1 0 0 0 1-1m27.67-1h-3.51a1 1 0 0 0 0 2h3.51a1 1 0 0 0 0-2M8.4 26.19l-2.48 2.48a1 1 0 0 0 1.41 1.41l2.48-2.48a1 1 0 0 0-1.41-1.41M27.6 9.81l2.48-2.48a1 1 0 0 0-1.41-1.41L26.19 8.4a1 1 0 0 0 1.41 1.41"/><circle cx="18" cy="18" r="10"/>',
};

export const sunIconName = 'sun';
export const sunIcon: IconShapeTuple = [sunIconName, renderIcon(icon)];
