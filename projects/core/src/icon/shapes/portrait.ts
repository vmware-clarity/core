/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 2v28H8V4zM14.21 26.45a.8.8 0 0 1 1.13 0l1.86 1.72V7.83l-1.81 1.68a.8.8 0 0 1-1.13 0 .79.79 0 0 1 0-1.13L18 4.91l3.74 3.47a.8.8 0 1 1-1.08 1.17L18.8 7.83v20.34l1.86-1.68a.8.8 0 0 1 1.13 0 .79.79 0 0 1-.05 1.13L18 31.09l-3.79-3.51a.79.79 0 0 1 0-1.13" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M8 2h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m13.935 24.355a1 1 0 0 0-1.415-.055L19 27.71V8.29l1.52 1.41a1 1 0 0 0 .68.26 1 1 0 0 0 .68-1.73L18 4.64l-3.88 3.59a1.001 1.001 0 0 0 1.36 1.47L17 8.29v19.42l-1.52-1.41a1.001 1.001 0 0 0-1.36 1.47L18 31.36l3.88-3.59c.406-.376.43-1.01.055-1.415" clip-rule="evenodd"/>',
};

export const portraitIconName = 'portrait';
export const portraitIcon: IconShapeTuple = [portraitIconName, renderIcon(icon)];
