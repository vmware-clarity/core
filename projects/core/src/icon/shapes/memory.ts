/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M8 12h4v8H8zm8 0h4v8h-4zm8 0h4v8h-4z"/><path d="M15 27H4V17H2v10a2 2 0 0 0 2 2h12.61v-3.45h2.26V24H15ZM32 7H4a2 2 0 0 0-2 2v4h2V9h28v4h2V9a2 2 0 0 0-2-2m0 20H19v2h13a2 2 0 0 0 2-2V17h-2Z"/>',

  outlineAlerted:
    '<path d="M8 12h4v8H8z"/><path d="M15 27H4V17H2v10a2 2 0 0 0 2 2h12.61v-3.45h2.26V24H15Zm17-10v10H19v2h13a2 2 0 0 0 2-2V17Zm-13-3.44a3.66 3.66 0 0 1-.43-1.56H16v8h4v-5.36a3.7 3.7 0 0 1-1-1.08m5 1.84h4V20h-4zM4 9h15.56l1.15-2H4a2 2 0 0 0-2 2v4h2Z"/>',

  outlineBadged:
    '<path d="M8 12h4v8H8zm8 0h4v8h-4z"/><path d="M15 27H4V17H2v10a2 2 0 0 0 2 2h12.61v-3.45h2.26V24H15Zm17-10v10H19v2h13a2 2 0 0 0 2-2V17Zm-4-3.78A7.5 7.5 0 0 1 25.51 12H24v8h4ZM4 9h19.13a7.5 7.5 0 0 1-.55-2H4a2 2 0 0 0-2 2v4h2Z"/>',

  solid:
    '<path d="M34 13V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4h2v4H2v10a2 2 0 0 0 2 2h12.61v-3.45H19V29h13a2 2 0 0 0 2-2V17h-2v-4Zm-22 7H8v-8h4Zm8 0h-4v-8h4Zm8 0h-4v-8h4Z"/>',

  solidAlerted:
    '<path d="M32 17v-1.93h-4V20h-4v-4.93h-1.77a3.68 3.68 0 0 1-2.23-.76V20h-4v-8h2.61A3.68 3.68 0 0 1 19 9.55L20.52 7H4a2 2 0 0 0-2 2v4h2v4H2v10a2 2 0 0 0 2 2h12.61v-3.45H19V29h13a2 2 0 0 0 2-2V17Zm-20 3H8v-8h4Z"/>',

  solidBadged:
    '<path d="M32 17v-3.78a7.33 7.33 0 0 1-4 0V20h-4v-8h1.51a7.48 7.48 0 0 1-2.94-5H4a2 2 0 0 0-2 2v4h2v4H2v10a2 2 0 0 0 2 2h12.61v-3.45H19V29h13a2 2 0 0 0 2-2V17Zm-20 3H8v-8h4Zm8 0h-4v-8h4Z"/>',
};

export const memoryIconName = 'memory';
export const memoryIcon: IconShapeTuple = [memoryIconName, renderIcon(icon)];
