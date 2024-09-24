/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M13 23.72V28h2v-4.28c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72M26 2c-4.41 0-8 3.59-8 8v4H2v16.9C2 32.61 3.39 34 5.1 34h17.8c1.71 0 3.1-1.39 3.1-3.1V14h-6v-4c0-3.31 2.69-6 6-6s6 2.69 6 6v6h2v-6c0-4.41-3.59-8-8-8m-2 14v14.9c0 .61-.49 1.1-1.1 1.1H5.1c-.61 0-1.1-.49-1.1-1.1V16z"/>',
  solid:
    '<path d="M26 2c-4.41 0-8 3.59-8 8v4H2v16.9C2 32.61 3.39 34 5.1 34h17.8c1.71 0 3.1-1.39 3.1-3.1V14h-6v-4c0-3.31 2.69-6 6-6s6 2.69 6 6v6h2v-6c0-4.41-3.59-8-8-8M15.2 23.84v4.36h-2.4v-4.36c-.6-.39-1-1.07-1-1.84 0-1.21.99-2.2 2.2-2.2s2.2.99 2.2 2.2c0 .77-.4 1.45-1 1.84"/>',
};

export const unlockIconName = 'unlock';
export const unlockIcon: IconShapeTuple = [unlockIconName, renderIcon(icon)];
