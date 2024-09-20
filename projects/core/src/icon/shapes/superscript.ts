/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m14.43 18 6.79 8.6a1.17 1.17 0 0 1-.92 1.9 1.17 1.17 0 0 1-.92-.44l-6.44-8.13L6.47 28a1.17 1.17 0 0 1-.92.44 1.17 1.17 0 0 1-.92-1.9l6.8-8.54-6.8-8.6a1.17 1.17 0 0 1 .92-1.9 1.2 1.2 0 0 1 .96.5l6.43 8.13L19.38 8a1.17 1.17 0 0 1 .92-.44 1.17 1.17 0 0 1 .92 1.9Zm8.42-3.53 4.51-3.85a9.4 9.4 0 0 0 1.88-2 3.43 3.43 0 0 0 .59-1.86 2.27 2.27 0 0 0-.36-1.27 2.4 2.4 0 0 0-.95-.83 2.8 2.8 0 0 0-1.26-.29 3.4 3.4 0 0 0-1.83.5 5.8 5.8 0 0 0-1.49 1.42l-1-.81a5.12 5.12 0 0 1 4.36-2.37 4.36 4.36 0 0 1 2 .45 3.47 3.47 0 0 1 2 3.18A4.44 4.44 0 0 1 30.58 9a11.1 11.1 0 0 1-2.24 2.46l-3.24 2.85h6.28v1.33h-8.53Z"/>',
};

export const superscriptIconName = 'superscript';
export const superscriptIcon: IconShapeTuple = [superscriptIconName, renderIcon(icon)];
