/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M4.56 32a.96.96 0 0 1-.51-.14c-.47-.28-.63-.9-.35-1.37l15.44-26c.28-.47.9-.63 1.37-.35s.63.9.35 1.37l-15.44 26c-.19.31-.52.49-.86.49"/><path d="M31.44 32c-.34 0-.67-.17-.86-.49l-15.44-26c-.28-.48-.12-1.09.35-1.37a1 1 0 0 1 1.37.35l15.44 26c.28.48.12 1.09-.35 1.37-.16.09-.34.14-.51.14"/><path d="M33 32H3c-.55 0-1-.45-1-1s.45-1 1-1h30c.55 0 1 .45 1 1s-.45 1-1 1m-18.46-4L18 22l3.46 6h2.31l-4.91-8.5c-.36-.62-1.38-.62-1.73 0L12.22 28z"/>',
  solid:
    '<path d="M33 30h-.99L19.16 8.37l1.7-2.86c.28-.48.12-1.09-.35-1.37s-1.09-.12-1.37.35L18 6.41l-1.14-1.92c-.28-.47-.9-.63-1.37-.35s-.63.9-.35 1.37l1.7 2.86L3.99 30H3c-.55 0-1 .45-1 1s.45 1 1 1h30c.55 0 1-.45 1-1s-.45-1-1-1m-11.54-2L18 22l-3.46 6h-2.31l4.91-8.5c.36-.62 1.38-.62 1.73 0l4.91 8.5z"/>',
};

export const tentIconName = 'tent';
export const tentIcon: IconShapeTuple = [tentIconName, renderIcon(icon)];
