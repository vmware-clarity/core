/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M8 32V4h20v28Z"/><path d="M12 8h13.67V6H11a1 1 0 0 0-1 1v4.67h2Zm0 8h-2v2h4v-4h-2zm12 0h-2v2h4v-4h-2zm-6 0h-2v2h4v-4h-2zm-6 6h-2v2h4v-4h-2zm12 0h-2v2h4v-4h-2zm-6 0h-2v2h4v-4h-2zm-6 6h-2v2h4v-4h-2zm12 0h-2v2h4v-4h-2zm-6 0h-2v2h4v-4h-2z"/>',
  solid:
    '<path d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M12 28h-2v-2h2Zm0-6h-2v-2h2Zm0-6h-2v-2h2Zm7 12h-2v-2h2Zm0-6h-2v-2h2Zm0-6h-2v-2h2Zm7 12h-2v-2h2Zm0-6h-2v-2h2Zm0-6h-2v-2h2Zm0-7H10V5h16Z"/>',
};

export const calculatorIconName = 'calculator';
export const calculatorIcon: IconShapeTuple = [calculatorIconName, renderIcon(icon)];
