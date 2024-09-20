/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34 17h-5.77A6.25 6.25 0 0 0 22 12h-7.85a6.25 6.25 0 0 0-6.21 5H2v2h5.93a6.22 6.22 0 0 0 6.22 5H22a6.22 6.22 0 0 0 6.22-5H34Zm-16.92 5h-2.93a4.17 4.17 0 0 1-4.31-4 4.17 4.17 0 0 1 4.31-4h2.94ZM22 22h-3v-8h3a4.17 4.17 0 0 1 4.31 4A4.17 4.17 0 0 1 22 22"/>',
  solid:
    '<path d="M17 12h-2.85a6.25 6.25 0 0 0-6.21 5H2v2h5.93a6.22 6.22 0 0 0 6.22 5H17Zm11.23 5A6.25 6.25 0 0 0 22 12h-3v12h3a6.22 6.22 0 0 0 6.22-5H34v-2Z"/>',
};

export const connectIconName = 'connect';
export const connectIcon: IconShapeTuple = [connectIconName, renderIcon(icon)];
