/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 15c-.55 0-1-.45-1-1 0-1.7.66-2.61 1.19-3.34.47-.65.81-1.11.81-2.16s-.34-1.52-.81-2.16C29.66 5.61 29 4.7 29 3c0-.55.45-1 1-1s1 .45 1 1c0 1.05.34 1.52.81 2.16C32.34 5.89 33 6.8 33 8.5s-.66 2.61-1.19 3.34c-.47.65-.81 1.11-.81 2.16 0 .55-.45 1-1 1M8 23c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m25 11c-.26 0-.51-.1-.71-.29l-30-30A.996.996 0 1 1 3.7 2.3l30 30a.996.996 0 0 1-.71 1.7zm-9.87-15H30v2h-4.87l2 2H31c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-9.87z"/><path d="M22.3 21H4v-2h16.3l-2-2H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h21.3z"/>',
  solid:
    '<path d="M30 15c-.55 0-1-.45-1-1 0-1.7.66-2.61 1.19-3.34.47-.65.81-1.11.81-2.16s-.34-1.52-.81-2.16C29.66 5.61 29 4.7 29 3c0-.55.45-1 1-1s1 .45 1 1c0 1.05.34 1.52.81 2.16C32.34 5.89 33 6.8 33 8.5s-.66 2.61-1.19 3.34c-.47.65-.81 1.11-.81 2.16 0 .55-.45 1-1 1m3 19c-.26 0-.51-.1-.71-.29l-30-30A.996.996 0 1 1 3.7 2.3l30 30a.996.996 0 0 1-.71 1.7zm-5.87-11H31c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-9.87z"/><path d="m22.3 21-2-2-2-2H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h21.3zM4 19h3v2H4z"/>',
};

export const noSmokingIconName = 'noSmoking';
export const noSmokingIcon: IconShapeTuple = [noSmokingIconName, renderIcon(icon)];
