/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14"/><path d="M27.15 15H8.85A1.85 1.85 0 0 0 7 16.85v2.29A1.85 1.85 0 0 0 8.85 21h18.3A1.85 1.85 0 0 0 29 19.15v-2.3A1.85 1.85 0 0 0 27.15 15m.25 4.15a.25.25 0 0 1-.25.25H8.85a.25.25 0 0 1-.25-.25v-2.3a.25.25 0 0 1 .25-.25h18.3a.25.25 0 0 1 .25.25Z"/>',

  solid:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m11.15 18H6.85a.85.85 0 0 1-.85-.85v-2.3a.85.85 0 0 1 .85-.85h22.3a.85.85 0 0 1 .85.85v2.29a.85.85 0 0 1-.85.86"/>',
};

export const noAccessIconName = 'no-access';
export const noAccessIcon: IconShapeTuple = [noAccessIconName, renderIcon(icon)];
