/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24 26c-2.92 1.82-7.3 4-9.37 4h-6a16.7 16.7 0 0 1-3.31-6.08A26.7 26.7 0 0 1 4 16h9V6a2.05 2.05 0 0 1 1.26-1.69c.77 2 2.62 6.57 4.23 8.72A11.4 11.4 0 0 0 24 16.91v-2.13a9.13 9.13 0 0 1-3.91-3c-1.88-2.51-4.29-9.11-4.31-9.17A1 1 0 0 0 14.59 2C13.25 2.38 11 3.6 11 6v8H3a1 1 0 0 0-1 1 29 29 0 0 0 1.4 9.62c1.89 5.4 4.1 7.14 4.2 7.22a1 1 0 0 0 .61.21h6.42c2.43 0 6.55-2 9.37-3.63Zm10 5h-7a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1h7Zm-6-2h4V15h-4Z"/>',
  solid:
    '<path d="M19.63 12.12C17.51 9.28 14.88 2 14.88 2S12 2.83 12 5.25V15H2.23a29.5 29.5 0 0 0 1.44 9.74C5.61 30.27 7.8 32 7.8 32h6.86C16.9 32 21 30.06 24 28.31v-12.8a10.84 10.84 0 0 1-4.37-3.39M27 13a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h7V13Z"/>',
};

export const thumbsUpIconName = 'thumbs-up';
export const thumbsUpIcon: IconShapeTuple = [thumbsUpIconName, renderIcon(icon)];
