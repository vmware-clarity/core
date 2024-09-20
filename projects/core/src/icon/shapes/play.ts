/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M8.07 31.6A2.07 2.07 0 0 1 6 29.53V6.32a2.07 2.07 0 0 1 3-1.85l23.21 11.61a2.07 2.07 0 0 1 0 3.7L9 31.38a2.06 2.06 0 0 1-.93.22m0-25.34L8 6.32v23.21l.1.06L31.31 18a.06.06 0 0 0 0-.06Z"/>',
  solid:
    '<path d="M32.16 16.08 8.94 4.47A2.07 2.07 0 0 0 6 6.32v23.21a2.06 2.06 0 0 0 3 1.85l23.16-11.61a2.07 2.07 0 0 0 0-3.7Z"/>',
};

export const playIconName = 'play';
export const playIcon: IconShapeTuple = [playIconName, renderIcon(icon)];
