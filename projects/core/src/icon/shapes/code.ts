/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M13.71 12.59a1 1 0 0 0-1.39-.26l-6.53 4.45a1 1 0 0 0 0 1.65l6.53 4.45a1 1 0 1 0 1.13-1.65l-5.32-3.62L13.45 14a1 1 0 0 0 .26-1.41m16.5 4.19-6.53-4.45A1 1 0 1 0 22.55 14l5.32 3.63-5.32 3.63a1 1 0 0 0 1.13 1.65l6.53-4.45a1 1 0 0 0 0-1.65ZM19.94 9.83a.9.9 0 0 0-1.09.66l-3.44 13.8a.9.9 0 0 0 .66 1.09h.22a.9.9 0 0 0 .87-.68l3.44-13.81a.9.9 0 0 0-.66-1.06"/>',

  outlineAlerted:
    '<path d="M13.71 12.59a1 1 0 0 0-1.39-.26l-6.53 4.45a1 1 0 0 0 0 1.65l6.53 4.45a1 1 0 1 0 1.13-1.65l-5.32-3.62L13.45 14a1 1 0 0 0 .26-1.41m4.85-.97-3.15 12.67a.9.9 0 0 0 .66 1.09h.22a.9.9 0 0 0 .87-.68l2.57-10.3a3.59 3.59 0 0 1-1.16-2.79Zm11.65 5.16-2-1.38h-3.57l3.24 2.21-5.32 3.63a1 1 0 0 0 1.13 1.65l6.53-4.45a1 1 0 0 0 0-1.65Z"/>',

  outlineBadged:
    '<path d="M13.71 12.59a1 1 0 0 0-1.39-.26l-6.53 4.45a1 1 0 0 0 0 1.65l6.53 4.45a1 1 0 1 0 1.13-1.65l-5.32-3.62L13.45 14a1 1 0 0 0 .26-1.41m16.5 4.19-6.53-4.45A1 1 0 1 0 22.55 14l5.32 3.63-5.32 3.63a1 1 0 0 0 1.13 1.65l6.53-4.45a1 1 0 0 0 0-1.65ZM19.94 9.83a.9.9 0 0 0-1.09.66l-3.44 13.8a.9.9 0 0 0 .66 1.09h.22a.9.9 0 0 0 .87-.68l3.44-13.81a.9.9 0 0 0-.66-1.06"/>',
};

export const codeIconName = 'code';
export const codeIcon: IconShapeTuple = [codeIconName, renderIcon(icon)];
