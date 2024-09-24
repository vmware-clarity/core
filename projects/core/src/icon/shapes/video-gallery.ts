/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 3c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1h24zm2 4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h28zm.12 3H3.88C2.84 10 2 10.84 2 11.88v20.24C2 33.16 2.84 34 3.88 34h28.24c1.04 0 1.88-.84 1.88-1.88V11.88c0-1.04-.84-1.88-1.88-1.88M32 32H4V12h28zm-19.55-4.17c.17.11.36.17.55.17.13 0 .26-.03.38-.08l12-5c.37-.16.62-.52.62-.92s-.24-.77-.62-.92l-12-5a.99.99 0 0 0-.94.09c-.28.19-.45.5-.45.83v10c0 .33.17.65.45.83zM14 18.5l8.4 3.5-8.4 3.5z"/>',
  solid:
    '<path d="M30 3c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1h24zm2 4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h28zm.12 3H3.88C2.84 10 2 10.84 2 11.88v20.24C2 33.16 2.84 34 3.88 34h28.24c1.04 0 1.88-.84 1.88-1.88V11.88c0-1.04-.84-1.88-1.88-1.88m-6.74 12.92-12 5c-.12.05-.25.08-.38.08a1.01 1.01 0 0 1-1-1V17c0-.33.17-.65.45-.83.28-.19.63-.22.94-.09l12 5c.37.16.62.52.62.92s-.24.77-.62.92z"/>',
};

export const videoGalleryIconName = 'video-gallery';
export const videoGalleryIcon: IconShapeTuple = [videoGalleryIconName, renderIcon(icon)];
