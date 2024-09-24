/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M21 32H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h15c1.1 0 2 .9 2 2v8h-2V6H6v24h17c0 1.1-.9 2-2 2m4.22-16.19c.37-.09.75.04.99.32L32 21.92l-5.78 5.79c-.4.34-.99.32-1.36-.05s-.39-.96-.05-1.36l3.37-3.3H15c-.55 0-1-.45-1-1s.45-1 1-1h13.18l-3.38-3.46a.98.98 0 0 1-.32-.99c.09-.37.37-.65.74-.74" clip-rule="evenodd"/>',
  solid:
    '<path d="M14 22c0-.55.45-1 1-1h8V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2v-7h-8c-.55 0-1-.45-1-1m12.21-5.87a.98.98 0 0 0-.99-.32c-.36.09-.65.37-.74.74s.04.75.32.99L28.18 21H23v2h5.18l-3.37 3.3c-.34.4-.32.99.05 1.36s.96.39 1.36.05L32 21.92z"/>',
};

export const logoutIconName = 'logout';
export const logoutIcon: IconShapeTuple = [logoutIconName, renderIcon(icon)];
