/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14.438 21c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5m0 7c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5m.5-16h-8v6h8zm-2 4h-4v-2h4zm21 8h-3v-7.5c0-.5-.1-1-.4-1.5l-4-7.5c-.5-1-.7-1.5-1.8-1.5h-18.8c-1.7 0-3 1.3-3 3v14c0 1.7 1.3 3 3 3h2v-2h-2c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h18c.4 0 .7.2.9.5l4 7.5c.1.1.1.3.1.5V24h-4V12h-8v8h2v-6h4v10h-2v2h13c.6 0 1-.4 1-1s-.4-1-1-1"/>',
  solid:
    '<path d="M14.938 12h-8v6h8zm-.5 9c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5m19.5 3h-3v-7.5c0-.5-.1-1-.4-1.5l-4-7.5c-.5-1-.7-1.5-1.8-1.5h-18.8c-1.7 0-3 1.3-3 3v14c0 1.7 1.3 3 3 3h2v-2h-2c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h18c.4 0 .7.2.9.5l4 7.5c.1.1.1.3.1.5V24h-4V12h-8v8h2v-6h4v10h-2v2h13c.6 0 1-.4 1-1s-.4-1-1-1"/>',
};

export const caravanIconName = 'caravan';
export const caravanIcon: IconShapeTuple = [caravanIconName, renderIcon(icon)];
