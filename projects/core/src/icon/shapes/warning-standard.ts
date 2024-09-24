/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<circle cx="18" cy="26.06" r="1.33"/><path d="M18 22.61a1 1 0 0 1-1-1v-12a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1"/><path d="M15.062 1.681a3.221 3.221 0 0 1 5.647.002l13.89 25.56A3.22 3.22 0 0 1 31.77 32H4.022a3.22 3.22 0 0 1-2.9-4.759zM2.88 28.198A1.22 1.22 0 0 0 4 30h27.77a1.22 1.22 0 0 0 1.071-1.803L18.954 2.642a1.22 1.22 0 0 0-2.137-.001z"/>',
  solid:
    '<path d="M34.6 29.21 20.71 3.65a3.22 3.22 0 0 0-5.66 0L1.17 29.21A3.22 3.22 0 0 0 4 34h27.77a3.22 3.22 0 0 0 2.83-4.75ZM16.6 10a1.4 1.4 0 0 1 2.8 0v12a1.4 1.4 0 0 1-2.8 0ZM18 29.85a1.8 1.8 0 1 1 1.8-1.8 1.8 1.8 0 0 1-1.8 1.8"/>',
};

export const warningStandardIconName = 'warning-standard';
export const warningStandardIcon: IconShapeTuple = [warningStandardIconName, renderIcon(icon)];
