/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M18 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 18 2m-6.59 14.08a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M18.16 20a9 9 0 0 0-7.33 3.78 1 1 0 0 0 1.63 1.16 7 7 0 0 1 11.31-.13 1 1 0 0 0 1.6-1.2A9 9 0 0 0 18.16 20m8.8-5.72a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0M4 18c0 7.732 6.268 14 14 14a14 14 0 0 0 14-14c0-7.732-6.268-14-14-14S4 10.268 4 18" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M2 18C2 9.163 9.163 2 18 2a16 16 0 0 1 16 16c0 8.837-7.163 16-16 16S2 26.837 2 18m23.2-1.92a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6m-13.75 0a1.8 1.8 0 1 1 1.259-.513 1.8 1.8 0 0 1-1.299.513zm13.8 8.93a1 1 0 0 0 .2-1.4 9 9 0 0 0-14.54.17 1 1 0 0 0 1.63 1.16 7 7 0 0 1 11.31-.13 1 1 0 0 0 1.4.2" clip-rule="evenodd"/>',
};

export const sadFaceIconName = 'sad-face';
export const sadFaceIcon: IconShapeTuple = [sadFaceIconName, renderIcon(icon)];
