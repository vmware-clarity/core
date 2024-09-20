/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32.12 10H3.88A1.88 1.88 0 0 0 2 11.88v18.24A1.88 1.88 0 0 0 3.88 32h28.24A1.88 1.88 0 0 0 34 30.12V11.88A1.88 1.88 0 0 0 32.12 10M32 30H4V12h28Z"/><path d="M8.56 19.45a3 3 0 1 0-3-3 3 3 0 0 0 3 3m0-4.6A1.6 1.6 0 1 1 7 16.45a1.6 1.6 0 0 1 1.56-1.6M7.9 28l6-6 3.18 3.18L14.26 28h2l7.46-7.46L30 26.77v-2L24.2 19a.71.71 0 0 0-1 0l-5.16 5.16-3.67-3.66a.71.71 0 0 0-1 0L5.92 28ZM30.14 3a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v1h24Zm1.98 4a1 1 0 0 0-1-1h-26a1 1 0 0 0-1 1v1h28Z"/>',
  solid:
    '<path d="M30.14 3a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v1h24Zm1.98 4a1 1 0 0 0-1-1h-26a1 1 0 0 0-1 1v1h28Zm0 3H3.88A1.88 1.88 0 0 0 2 11.88v18.24A1.88 1.88 0 0 0 3.88 32h28.24A1.88 1.88 0 0 0 34 30.12V11.88A1.88 1.88 0 0 0 32.12 10M8.56 13.45a3 3 0 1 1-3 3 3 3 0 0 1 3-3M30 28H6l7.46-7.47a.71.71 0 0 1 1 0l3.68 3.68L23.21 19a.71.71 0 0 1 1 0L30 24.79Z"/>',
};

export const imageGalleryIconName = 'image-gallery';
export const imageGalleryIcon: IconShapeTuple = [imageGalleryIconName, renderIcon(icon)];
