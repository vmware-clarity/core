/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2M8.81 15 17 6.83v20.65a1 1 0 0 0 2 0V6.83L27.19 15a1 1 0 0 0 1.41-1.41L18 3 7.39 13.61A1 1 0 1 0 8.81 15"/>',
  outlineAlerted:
    '<path d="M31 31H5c-.6 0-1 .4-1 1s.4 1 1 1h26c.6 0 1-.4 1-1s-.4-1-1-1M8.8 15 17 6.8v20.6c0 .6.4 1 1 1s1-.4 1-1V6.8L20.1 8l1-1.8L18 3 7.4 13.6c-.4.4-.5 1-.2 1.4s1 .5 1.4.1c.1 0 .2 0 .2-.1"/>',
  outlineBadged:
    '<path d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2M8.81 15 17 6.83v20.65a1 1 0 0 0 2 0V6.83L27.19 15a1 1 0 0 0 1.41-1.41L18 3 7.39 13.61A1 1 0 1 0 8.81 15"/>',
};

export const uploadIconName = 'upload';
export const uploadIcon: IconShapeTuple = [uploadIconName, renderIcon(icon)];
