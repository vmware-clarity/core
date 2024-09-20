/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14"/><path d="M18.92 18.4v-7.65a1 1 0 0 0-2 0v8.72l5.9 4a1 1 0 1 0 1.11-1.66Z"/><path d="M8 17.94a9.94 9.94 0 0 1 15.41-8.35l.85-1.36a11.55 11.55 0 1 0-8.53 21L16 27.7a10 10 0 0 1-8-9.76"/>',

  outlineAlerted:
    '<path d="M18.92 10.75a1 1 0 0 0-2 0v8.72l5.9 4a1 1 0 1 0 1.11-1.66l-5-3.39Z"/><path d="M33.77 15.39h-2a14 14 0 1 1-9.68-10.78l1-1.76A16 16 0 1 0 34 18a16 16 0 0 0-.23-2.61"/><path d="M18 8a10 10 0 0 1 2 .23l.85-1.46a11.55 11.55 0 1 0-5.13 22.52L16 27.7A10 10 0 0 1 18 8"/>',

  outlineBadged:
    '<path d="M18.92 10.75a1 1 0 0 0-2 0v8.72l5.9 4a1 1 0 1 0 1.11-1.66l-5-3.39Z"/><path d="M33.12 12.81a7.4 7.4 0 0 1-1.91.58 14.05 14.05 0 1 1-8.6-8.6 7.4 7.4 0 0 1 .58-1.91 16.06 16.06 0 1 0 9.93 9.93"/><path d="M18 6.38a11.56 11.56 0 0 0-2.27 22.89L16 27.7a10 10 0 1 1 7.39-18.1 7.5 7.5 0 0 1-.78-2.23A11.45 11.45 0 0 0 18 6.38"/>',

  solid:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m6.2 21.18a1 1 0 0 1-1.39.28l-5.9-4v-8.71a1 1 0 0 1 2 0v7.65l5 3.39a1 1 0 0 1 .29 1.39m-.35-14.95a11.39 11.39 0 1 0-8.54 20.83L15 30.63a13 13 0 1 1 9.7-23.77Z"/>',

  solidAlerted:
    '<path d="M33.77 15.39H22.23A3.69 3.69 0 0 1 19 13.56c0-.09-.09-.18-.13-.27v5.11l5 3.39a1 1 0 0 1-1.11 1.66l-5.9-4v-8.7a1 1 0 0 1 1.91-.41 4 4 0 0 1 .23-.45L20.74 7A11.2 11.2 0 0 0 18 6.6a11.39 11.39 0 0 0-2.69 22.47L15 30.63A13 13 0 0 1 18 5a12.8 12.8 0 0 1 3.57.51l1.53-2.66A16 16 0 1 0 34 18a16 16 0 0 0-.23-2.61"/>',

  solidBadged:
    '<path d="M33.12 12.81a7.48 7.48 0 0 1-10.44-5.18A11.2 11.2 0 0 0 18 6.6a11.39 11.39 0 0 0-2.69 22.47L15 30.63A13 13 0 0 1 18 5a12.8 12.8 0 0 1 4.51.82 7.5 7.5 0 0 1 .68-2.94 16.06 16.06 0 1 0 9.93 9.93M24.2 23.18a1 1 0 0 1-1.39.28l-5.9-4v-8.71a1 1 0 0 1 2 0v7.65l5 3.39a1 1 0 0 1 .29 1.39"/>',
};

export const clockIconName = 'clock';
export const clockIcon: IconShapeTuple = [clockIconName, renderIcon(icon)];
