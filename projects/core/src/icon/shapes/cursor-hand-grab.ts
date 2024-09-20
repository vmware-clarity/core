/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28.09 9.74a4 4 0 0 0-1.16.19c-.19-1.24-1.55-2.18-3.27-2.18a4 4 0 0 0-1.53.25A3.37 3.37 0 0 0 19 6.3a3.45 3.45 0 0 0-2.87 1.32 3.65 3.65 0 0 0-1.89-.51A3.05 3.05 0 0 0 11 9.89v.91c-1.06.4-4.11 1.8-4.91 4.84s.34 8 2.69 11.78a25.2 25.2 0 0 0 5.9 6.41.9.9 0 0 0 .53.17h10.34a.92.92 0 0 0 .55-.19 13.13 13.13 0 0 0 3.75-6.13A25.8 25.8 0 0 0 31.41 18v-5.5a3.08 3.08 0 0 0-3.32-2.76M29.61 18a24 24 0 0 1-1.47 9.15 12.46 12.46 0 0 1-2.94 5.05h-9.73a23.8 23.8 0 0 1-5.2-5.72c-2.37-3.86-3-8.23-2.48-10.39A5.7 5.7 0 0 1 11 12.76v7.65a.9.9 0 0 0 1.8 0V9.89c0-.47.59-1 1.46-1s1.49.52 1.49 1v5.72h1.8v-6.8c0-.28.58-.71 1.46-.71s1.53.48 1.53.75v6.89h1.8V10l.17-.12a2.1 2.1 0 0 1 1.18-.32c.93 0 1.5.44 1.5.68v6.5H27v-4.87a1.9 1.9 0 0 1 1.12-.33c.86 0 1.52.51 1.52.94Z"/>',
};

export const cursorHandGrabIconName = 'cursor-hand-grab';
export const cursorHandGrabIcon: IconShapeTuple = [cursorHandGrabIconName, renderIcon(icon)];
