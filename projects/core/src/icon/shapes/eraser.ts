/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M35.62 12a2.82 2.82 0 0 0-.84-2l-7.29-7.35a2.9 2.9 0 0 0-4 0L2.83 23.28a2.84 2.84 0 0 0 0 4L7.53 32H3a1 1 0 0 0 0 2h25a1 1 0 0 0 0-2H16.74l18-18a2.82 2.82 0 0 0 .88-2M13.91 32h-3.55l-6.11-6.11a.84.84 0 0 1 0-1.19l5.51-5.52 8.49 8.48Zm19.46-19.46L19.66 26.25l-8.48-8.49 13.7-13.7a.86.86 0 0 1 1.19 0l7.3 7.29a.86.86 0 0 1 .25.6.82.82 0 0 1-.25.59"/>',
  solid:
    '<path d="M28 32H15.33L19 28.37l-9.9-9.9L3.54 24a1.83 1.83 0 0 0 0 2.6L9 32H3a1 1 0 0 0 0 2h25a1 1 0 0 0 0-2"/><path d="m34.08 10.65-7.3-7.3a1.83 1.83 0 0 0-2.6 0L10.47 17.06l9.9 9.9 13.71-13.71a1.85 1.85 0 0 0 0-2.6"/>',
};

export const eraserIconName = 'eraser';
export const eraserIcon: IconShapeTuple = [eraserIconName, renderIcon(icon)];
