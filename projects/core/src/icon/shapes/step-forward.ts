/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5 32.23a2 2 0 0 1-2-2V5.77a2 2 0 0 1 3.17-1.63l17.06 12.24a2 2 0 0 1 0 3.25L6.17 31.86a2 2 0 0 1-1.17.37M5 5.77v24.46L22.07 18ZM31 32h-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M28 6v24h3V6Z"/>',
  solid:
    '<path d="M5 31.9a2 2 0 0 1-2-2V5.44a2 2 0 0 1 3.12-1.63L23.18 16a2 2 0 0 1 0 3.25L6.12 31.52A2 2 0 0 1 5 31.9"/><rect width="7" height="28" x="25.95" y="3.67" rx="2" ry="2"/>',
};

export const stepForwardIconName = 'step-forward';
export const stepForwardIcon: IconShapeTuple = [stepForwardIconName, renderIcon(icon)];
