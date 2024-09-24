/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M25 4c-2.74 0-5.31 1.25-7 3.35A9.02 9.02 0 0 0 11 4c-4.96 0-9 4.04-9 9.01 0 0 0 .14.02.36.03.81.16 1.59.37 2.24.95 3.88 4.18 11.15 15.19 16.29a1.02 1.02 0 0 0 .84 0c11.01-5.14 14.24-12.41 15.17-16.23.22-.72.35-1.48.39-2.29.02-.25.02-.38.02-.39 0-4.96-4.04-9-9-9zm6.99 9.26v.03c-.03.63-.13 1.24-.32 1.85-.85 3.48-3.75 9.98-13.67 14.75C8.09 25.13 5.18 18.62 4.31 15.08a7.3 7.3 0 0 1-.3-1.82C4 13.1 4 13.01 4 13c0-3.86 3.14-7 7-7 2.54 0 4.89 1.38 6.12 3.61.35.64 1.4.64 1.75 0A7 7 0 0 1 24.99 6c3.86 0 7 3.14 7 6.99 0 .01 0 .11-.01.27z"/>',
  solid:
    '<path d="M25 4c-2.74 0-5.31 1.25-7 3.35A9.02 9.02 0 0 0 11 4c-4.96 0-9 4.04-9 9.01 0 0 0 .14.02.36.03.81.16 1.59.37 2.24.95 3.88 4.18 11.15 15.19 16.29a1.02 1.02 0 0 0 .84 0c11.01-5.14 14.24-12.41 15.17-16.23.22-.72.35-1.48.39-2.29.02-.25.02-.38.02-.39 0-4.96-4.04-9-9-9z"/>',
};

export const heartIconName = 'heart';
export const heartIcon: IconShapeTuple = [heartIconName, renderIcon(icon)];
