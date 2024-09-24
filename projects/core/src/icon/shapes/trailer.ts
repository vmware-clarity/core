/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14.938 25h2v-2h-2zm19-19h-30c-.55 0-1 .45-1 1v14c0 2.76 2.24 5 5 5h.26c-.17-.64-.26-1.31-.26-2-1.65 0-3-1.35-3-3v-9h22v9c0 1.65-1.35 3-3 3 0 .69-.1 1.36-.26 2h.26c2.76 0 5-2.24 5-5V8h5c.55 0 1-.45 1-1s-.45-1-1-1m-7 4h-22V8h22zm-11 8c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4"/>',
  solid:
    '<path d="M33.938 6h-30c-.55 0-1 .45-1 1v14c0 2.76 2.24 5 5 5h.26c-.17-.64-.26-1.31-.26-2-1.65 0-3-1.35-3-3v-9h22v9c0 1.65-1.35 3-3 3 0 .69-.1 1.36-.26 2h.26c2.76 0 5-2.24 5-5V8h5c.55 0 1-.45 1-1s-.45-1-1-1m-18 12c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m1.1 7.1h-2.2v-2.2h2.2z"/>',
};

export const trailerIconName = 'trailer';
export const trailerIcon: IconShapeTuple = [trailerIconName, renderIcon(icon)];
