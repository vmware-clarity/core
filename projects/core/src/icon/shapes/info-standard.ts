/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M2 18c0 8.84 7.16 16 16 16 4.24 0 8.31-1.69 11.31-4.69S34 22.24 34 18c0-8.84-7.16-16-16-16S2 9.16 2 18m2 0c0-7.73 6.27-14 14-14s14 6.27 14 14-6.27 14-14 14S4 25.73 4 18m17 7h-2V14h-3c-.55 0-1 .45-1 1s.45 1 1 1h1v9h-2c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1m-1.63-14.55c0 .77-.63 1.4-1.4 1.4s-1.4-.63-1.4-1.4.63-1.4 1.4-1.4 1.4.63 1.4 1.4"/>',
  solid:
    '<path d="M18 2C9.16 2 2 9.16 2 18s7.16 16 16 16c4.24 0 8.31-1.69 11.31-4.69S34 22.24 34 18c0-8.84-7.16-16-16-16m-.03 6.85c.88 0 1.6.72 1.6 1.6s-.72 1.6-1.6 1.6-1.6-.72-1.6-1.6.72-1.6 1.6-1.6M21 27.2h-6c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2h1.8v-8.6H16c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2h3.2v11H21c.66 0 1.2.54 1.2 1.2s-.54 1.2-1.2 1.2"/>',
};

export const infoStandardIconName = 'info-standard';
export const infoStandardIcon: IconShapeTuple = [infoStandardIconName, renderIcon(icon)];
