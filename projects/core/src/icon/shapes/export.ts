/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6 13.61h7.61V6H24v8.38h2V6a2 2 0 0 0-2-2H10.87L4 10.87V30a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2H6Zm0-1.92L11.69 6H12v6H6Z"/><path d="M28.32 16.35a1 1 0 0 0-1.41 1.41L30.16 21H18a1 1 0 0 0 0 2h12.19l-3.28 3.28a1 1 0 1 0 1.41 1.41L34 22Z"/>',

  outlineAlerted:
    '<path d="M28.32 16.35a1 1 0 0 0-1.41 1.41L30.16 21H18a1 1 0 0 0 0 2h12.19l-3.28 3.28a1 1 0 1 0 1.41 1.41L34 22Z"/><path d="M6 13.61h7.61V6h7.68l1.15-2H10.87L4 10.87V30a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2H6Zm0-1.92L11.69 6H12v6H6Z"/>',

  outlineBadged:
    '<path d="M28.32 16.35a1 1 0 0 0-1.41 1.41L30.16 21H18a1 1 0 0 0 0 2h12.19l-3.28 3.28a1 1 0 1 0 1.41 1.41L34 22ZM26 12.34a7.5 7.5 0 0 1-2-1.85v3.89h2Z"/><path d="M6 13.61h7.61V6h8.89a7.5 7.5 0 0 1 .28-2H10.87L4 10.87V30a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2H6Zm0-1.92L11.69 6H12v6H6Z"/>',

  solid:
    '<path d="M17 22a1 1 0 0 1 1-1h8V6a2 2 0 0 0-2-2H10.87L4 10.86V30a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-7h-8a1 1 0 0 1-1-1m-5-10H6v-.32L11.69 6H12Zm17.32 4.35a1 1 0 0 0-1.41 1.41L31.16 21H26v2h5.19l-3.28 3.28a1 1 0 1 0 1.41 1.41L35 22Z"/>',

  solidAlerted:
    '<path d="M29.32 16.35a1 1 0 0 0-1.41 1.41L31.16 21H26v2h5.19l-3.28 3.28a1 1 0 1 0 1.41 1.41L35 22ZM17 22a1 1 0 0 1 1-1h8v-5.6h-3.77A3.68 3.68 0 0 1 19 9.89L22.45 4H10.87L4 10.86V30a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-7h-8a1 1 0 0 1-1-1m-5-10H6v-.32L11.69 6H12Z"/>',

  solidBadged:
    '<path d="M29.32 16.35a1 1 0 0 0-1.41 1.41L31.16 21H26v2h5.19l-3.28 3.28a1 1 0 1 0 1.41 1.41L35 22ZM17 22a1 1 0 0 1 1-1h8v-8.66A7.46 7.46 0 0 1 22.78 4H10.87L4 10.86V30a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-7h-8a1 1 0 0 1-1-1m-5-10H6v-.32L11.69 6H12Z"/>',
};

export const exportIconName = 'export';
export const exportIcon: IconShapeTuple = [exportIconName, renderIcon(icon)];
