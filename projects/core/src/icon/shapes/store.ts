/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28 30H16v-8h-2v8H8v-8H6v8a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-8h-2Zm5.79-16.73-4.08-8.16A2 2 0 0 0 27.92 4H8.08a2 2 0 0 0-1.79 1.11l-4.08 8.16a2 2 0 0 0-.21.9v3.08a2 2 0 0 0 .46 1.28A4.67 4.67 0 0 0 6 20.13a4.72 4.72 0 0 0 3-1.07 4.73 4.73 0 0 0 6 0 4.73 4.73 0 0 0 6 0 4.73 4.73 0 0 0 6 0 4.72 4.72 0 0 0 6.53-.52 2 2 0 0 0 .47-1.28v-3.09a2 2 0 0 0-.21-.9M30 18.13A2.68 2.68 0 0 1 27.82 17L27 15.88 26.19 17a2.71 2.71 0 0 1-4.37 0L21 15.88 20.19 17a2.71 2.71 0 0 1-4.37 0L15 15.88 14.19 17a2.71 2.71 0 0 1-4.37 0L9 15.88 8.18 17A2.68 2.68 0 0 1 6 18.13a2.64 2.64 0 0 1-2-.88v-3.08L8.08 6h19.84L32 14.16v3.06a2.67 2.67 0 0 1-2 .91"/>',
  solid:
    '<path d="M28 30H16v-8h-2v8H8v-8H6v8a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-8h-2Zm5.79-16.73-4.08-8.16A2 2 0 0 0 27.92 4H8.08a2 2 0 0 0-1.79 1.11l-4.08 8.16a2 2 0 0 0-.21.9v3.08a2 2 0 0 0 .46 1.28A4.67 4.67 0 0 0 6 20.13a4.72 4.72 0 0 0 3-1.07 4.73 4.73 0 0 0 6 0 4.73 4.73 0 0 0 6 0 4.73 4.73 0 0 0 6 0 4.72 4.72 0 0 0 6.53-.52 2 2 0 0 0 .47-1.28v-3.09a2 2 0 0 0-.21-.9M15 14.4v1.52L14.18 17a2.71 2.71 0 0 1-4.37 0L9 15.88V14.4L11.59 6H16Zm12 1.48L26.19 17a2.71 2.71 0 0 1-4.37 0L21 15.88V14.4L20 6h4.45L27 14.4Z"/>',
};

export const storeIconName = 'store';
export const storeIcon: IconShapeTuple = [storeIconName, renderIcon(icon)];
