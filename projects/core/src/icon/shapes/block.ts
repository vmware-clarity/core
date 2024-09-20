/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m31.42 9.09-13-6a1 1 0 0 0-.84 0l-13 6A1 1 0 0 0 4 10v17a1 1 0 0 0 .58.91l13 6a1 1 0 0 0 .84 0l13-6A1 1 0 0 0 32 27V10a1 1 0 0 0-.58-.91M18 5.1 28.61 10 18 14.9 7.39 10ZM6 11.56l11 5.08v14.8L6 26.36Zm13 19.88v-14.8l11-5.08v14.8Z"/>',

  outlineAlerted:
    '<path d="M30 15.53v10.83l-11 5.08v-14.8l2.57-1.19a3.67 3.67 0 0 1-2.11-1.22L18 14.9 7.39 10 18 5.1l3.08 1.42 1-1.74-3.66-1.69a1 1 0 0 0-.84 0l-13 6A1 1 0 0 0 4 10v17a1 1 0 0 0 .58.91l13 6a1 1 0 0 0 .84 0l13-6A1 1 0 0 0 32 27V15.53ZM17 31.44 6 26.36v-14.8l11 5.08Z"/>',

  outlineBadged:
    '<path d="M30 13.5v12.86l-11 5.08v-14.8l8.08-3.73a7.6 7.6 0 0 1-2-1.27L18 14.9 7.39 10 18 5.1l4.61 2.13A7 7 0 0 1 22.5 6a8 8 0 0 1 .07-1l-4.15-1.91a1 1 0 0 0-.84 0l-13 6A1 1 0 0 0 4 10v17a1 1 0 0 0 .58.91l13 6a1 1 0 0 0 .84 0l13-6A1 1 0 0 0 32 27V13.22a7.4 7.4 0 0 1-2 .28M17 31.44 6 26.36v-14.8l11 5.08Z"/>',

  solid:
    '<path d="m31.42 9.09-13-6a1 1 0 0 0-.84 0l-13 6A1 1 0 0 0 4 10v17a1 1 0 0 0 .58.91l13 6a1 1 0 0 0 .84 0l13-6A1 1 0 0 0 32 27V10a1 1 0 0 0-.58-.91M18 14.9 7.39 10 18 5.1 28.61 10Zm12 11.46-11 5.08v-14.8l11-5.08Z"/>',

  solidAlerted:
    '<path d="M30 15.38v11l-11 5.06v-14.8l2.79-1.29a3.68 3.68 0 0 1-2.25-1.16L18 14.9 7.39 10 18 5.1l3 1.39 1-1.75-3.58-1.65a1 1 0 0 0-.84 0l-13 6A1 1 0 0 0 4 10v17a1 1 0 0 0 .58.91l13 6a1 1 0 0 0 .84 0l13-6A1 1 0 0 0 32 27V15.38Z"/>',

  solidBadged:
    '<path d="M30 13.5v12.86l-11 5.08v-14.8l8.08-3.73a7.6 7.6 0 0 1-2-1.27L18 14.9 7.39 10 18 5.1l4.61 2.13A7 7 0 0 1 22.5 6a8 8 0 0 1 .07-1l-4.15-1.91a1 1 0 0 0-.84 0l-13 6A1 1 0 0 0 4 10v17a1 1 0 0 0 .58.91l13 6a1 1 0 0 0 .84 0l13-6A1 1 0 0 0 32 27V13.22a7.4 7.4 0 0 1-2 .28"/>',
};

export const blockIconName = 'block';
export const blockIcon: IconShapeTuple = [blockIconName, renderIcon(icon)];
