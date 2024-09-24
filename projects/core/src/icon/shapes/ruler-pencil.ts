/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.71 32.29 32 30.58v1.41H4v-4h2v-2H4v-4h2v-2H4v-4h2v-2H4V5.41l16 16v-2.83L3.71 2.29a.98.98 0 0 0-1.09-.21C2.25 2.23 2 2.6 2 3v30c0 .55.45 1 1 1h30c.4 0 .77-.24.92-.62.16-.37.07-.8-.22-1.09zM25 30h2c1.65 0 3-1.35 3-3V8c0-.18-.05-.36-.14-.51l-3-5c-.36-.6-1.35-.6-1.71 0l-3 5c-.09.16-.14.33-.14.51v19c0 1.65 1.35 3 3 3zM24 8.28l2-3.33 2 3.33V22h-4zM24 24h4v3c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1zm-14-7.21V25c0 .55.45 1 1 1h8.21l-2-2H12v-5.21z"/>',
  solid:
    '<path d="M33.71 32.29 32 30.58l-2.3-2.3c.19-.39.3-.82.3-1.29V8c0-.18-.05-.36-.14-.51l-3-5c-.36-.6-1.35-.6-1.71 0l-3 5c-.09.16-.14.33-.14.51v12.59l-2-2-16.3-16.3a.98.98 0 0 0-1.09-.21C2.25 2.23 2 2.6 2 3v11h2v2H2v4h2v2H2v4h2v2H2v5c0 .55.45 1 1 1h30c.4 0 .77-.24.92-.62.16-.37.07-.8-.22-1.09zM10.89 26c-.49 0-.89-.4-.89-.89V17.8l8 8.21h-7.11zM28 27c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3h4zM26 4.94l2 3.33v13.72h-4V8.28l2-3.33z"/>',
};

export const rulerPencilIconName = 'ruler-pencil';
export const rulerPencilIcon: IconShapeTuple = [rulerPencilIconName, renderIcon(icon)];
