/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34 21.08 30.86 8.43A2 2 0 0 0 28.94 7H7.06a2 2 0 0 0-1.93 1.47L2 21.08a1 1 0 0 0 0 .24V29a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.69a1 1 0 0 0 0-.23M4 29v-7.56L7.06 9h21.87L32 21.44V29Z"/><path d="M6 20h24v2H6zm20 4h4v2h-4z"/>',

  outlineAlerted:
    '<path d="M6 20h24v2H6zm20 4h4v2h-4z"/><path d="m34 21.08-1.4-5.68h-2.09l1.49 6V29H4v-7.56L7.06 9h12.5l1.15-2H7.06a2 2 0 0 0-1.93 1.47L2 21.08a1 1 0 0 0 0 .24V29a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.69a1 1 0 0 0 0-.23"/>',

  outlineBadged:
    '<path d="M6 20h24v2H6zm20 4h4v2h-4z"/><path d="m34 21.08-2-7.87a7.5 7.5 0 0 1-2 .29l2 7.94V29H4v-7.56L7.06 9h16.07a7.5 7.5 0 0 1-.55-2H7.06a2 2 0 0 0-1.93 1.47L2 21.08a1 1 0 0 0 0 .24V29a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.69a1 1 0 0 0 0-.23"/>',

  solid:
    '<path d="M30.86 8.43A2 2 0 0 0 28.94 7H7.06a2 2 0 0 0-1.93 1.47L2.29 20h31.42ZM2 22v7a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7Zm28 5h-4v-2h4Z"/>',

  solidAlerted:
    '<path d="M2 22v7a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7Zm28 5h-4v-2h4Zm2.58-11.6H22.23A3.68 3.68 0 0 1 19 9.89L20.71 7H7.06a2 2 0 0 0-1.93 1.47L2.29 20h31.42Z"/>',

  solidBadged:
    '<path d="M2 22v7a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7Zm28 5h-4v-2h4Zm2-13.79A7.47 7.47 0 0 1 22.57 7H7.06a2 2 0 0 0-1.93 1.47L2.29 20h31.42Z"/>',
};

export const hardDiskIconName = 'hard-disk';
export const hardDiskIcon: IconShapeTuple = [hardDiskIconName, renderIcon(icon)];
