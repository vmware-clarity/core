/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32.12 10H3.88A1.88 1.88 0 0 0 2 11.88v18.24A1.88 1.88 0 0 0 3.88 32h28.24A1.88 1.88 0 0 0 34 30.12V11.88A1.88 1.88 0 0 0 32.12 10M32 30H4V12h28ZM30.14 3a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v1h24Zm1.98 4a1 1 0 0 0-1-1h-26a1 1 0 0 0-1 1v1h28Z"/><path d="M12.82 26.79a1.74 1.74 0 0 0 .93.28 1.7 1.7 0 0 0 .69-.15l9.77-4.36a1.69 1.69 0 0 0 0-3.1l-9.77-4.36a1.7 1.7 0 0 0-2.39 1.55v8.72a1.7 1.7 0 0 0 .77 1.42m.63-10.14a.29.29 0 0 1 .14-.25.3.3 0 0 1 .16 0 .3.3 0 0 1 .12 0l9.77 4.35a.29.29 0 0 1 .18.28.28.28 0 0 1-.18.27l-9.77 4.36a.28.28 0 0 1-.28 0 .31.31 0 0 1-.14-.25Z"/>',
  solid:
    '<path d="M32.12 10H3.88A1.88 1.88 0 0 0 2 11.88v18.24A1.88 1.88 0 0 0 3.88 32h28.24A1.88 1.88 0 0 0 34 30.12V11.88A1.88 1.88 0 0 0 32.12 10m-7.94 11.83-9.77 4.36a1 1 0 0 1-1.41-.91v-8.72a1 1 0 0 1 1.41-.91L24.18 20a1 1 0 0 1 0 1.83M30.14 3a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v1h24Zm1.98 4a1 1 0 0 0-1-1h-26a1 1 0 0 0-1 1v1h28Z"/>',
};

export const videoGalleryIconName = 'video-gallery';
export const videoGalleryIcon: IconShapeTuple = [videoGalleryIconName, renderIcon(icon)];
