/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 18c.55 0 1-.45 1-1s-.45-1-1-1h-5V8h5c.55 0 1-.45 1-1s-.45-1-1-1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v3H3c-.55 0-1 .45-1 1s.45 1 1 1h3v25c0 .55.45 1 1 1s1-.45 1-1v-5h8v5c0 .55.45 1 1 1s1-.45 1-1v-5h8v5c0 .55.45 1 1 1s1-.45 1-1v-5h5c.55 0 1-.45 1-1s-.45-1-1-1h-5v-8zm-17 8H8v-8h8zm0-10H8V8h8zm10 10h-8v-8h8zm0-10h-8V8h8z"/>',
};

export const tableIconName = 'table';
export const tableIcon: IconShapeTuple = [tableIconName, renderIcon(icon)];
