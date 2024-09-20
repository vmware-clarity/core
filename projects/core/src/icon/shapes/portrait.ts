/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M15.34 26.45a.8.8 0 0 0-1.13 0 .79.79 0 0 0 0 1.13L18 31.09l3.74-3.47a.79.79 0 0 0 .05-1.13.8.8 0 0 0-1.13 0l-1.86 1.68V7.83l1.86 1.72a.8.8 0 1 0 1.08-1.17L18 4.91l-3.74 3.47a.79.79 0 0 0 0 1.13.8.8 0 0 0 1.13 0l1.81-1.68v20.34Z"/><path d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 30H8V4h20Z"/>',
  solid:
    '<path d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-7.48 24.3a1 1 0 0 1 1.36 1.47L18 31.36l-3.88-3.59a1 1 0 0 1 1.36-1.47L17 27.71V8.29L15.48 9.7a1 1 0 0 1-1.36-1.47L18 4.64l3.88 3.59a1 1 0 0 1 .05 1.41 1 1 0 0 1-.73.32 1 1 0 0 1-.68-.26L19 8.29v19.42Z"/>',
};

export const portraitIconName = 'portrait';
export const portraitIcon: IconShapeTuple = [portraitIconName, renderIcon(icon)];
