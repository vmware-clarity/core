/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M4 6h28a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m23.04 16.2a1 1 0 0 0 .73-.32L31.36 18l-3.59-3.88a1.001 1.001 0 1 0-1.47 1.36L27.71 17H8.29l1.41-1.52a1.001 1.001 0 0 0-1.47-1.36L4.64 18l3.63 3.88a1 1 0 0 0 .73.32 1 1 0 0 0 .64-.27 1 1 0 0 0 .06-1.41L8.29 19h19.42l-1.41 1.52a1 1 0 0 0 .06 1.41 1 1 0 0 0 .68.27" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 22H4V8h28zM9.55 21.79A.82.82 0 0 1 9 22a.78.78 0 0 1-.62-.26L4.91 18l3.51-3.74a.79.79 0 0 1 1.13 0 .8.8 0 0 1 0 1.13l-1.72 1.86h20.38l-1.72-1.86a.8.8 0 0 1 0-1.13.79.79 0 0 1 1.13 0L31.09 18l-3.51 3.74A.78.78 0 0 1 27 22a.82.82 0 0 1-.55-.21.8.8 0 0 1 0-1.13l1.72-1.86H7.83l1.72 1.86a.8.8 0 0 1 0 1.13" clip-rule="evenodd"/>',
};

export const landscapeIconName = 'landscape';
export const landscapeIcon: IconShapeTuple = [landscapeIconName, renderIcon(icon)];
