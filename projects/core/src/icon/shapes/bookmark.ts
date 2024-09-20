/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26 34a2 2 0 0 1-1.41-.58L18 26.82l-6.54 6.52A2 2 0 0 1 8 31.93V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2m0-2V4H10v27.93L18 24Z"/>',
  solid:
    '<path d="M26 2H10a2 2 0 0 0-2 2v27.93a2 2 0 0 0 3.42 1.41l6.54-6.52 6.63 6.6A2 2 0 0 0 28 32V4a2 2 0 0 0-2-2"/>',
};

export const bookmarkIconName = 'bookmark';
export const bookmarkIcon: IconShapeTuple = [bookmarkIconName, renderIcon(icon)];
