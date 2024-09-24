/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 3c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1h24zm2 4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h28zM9 20c1.66 0 3-1.34 3-3s-1.34-3-3-3a2.996 2.996 0 0 0-2.12 5.12c.56.56 1.33.88 2.12.88m0-4.6c.65-.02 1.25.36 1.51.96s.13 1.29-.32 1.76-1.15.61-1.75.36A1.6 1.6 0 0 1 9 15.4M32.12 10H3.88C2.84 10 2 10.84 2 11.88v20.24C2 33.16 2.84 34 3.88 34h28.24c1.04 0 1.88-.84 1.88-1.88V11.88c0-1.04-.84-1.88-1.88-1.88M32 32H4V12h28zm-18.1-8 3.18 3.18L14.26 30h2l7.46-7.46L30 28.77v-2L24.2 21a.72.72 0 0 0-1 0l-5.16 5.16-3.67-3.66a.72.72 0 0 0-1 0L5.92 30H7.9z"/>',
  solid:
    '<path d="M30 3c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1h24zm2.12 7H3.88C2.84 10 2 10.84 2 11.88v20.24C2 33.16 2.84 34 3.88 34h28.24c1.04 0 1.88-.84 1.88-1.88V11.88c0-1.04-.84-1.88-1.88-1.88M9 14c1.66 0 3 1.34 3 3a2.996 2.996 0 0 1-5.12 2.12A2.996 2.996 0 0 1 9 14m21 16H5.92l7.45-7.5c.28-.27.72-.27 1 0l3.67 3.66L23.2 21c.28-.27.72-.27 1 0l5.8 5.77zm2-23c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h28z"/>',
};

export const imageGalleryIconName = 'image-gallery';
export const imageGalleryIcon: IconShapeTuple = [imageGalleryIconName, renderIcon(icon)];
