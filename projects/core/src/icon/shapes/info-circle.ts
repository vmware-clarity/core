/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21 23h-2v-8h-3c-.55 0-1 .45-1 1s.45 1 1 1h1v6h-2c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1m-3.07-9.7c.77 0 1.4-.63 1.4-1.4s-.63-1.4-1.4-1.4-1.4.63-1.4 1.4.63 1.4 1.4 1.4M18 6C11.38 6 6 11.38 6 18s5.38 12 12 12 12-5.38 12-12S24.62 6 18 6m0 22c-5.51 0-10-4.49-10-10S12.49 8 18 8s10 4.49 10 10-4.49 10-10 10"/>',
  solid:
    '<path d="M18 6C11.38 6 6 11.38 6 18s5.38 12 12 12 12-5.38 12-12S24.62 6 18 6m-.07 4.3c.88 0 1.6.72 1.6 1.6s-.72 1.6-1.6 1.6-1.6-.72-1.6-1.6.72-1.6 1.6-1.6M21 25.2h-6c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2h1.8v-5.6H16c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2h3.2v8H21c.66 0 1.2.54 1.2 1.2s-.54 1.2-1.2 1.2"/>',
};

export const infoCircleIconName = 'info-circle';
export const infoCircleIcon: IconShapeTuple = [infoCircleIconName, renderIcon(icon)];
