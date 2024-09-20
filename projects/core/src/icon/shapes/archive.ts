/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29 32H7V22H5v10a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V22h-2Z"/><path d="M14 24a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-6a1 1 0 0 0-1 1m0-6H6v-4h4a3 3 0 0 1-.68-1.87s0-.09 0-.13H5.5A1.5 1.5 0 0 0 4 13.5V20h12Zm16.5-6h-3.84v.13A3 3 0 0 1 26 14h4v4h-8l-2 2h12v-6.5a1.5 1.5 0 0 0-1.5-1.5M18 19.18l6.38-6.35A1 1 0 1 0 23 11.41l-4 3.95V3a1 1 0 1 0-2 0v12.4l-4-3.95a1 1 0 0 0-1.41 1.42Z"/>',
  solid:
    '<path d="M19.41 20.6 18 22l-1.41-1.4L16 20H5v12a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V20H20ZM22 24a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1m8.5-12h-3.84v.13a3 3 0 0 1-.88 2.12L22 18h10v-4.5a1.5 1.5 0 0 0-1.5-1.5m-20.3 2.25a3 3 0 0 1-.88-2.12s0-.09 0-.13H5.5A1.5 1.5 0 0 0 4 13.5V18h10Zm7.8 4.93 6.38-6.35A1 1 0 1 0 23 11.41l-4 3.95V3a1 1 0 1 0-2 0v12.4l-4-3.95a1 1 0 0 0-1.41 1.42Z"/>',
};

export const archiveIconName = 'archive';
export const archiveIcon: IconShapeTuple = [archiveIconName, renderIcon(icon)];
