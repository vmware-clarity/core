/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M22.89 2H8.83A1.88 1.88 0 0 0 7 3.91V15h2V4h12v8h8v20H9v-5H7v5.09A1.88 1.88 0 0 0 8.83 34h20.34A1.88 1.88 0 0 0 31 32.09V9.92Zm.11 8V4.1l6 5.9Z"/><path d="M9.45 19.7A2.73 2.73 0 0 0 6.7 17H3v8h1.67v-2.6h1.84a2.72 2.72 0 0 0 2.93-2.51 1 1 0 0 0 .01-.19m-3.12 1.13H4.67v-2.26h1.66c.83 0 1.39.44 1.39 1.13s-.56 1.13-1.39 1.13m11.49.17c0-2.34-1.86-4-4.48-4h-2.79v8h2.79c2.66 0 4.48-1.67 4.48-4m-4.26 2.45h-1.34v-4.89h1.34a2.44 2.44 0 0 1 0 4.88Zm11.55-4.9V17H19.1v8h1.68v-3.17h3.92v-1.55h-3.92v-1.73z"/>',
  solid:
    '<path d="M14.56 19.56h-1.34v4.88h1.34a2.44 2.44 0 0 0 0-4.88m-7.23.01H5.67v2.26h1.66c.83 0 1.39-.44 1.39-1.13s-.56-1.13-1.39-1.13"/><path d="M21.89 2H7.83A1.88 1.88 0 0 0 6 3.91V14h2V4h12v8h8v4H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h25v4H8v-2H6v2.09A1.88 1.88 0 0 0 7.83 34h20.34A1.88 1.88 0 0 0 30 32.09V9.92ZM7.51 23.4H5.67V26H4v-8h3.51A2.71 2.71 0 0 1 8 23.4a4 4 0 0 1-.49 0m6.83 2.6h-2.79v-8h2.79c2.62 0 4.48 1.65 4.48 4s-1.82 4-4.48 4m11.77-6.45h-4.33v1.73h3.92v1.55h-3.92V26H20.1v-8h6ZM22 10V4.1l6 5.9Z"/>',
};

export const pdfFileIconName = 'pdf-file';
export const pdfFileIcon: IconShapeTuple = [pdfFileIconName, renderIcon(icon)];
