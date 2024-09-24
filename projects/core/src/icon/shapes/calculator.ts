/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-2.33 6H12v3.67h-2V7a1 1 0 0 1 1-1h14.67zM18 16h-2v2h4v-4h-2zm-2 6h2v-2h2v4h-4zm-4 4v2h-2v2h4v-4zm4 2h2v-2h2v4h-4zm6 0h2v-2h2v4h-4zm2-6h-2v2h4v-4h-2zm-14 2v-2h2v-2h2v4zm12-8h2v-2h2v4h-4zm-10-2v2h-2v2h4v-4zM8 4v28h20V4z" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M12 28h-2v-2h2zm-2-6h2v-2h-2zm2-6h-2v-2h2zm5 12h2v-2h-2zm2-6h-2v-2h2zm-2-6h2v-2h-2zm9 12h-2v-2h2zm-2-6h2v-2h-2zm2-6h-2v-2h2zM10 9h16V5H10z" clip-rule="evenodd"/>',
};

export const calculatorIconName = 'calculator';
export const calculatorIcon: IconShapeTuple = [calculatorIconName, renderIcon(icon)];
