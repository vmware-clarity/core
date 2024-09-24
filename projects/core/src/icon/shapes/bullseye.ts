/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2a16 16 0 0 0-4.25.59l.77 1.86a14.07 14.07 0 1 1-10 10l-1.86-.78A16 16 0 1 0 18 2"/><path d="M7.45 15.7a10.81 10.81 0 1 0 8.3-8.26L16.37 9A9.24 9.24 0 1 1 9 16.32Z"/><path d="M18 22.09a4.08 4.08 0 0 1-4-3.68l-1.63-.68V18A5.69 5.69 0 1 0 18 12.31h-.24l.67 1.69a4.07 4.07 0 0 1-.43 8.09"/><path d="M8.2 13.34a.5.5 0 0 0 .35.15h3.65l5.37 5.37A1 1 0 0 0 19 17.44L13.53 12V8.51a.5.5 0 0 0-.15-.35L7.79 2.57a.5.5 0 0 0-.85.35v4H3a.5.5 0 0 0-.35.85Z"/>',
  solid:
    '<path d="M19 18.85a1 1 0 0 1-1.41 0l-3-3a4 4 0 0 0-.68 2.15A4.09 4.09 0 1 0 18 13.91a4 4 0 0 0-2 .55l3 3a1 1 0 0 1 0 1.39"/><path d="M18 2a16 16 0 0 0-4.25.59l1.6 3.89a11.89 11.89 0 1 1-8.86 8.82l-3.88-1.62A16 16 0 1 0 18 2"/><path d="M8 15.94A10.17 10.17 0 1 0 16 8l1.69 4.11H18A5.88 5.88 0 1 1 12.12 18v-.35Z"/><path d="M8.2 13.34a.5.5 0 0 0 .35.15h3.65l2.35 2.35A4.1 4.1 0 0 1 16 14.46L13.53 12V8.51a.5.5 0 0 0-.15-.35L7.79 2.57a.5.5 0 0 0-.85.35v4H3a.5.5 0 0 0-.35.85Z"/>',
};

export const bullseyeIconName = 'bullseye';
export const bullseyeIcon: IconShapeTuple = [bullseyeIconName, renderIcon(icon)];
