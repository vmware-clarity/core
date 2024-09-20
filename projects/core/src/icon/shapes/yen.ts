/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29.34 4.55a1 1 0 1 0-1.67-1.1L18 18.23 8.33 3.45a1 1 0 0 0-1.67 1.1L17 20.35v1.85h-5a.8.8 0 0 0 0 1.6h5v2.4h-5a.8.8 0 0 0 0 1.6h5V32a1 1 0 0 0 2 0v-4.2h5a.8.8 0 0 0 0-1.6h-5v-2.4h5a.8.8 0 0 0 0-1.6h-5v-1.85Z"/>',
  solid:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m8.07 7.91L19.74 20H22a1 1 0 0 1 0 2h-2.75v2H22a1 1 0 0 1 0 2h-2.75v2.75a1.25 1.25 0 0 1-2.5 0V26H14a1 1 0 1 1 0-2h2.75v-2H14a1 1 0 1 1 0-2h2.26L9.93 9.91a1.25 1.25 0 1 1 2.12-1.33l5.95 9.5 5.95-9.49a1.25 1.25 0 1 1 2.12 1.33Z"/>',
};

export const yenIconName = 'yen';
export const yenIcon: IconShapeTuple = [yenIconName, renderIcon(icon)];
