/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32.47 25.6 21.75 5.92a4.27 4.27 0 0 0-7.5 0L3.53 25.6a4.27 4.27 0 0 0 3.75 6.32h21.44a4.27 4.27 0 0 0 3.75-6.32M29 27.78a.26.26 0 0 1-.24.14H7.28a.26.26 0 0 1-.28-.14.25.25 0 0 1 0-.27L17.76 7.83a.28.28 0 0 1 .48 0L29 27.51a.25.25 0 0 1 0 .27"/><path d="M16 12h4v8h-4zm0 10h4v4h-4z"/>',
  solid:
    '<path d="M32.71 29 20.44 4.42a2.73 2.73 0 0 0-4.88 0L3.29 29a2.73 2.73 0 0 0 2.44 4h24.54a2.73 2.73 0 0 0 2.44-4M20 28h-4v-4h4Zm0-8h-4v-8h4Z"/>',
};

export const warningMiniIconName = 'warning-mini';
export const warningMiniIcon: IconShapeTuple = [warningMiniIconName, renderIcon(icon)];
