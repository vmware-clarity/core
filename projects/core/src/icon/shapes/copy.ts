/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29.5 7h-19A1.5 1.5 0 0 0 9 8.5v24a1.5 1.5 0 0 0 1.5 1.5h19a1.5 1.5 0 0 0 1.5-1.5v-24A1.5 1.5 0 0 0 29.5 7M29 32H11V9h18Z"/><path d="M26 3.5A1.5 1.5 0 0 0 24.5 2h-19A1.5 1.5 0 0 0 4 3.5v24A1.5 1.5 0 0 0 5.5 29H6V4h20Z"/>',

  solid:
    '<path d="M27 3.56A1.56 1.56 0 0 0 25.43 2H5.57A1.56 1.56 0 0 0 4 3.56v24.88A1.56 1.56 0 0 0 5.57 30h.52V4.07H27Z"/><rect width="23" height="28" x="8" y="6" rx="1.5" ry="1.5"/>',
};

export const copyIconName = 'copy';
export const copyIcon: IconShapeTuple = [copyIconName, renderIcon(icon)];
