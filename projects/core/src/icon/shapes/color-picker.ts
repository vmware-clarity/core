/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 10.05a5.07 5.07 0 0 0 .1-7.17A5.06 5.06 0 0 0 26 3l-5.22 5.15a2.13 2.13 0 0 1-3 0l-.67-.67-1.39 1.44 11.36 11.36 1.42-1.42-.67-.67a2.13 2.13 0 0 1 0-3Zm-6.56 3.75a4.07 4.07 0 0 0-1.08 1.92l-5.08-5.08a4.07 4.07 0 0 0 1.92-1.08l5.16-5.17a3.09 3.09 0 0 1 4.35-.1 3.09 3.09 0 0 1-.1 4.35ZM7.3 31.51a2 2 0 1 1-2.83-2.83l14.11-14.11-1.42-1.41L3.05 27.27a4 4 0 0 0-.68 4.8L.89 33.55a1 1 0 0 0 0 1.45 1 1 0 0 0 1.42 0l1.43-1.44a3.93 3.93 0 0 0 2.09.6 4.06 4.06 0 0 0 2.88-1.2l14.11-14.15-1.41-1.41Z"/>',
  solid:
    '<path d="M33.73 2.11a4.09 4.09 0 0 0-5.76.1l-5.16 5.17a3.13 3.13 0 0 1-4.3.11l-1.42 1.42L27 18.79l1.42-1.42a3.18 3.18 0 0 1 .04-4.37l5.17-5.17a4.08 4.08 0 0 0 .1-5.72M22.18 16.79 7.46 31.51a2 2 0 1 1-2.82-2.83L19.35 14l-1.41-1.41L3.22 27.27a4 4 0 0 0-.68 4.8l-1.48 1.48a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l1.44-1.44a3.93 3.93 0 0 0 2.09.6 4.06 4.06 0 0 0 2.88-1.2L23.6 18.21Z"/>',
};

export const colorPickerIconName = 'color-picker';
export const colorPickerIcon: IconShapeTuple = [colorPickerIconName, renderIcon(icon)];
