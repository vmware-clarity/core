/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14"/><circle cx="25.16" cy="14.28" r="1.8"/><circle cx="11.41" cy="14.28" r="1.8"/><path d="M18.16 20a9 9 0 0 0-7.33 3.78 1 1 0 1 0 1.63 1.16 7 7 0 0 1 11.31-.13 1 1 0 0 0 1.6-1.2A9 9 0 0 0 18.16 20"/>',
  solid:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m9 12.28a1.8 1.8 0 1 1-1.8-1.8 1.8 1.8 0 0 1 1.8 1.8m-15.55 1.8a1.8 1.8 0 1 1 1.8-1.8 1.8 1.8 0 0 1-1.84 1.8Zm14 7.53a1 1 0 0 1-1.6 1.2 7 7 0 0 0-11.31.13 1 1 0 1 1-1.63-1.16 9 9 0 0 1 14.54-.17"/>',
};

export const sadFaceIconName = 'sad-face';
export const sadFaceIcon: IconShapeTuple = [sadFaceIconName, renderIcon(icon)];
