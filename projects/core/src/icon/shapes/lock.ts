/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M17 23.72V28h2v-4.28c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72M26 14v-4c0-4.41-3.59-8-8-8s-8 3.59-8 8v4H6v16.9C6 32.61 7.39 34 9.1 34h17.8c1.71 0 3.1-1.39 3.1-3.1V14zm-14-4c0-3.31 2.69-6 6-6s6 2.69 6 6v4H12zm16 20.9c0 .61-.49 1.1-1.1 1.1H9.1c-.61 0-1.1-.49-1.1-1.1V16h20z"/>',
  solid:
    '<path d="M26 14v-4c0-4.41-3.59-8-8-8s-8 3.59-8 8v4H6v16.9C6 32.61 7.39 34 9.1 34h17.8c1.71 0 3.1-1.39 3.1-3.1V14zm-6.8 9.84v4.36h-2.4v-4.36c-.6-.39-1-1.07-1-1.84 0-1.21.99-2.2 2.2-2.2s2.2.99 2.2 2.2c0 .77-.4 1.45-1 1.84M24 14H12v-4c0-3.31 2.69-6 6-6s6 2.69 6 6z"/>',
};

export const lockIconName = 'lock';
export const lockIcon: IconShapeTuple = [lockIconName, renderIcon(icon)];
