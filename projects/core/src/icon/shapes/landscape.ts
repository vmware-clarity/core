/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 22H4V8h28Z"/><path d="M9 22a.82.82 0 0 0 .55-.21.8.8 0 0 0 0-1.13L7.83 18.8h20.34l-1.72 1.86a.8.8 0 0 0 0 1.13.82.82 0 0 0 .55.21.78.78 0 0 0 .58-.26L31.09 18l-3.47-3.74a.79.79 0 0 0-1.13 0 .8.8 0 0 0 0 1.13l1.72 1.86H7.83l1.72-1.86a.8.8 0 0 0 0-1.13.79.79 0 0 0-1.13 0L4.91 18l3.47 3.74A.78.78 0 0 0 9 22"/>',
  solid:
    '<path d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-4.23 15.88a1 1 0 0 1-.73.32 1 1 0 0 1-.68-.27 1 1 0 0 1-.06-1.41L27.71 19H8.29l1.41 1.52a1 1 0 0 1-.06 1.41 1 1 0 0 1-.64.27 1 1 0 0 1-.73-.32L4.64 18l3.59-3.88a1 1 0 0 1 1.47 1.36L8.29 17h19.42l-1.41-1.52a1 1 0 0 1 1.47-1.36L31.36 18Z"/>',
};

export const landscapeIconName = 'landscape';
export const landscapeIcon: IconShapeTuple = [landscapeIconName, renderIcon(icon)];
