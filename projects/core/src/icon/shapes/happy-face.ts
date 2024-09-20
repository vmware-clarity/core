/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14"/><circle cx="10.89" cy="13.89" r="2"/><circle cx="25.05" cy="13.89" r="2"/><path d="M18.13 28.21a8.67 8.67 0 0 0 8.26-6H9.87a8.67 8.67 0 0 0 8.26 6"/>',
  solid:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2M8.89 13.89a2 2 0 1 1 2 2 2 2 0 0 1-2-2m9.24 14.32a8.67 8.67 0 0 1-8.26-6h16.51a8.67 8.67 0 0 1-8.25 6m6.93-12.32a2 2 0 1 1 2-2 2 2 0 0 1-2.01 2Z"/>',
};

export const happyFaceIconName = 'happy-face';
export const happyFaceIcon: IconShapeTuple = [happyFaceIconName, renderIcon(icon)];
