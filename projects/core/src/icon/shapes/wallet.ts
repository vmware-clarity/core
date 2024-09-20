/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 15h-1V9a1 1 0 0 0-1-1H6a1 1 0 0 1-1-.82v-.36A1 1 0 0 1 6 6h23.58a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3 3 3 0 0 0 0 .36v20.57A4.1 4.1 0 0 0 7.13 32H30a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-3 15H7.13A2.11 2.11 0 0 1 5 27.93V9.88A3.1 3.1 0 0 0 6 10h23v5h-7a5 5 0 0 0 0 10h7Zm2-7h-9a3 3 0 0 1 0-6h9Z"/><circle cx="23.01" cy="20" r="1.5"/>',
  solid:
    '<path d="M32.94 14H31V9a1 1 0 0 0-1-1H6a1 1 0 0 1-1-1 1 1 0 0 1 1-1h23.6a1 1 0 1 0 0-2H6a2.94 2.94 0 0 0-3 2.88v21A4.13 4.13 0 0 0 7.15 32H30a1 1 0 0 0 1-1v-5h1.94a.93.93 0 0 0 1-.91v-10a1.08 1.08 0 0 0-1-1.09M32 24h-8.58a3.87 3.87 0 0 1-3.73-4 3.87 3.87 0 0 1 3.73-4H32Z"/><circle cx="24.04" cy="19.92" r="1.5"/>',
};

export const walletIconName = 'wallet';
export const walletIcon: IconShapeTuple = [walletIconName, renderIcon(icon)];
