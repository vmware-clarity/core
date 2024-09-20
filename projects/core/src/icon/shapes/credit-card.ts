/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 2v12H4V8ZM4 28v-4h28v4Z"/>',
  solid:
    '<rect width="22" height="30" x="7" y="3" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" rx=".96" ry=".96" transform="rotate(90 18 18)"/><path d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 18H4v-4h28Z"/>',
};

export const creditCardIconName = 'credit-card';
export const creditCardIcon: IconShapeTuple = [creditCardIconName, renderIcon(icon)];
