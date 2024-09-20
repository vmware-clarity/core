/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M20 14h-4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-.4 6.6h-3.2v-5.2h3.2Z"/><path d="m33.71 12.38-4.09-4.09a1 1 0 0 0-.7-.29h-5V6.05A2 2 0 0 0 22 4h-8.16A1.92 1.92 0 0 0 12 6.05V8H7.08a1 1 0 0 0-.71.29l-4.08 4.09a1 1 0 0 0-.29.71V28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V13.08a1 1 0 0 0-.29-.7M14 6h8v2h-8Zm18 11H22v1.93h10V28H4v-9.07h10V17H4v-3.5L7.5 10h21l3.5 3.5Z"/>',
  solid:
    '<path d="M16.4 15.4h3.2v5.2h-3.2z"/><path d="M21 21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2H2v9a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-9H21Zm12.71-8.62-4.09-4.09a1 1 0 0 0-.7-.29h-5V6.05A2 2 0 0 0 22 4h-8.16A1.92 1.92 0 0 0 12 6.05V8H7.08a1 1 0 0 0-.71.29l-4.08 4.09a1 1 0 0 0-.29.71V17h13v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h13v-3.92a1 1 0 0 0-.29-.7M22 8h-8V6h8Z"/>',
};

export const toolsIconName = 'tools';
export const toolsIcon: IconShapeTuple = [toolsIconName, renderIcon(icon)];
