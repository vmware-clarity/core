/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m33.04 9.7-4.76-4.77c-1.24-1.24-3.4-1.24-4.64 0L4.9 23.68a3.283 3.283 0 0 0 0 4.64L6.58 30H3c-.55 0-1 .45-1 1s.45 1 1 1h21.96c.55 0 1-.45 1-1s-.45-1-1-1h-7.57l15.65-15.67a3.283 3.283 0 0 0 0-4.64zM14.57 30H9.41l-3.09-3.09c-.5-.5-.5-1.31 0-1.81l4.67-4.67 6.58 6.58-3 3zm17.06-17.08L18.97 25.59l-6.58-6.58L25.05 6.34c.49-.49 1.33-.49 1.81 0l4.76 4.77c.5.5.5 1.31 0 1.81z"/>',
  solid:
    '<path d="M24.96 29.986h-7.57l1.61-1.61-9.4-9.386-4.7 4.698a3.28 3.28 0 0 0 0 4.638l1.68 1.67H3c-.55 0-1 .45-1 1s.45 1 1 1h21.96c.55 0 1-.45 1-1s-.45-1-1-1zm8.08-20.273-4.76-4.758a3.284 3.284 0 0 0-4.64 0L11.01 17.58l9.4 9.397L33.04 14.35a3.28 3.28 0 0 0 0-4.638"/>',
};

export const eraserIconName = 'eraser';
export const eraserIcon: IconShapeTuple = [eraserIconName, renderIcon(icon)];
