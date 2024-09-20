/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<circle cx="17.93" cy="11.9" r="1.4"/><path d="M21 23h-2v-8h-3a1 1 0 0 0 0 2h1v6h-2a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2"/><path d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6m0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10"/>',
  solid:
    '<path d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6m-2 5.15a2 2 0 1 1 2 2 2 2 0 0 1-2.1-2ZM23 24a1 1 0 0 1-1 1h-7a1 1 0 1 1 0-2h2v-6h-1a1 1 0 0 1 0-2h4v8h2a1 1 0 0 1 1 1"/>',
};

export const infoCircleIconName = 'info-circle';
export const infoCircleIcon: IconShapeTuple = [infoCircleIconName, renderIcon(icon)];
