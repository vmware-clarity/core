/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31 10V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h23a2 2 0 0 0 2-2M6 4h23v6H6Z"/><path d="M33 6h-1v6.29l-13.3 4.25a1 1 0 0 0-.7 1V19h-2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V19h-2v-.73L33.3 14a1 1 0 0 0 .7-1V7a1 1 0 0 0-1-1M20 33h-2V21h2Z"/>',
  solid:
    '<rect width="27" height="10" x="4" y="2" rx="1" ry="1"/><path d="M33 6h-1v6.24l-13.29 4.21a1 1 0 0 0-.71 1V19h-2v15a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V19h-2v-.82L33.29 14a1 1 0 0 0 .71-1V7a1 1 0 0 0-1-1"/>',
};

export const paintRollerIconName = 'paint-roller';
export const paintRollerIcon: IconShapeTuple = [paintRollerIconName, renderIcon(icon)];
