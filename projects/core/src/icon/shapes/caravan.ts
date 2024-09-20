/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M13.5 21C11 21 9 23 9 25.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5m0 7c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5"/><path d="M33 24h-2v-7.5c0-.5-.1-1-.4-1.5l-4.2-7.5c-.5-1-1.5-1.5-2.6-1.5H5C3.3 6 2 7.3 2 9v14c0 1.7 1.3 3 3 3h2v-2H5c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h18.8c.4 0 .7.2.9.5l4.2 7.5c.1.1.1.3.1.5V24h-4V12h-7v8h2v-6h3v10h-3v2h13c.6 0 1-.4 1-1s-.4-1-1-1"/><path d="M16 12H7v6h9zm-2 4H9v-2h5z"/>',
  solid:
    '<path d="M13.5 30C11 30 9 28 9 25.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5"/><path d="M33 24h-2v-7.5c0-.5-.1-1-.4-1.5l-4.2-7.5c-.5-1-1.5-1.5-2.6-1.5H5C3.3 6 2 7.3 2 9v14c0 1.7 1.3 3 3 3h2v-2H5c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h18.8c.4 0 .7.2.9.5l4.2 7.5c.1.1.1.3.1.5V24h-4V12h-7v8h2v-6h3v10h-3v2h13c.6 0 1-.4 1-1s-.4-1-1-1"/><path d="M16 18H7v-6h9z"/>',
};

export const caravanIconName = 'caravan';
export const caravanIcon: IconShapeTuple = [caravanIconName, renderIcon(icon)];
