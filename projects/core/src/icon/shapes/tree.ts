/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.6 11.7C29.2 5.8 24 1.7 18 1.7c-7.2 0-13 5.8-13 13 0 6.8 5.3 12.4 12 12.9v5c0 .6.4 1 1 1s1-.4 1-1V18.3l4.7-4.7c.4-.4.4-1 0-1.4s-1-.4-1.4 0L19 15.6v-3l-3.3-3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.7 2.7v6.2l-3.8-3.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.2 5.2v3.2c-5.6-.5-10-5.2-10-10.9 0-6.1 4.9-11 11-11s11 4.9 11 11c0 4.9-3.3 9.2-8 10.6v2.1c7-1.7 11.3-8.7 9.6-15.7"/>',
  solid:
    '<path d="M18 2C10.8 1.7 4.8 7.3 4.5 14.5S9.8 27.7 17 28v-5.2l-5.2-5.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L17 20v-6.2l-2.7-2.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L19 13v3l3.3-3.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4L19 18.8V28c7.2-.3 12.8-6.3 12.5-13.5S25.2 1.7 18 2m0 26h-1v5c0 .6.4 1 1 1s1-.4 1-1v-5z"/>',
};

export const treeIconName = 'tree';
export const treeIcon: IconShapeTuple = [treeIconName, renderIcon(icon)];
