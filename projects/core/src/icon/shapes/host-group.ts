/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21.08 34h-14A1.08 1.08 0 0 1 6 33V12a1.08 1.08 0 0 1 1.08-1.08h14A1.08 1.08 0 0 1 22.16 12v21a1.08 1.08 0 0 1-1.08 1M8.16 31.88H20V13H8.16Z"/><path d="M10.08 14.96h8v2h-8z"/><path d="M26.1 27.81h-2V9h-12V7h13a1 1 0 0 1 1 1Z"/><path d="M30.08 23h-2V5h-11V3h12a1 1 0 0 1 1 1Zm-17 4.88h2v2.16h-2z"/>',
  solid:
    '<path d="M15.08 31h-14A1.08 1.08 0 0 1 0 30V9c0-.596.484-1.08 1.08-1.08h14c.596 0 1.08.484 1.08 1.08v21a1.08 1.08 0 0 1-1.08 1m-11-19.04v2h8v-2zm3 12.92v2.16h2v-2.16z"/><path d="M20.1 24.81h-2V6h-12V4h13a1 1 0 0 1 1 1z"/><path d="M24.08 20h-2V2h-11V0h12a1 1 0 0 1 1 1z"/>',
};

export const hostGroupIconName = 'host-group';
export const hostGroupIcon: IconShapeTuple = [hostGroupIconName, renderIcon(icon)];
