/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M17.77 31.92a2 2 0 0 1-.86-.2 1.81 1.81 0 0 1-.91-1.79v-6.7L5.24 31.5a1.94 1.94 0 0 1-2.06.22 2 2 0 0 1-1.11-1.79v-24a2 2 0 0 1 1.11-1.81 1.93 1.93 0 0 1 2.06.22L16 12.61v-6.7a1.81 1.81 0 0 1 .91-1.79 1.93 1.93 0 0 1 2.09.22l15.32 12a2 2 0 0 1 0 3.15L19 31.5a2 2 0 0 1-1.23.42m0-12.8v10.81l15.26-12-15.32-12 .06 10.81L4 5.91v24Z"/>',
  solid:
    '<path d="M17.71 32a2 2 0 0 1-.86-.2A1.77 1.77 0 0 1 16 30v-6.7L5.17 31.58a1.94 1.94 0 0 1-2.06.22A2 2 0 0 1 2 30V6a2 2 0 0 1 1.11-1.8 1.93 1.93 0 0 1 2.06.22L16 12.69V6a1.77 1.77 0 0 1 .85-1.79 1.93 1.93 0 0 1 2.06.22l15.32 12a2 2 0 0 1 0 3.15l-15.32 12a2 2 0 0 1-1.2.42"/>',
};

export const fastForwardIconName = 'fast-forward';
export const fastForwardIcon: IconShapeTuple = [fastForwardIconName, renderIcon(icon)];
