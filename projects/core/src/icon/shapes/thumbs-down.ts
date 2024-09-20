/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12 10c2.92-1.82 7.3-4 9.37-4h6a16.7 16.7 0 0 1 3.31 6.08A26.7 26.7 0 0 1 32 20h-9v10a2.05 2.05 0 0 1-1.26 1.69c-.77-2-2.62-6.57-4.23-8.72A11.4 11.4 0 0 0 12 19.09v2.13a9.13 9.13 0 0 1 3.91 3c1.88 2.51 4.29 9.11 4.31 9.17a1 1 0 0 0 1.19.63C22.75 33.62 25 32.4 25 30v-8h8a1 1 0 0 0 1-1 29 29 0 0 0-1.4-9.62c-1.89-5.4-4.1-7.14-4.2-7.22a1 1 0 0 0-.61-.16h-6.42C18.94 4 14.83 6 12 7.63ZM2 5h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2Zm6 2H4v14h4Z"/>',
  solid:
    '<path d="M16.37 23.84c2.12 2.84 4.76 10.07 4.76 10.07s2.87-.78 2.87-3.2V21h9.77a29.5 29.5 0 0 0-1.44-9.74C30.39 5.68 28.2 4 28.2 4h-6.85C19.1 4 15 5.9 12 7.65v12.8a10.84 10.84 0 0 1 4.37 3.39M9 23a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2v18Z"/>',
};

export const thumbsDownIconName = 'thumbs-down';
export const thumbsDownIcon: IconShapeTuple = [thumbsDownIconName, renderIcon(icon)];
