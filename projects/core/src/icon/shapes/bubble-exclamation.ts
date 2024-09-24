/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2.5c-8.82 0-16 6.28-16 14s7.18 14 16 14a18 18 0 0 0 4.88-.68l5.53 3.52a1 1 0 0 0 1.54-.84v-6.73a13 13 0 0 0 4-9.27C34 8.78 26.82 2.5 18 2.5m10.29 22.11a1 1 0 0 0-.32.73v5.34l-4.38-2.79a1 1 0 0 0-.83-.11 16 16 0 0 1-4.76.72c-7.72 0-14-5.38-14-12s6.28-12 14-12 14 5.38 14 12a11.08 11.08 0 0 1-3.71 8.11"/><path d="M18 20.63a1 1 0 0 0 1-1V8.48a1 1 0 1 0-2 0v11.13a1 1 0 0 0 1 1.02"/><circle cx="18" cy="24.04" r="1.33"/>',
  solid:
    '<path d="M18 2.5c-8.82 0-16 6.28-16 14s7.18 14 16 14a18 18 0 0 0 4.88-.68l5.53 3.52a1 1 0 0 0 1.54-.84v-6.73a13 13 0 0 0 4-9.27C34 8.78 26.82 2.5 18 2.5m-1.07 6.63a1.41 1.41 0 1 1 2.81 0v9.77a1.41 1.41 0 1 1-2.81 0Zm1.41 17.35a1.87 1.87 0 1 1 1.87-1.87 1.87 1.87 0 0 1-1.87 1.86Z"/>',
};

export const bubbleExclamationIconName = 'bubble-exclamation';
export const bubbleExclamationIcon: IconShapeTuple = [bubbleExclamationIconName, renderIcon(icon)];
