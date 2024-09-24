/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M16 16h15v2H16zm4 5h11v2H20z"/><path d="M34 8H12.93a8.4 8.4 0 0 1 .79 2H33v16H3v-6.1a7.8 7.8 0 0 1-2-1.34V27a1 1 0 0 0 1 1h32a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1"/><path d="M6.57 18.68a6.17 6.17 0 0 0 4.32-1.59 1.2 1.2 0 0 0 .36-.84 1.08 1.08 0 0 0-1.09-1.11 1 1 0 0 0-.71.25 4.32 4.32 0 0 1-2.84 1 3.35 3.35 0 0 1-3.46-3h7.53A1.29 1.29 0 0 0 12 12.06a5.68 5.68 0 0 0-5.73-5.92A6 6 0 0 0 .4 12.4a6 6 0 0 0 6.17 6.28M6.25 8.39c1.82 0 2.87 1.39 3 3.16H3.13c.25-1.86 1.43-3.16 3.12-3.16"/>',
  solid:
    '<path d="M34 8H12.91a8.6 8.6 0 0 1 1.2 4.39 8 8 0 0 1-7.78 8.27A7.5 7.5 0 0 1 1 18.41V27a1 1 0 0 0 1 1h32a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m-3 15H20v-2h11Zm0-5H16v-2h15Z"/><path d="M6.57 18.68A6 6 0 0 1 .4 12.44a6 6 0 0 1 5.87-6.3A5.68 5.68 0 0 1 12 12.06a1.29 1.29 0 0 1-1.3 1.32H3.15a3.35 3.35 0 0 0 3.46 3 4.32 4.32 0 0 0 2.84-1 1 1 0 0 1 .71-.25 1.08 1.08 0 0 1 1.09 1.11 1.2 1.2 0 0 1-.36.84 6.17 6.17 0 0 1-4.32 1.6m2.73-7.13c-.18-1.77-1.23-3.16-3-3.16s-2.87 1.3-3.12 3.16Z"/>',
};

export const eCheckIconName = 'e-check';
export const eCheckIcon: IconShapeTuple = [eCheckIconName, renderIcon(icon)];
