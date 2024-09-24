/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28 8h-3.86a7.5 7.5 0 0 0-1.54-2H28a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2h7.55a5.42 5.42 0 0 1 4.2 2H10a1 1 0 0 0 0 2h12.79a5.5 5.5 0 0 1 .21 1.51A5.48 5.48 0 0 1 17.55 17h-6.41a1 1 0 0 0-.75 1.66L22.06 32a1 1 0 1 0 1.5-1.32L13.35 19h4.21a7.51 7.51 0 0 0 7.3-9H28a1 1 0 0 0 0-2"/>',
  solid:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m5.88 9H26a1 1 0 0 1 0 2h-1.74v.19a6.09 6.09 0 0 1-6 6.2h-2l6.82 8.06a1.25 1.25 0 0 1-1.91 1.62l-8.54-10.13a1.25 1.25 0 0 1 1-2.06h4.71a3.59 3.59 0 0 0 3.48-3.69v-.2h-9a1 1 0 0 1 0-2h8.32a3.41 3.41 0 0 0-2.78-1.5h-5.61a1.25 1.25 0 0 1 0-2.5H26a1 1 0 0 1 0 2h-3.32a6.2 6.2 0 0 1 1.2 2.01"/>',
};

export const rupeeIconName = 'rupee';
export const rupeeIcon: IconShapeTuple = [rupeeIconName, renderIcon(icon)];
