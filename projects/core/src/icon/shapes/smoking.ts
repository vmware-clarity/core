/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 15c-.55 0-1-.45-1-1 0-1.7.66-2.61 1.19-3.34.47-.65.81-1.11.81-2.16s-.34-1.52-.81-2.16C29.66 5.61 29 4.7 29 3c0-.55.45-1 1-1s1 .45 1 1c0 1.05.34 1.52.81 2.16C32.34 5.89 33 6.8 33 8.5s-.66 2.61-1.19 3.34c-.47.65-.81 1.11-.81 2.16 0 .55-.45 1-1 1M8 23c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m15.13-4H30v2h-4.87l2 2H31c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-9.87z"/><path d="M26.21 21H4v-2h19.88l-2-2H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h25.21z"/>',
  solid:
    '<path d="M30 15c-.55 0-1-.45-1-1 0-1.7.66-2.61 1.19-3.34.47-.65.81-1.11.81-2.16s-.34-1.52-.81-2.16C29.66 5.61 29 4.7 29 3c0-.55.45-1 1-1s1 .45 1 1c0 1.05.34 1.52.81 2.16C32.34 5.89 33 6.8 33 8.5s-.66 2.61-1.19 3.34c-.47.65-.81 1.11-.81 2.16 0 .55-.45 1-1 1M8 23c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m15.13-4H30v2h-4.87l2 2H31c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-9.87z"/><path d="M26.21 21H4v-2h19.88l-2-2H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h25.21z"/><path d="M31 18H8v4h23z"/>',
};

export const smokingIconName = 'smoking';
export const smokingIcon: IconShapeTuple = [smokingIconName, renderIcon(icon)];
