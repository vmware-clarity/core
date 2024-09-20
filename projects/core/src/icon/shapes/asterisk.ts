/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m28.89 20.91-5-2.91 4.87-2.86a3.1 3.1 0 0 0 1.14-1.08 3 3 0 0 0-4.09-4.15L21 12.76V7a3 3 0 0 0-6 0v5.76l-4.85-2.85a3 3 0 1 0-3 5.18l5 2.91-4.95 2.86a3.1 3.1 0 0 0-1.14 1.08 3 3 0 0 0 4.09 4.14L15 23.24v5.66a3 3 0 0 0 2 2.94A3 3 0 0 0 21 29v-5.76l4.85 2.85a3 3 0 1 0 3-5.18ZM28.24 24a1 1 0 0 1-1.37.36L19 19.75V29a1 1 0 0 1-2 0v-9.25l-7.87 4.61a1 1 0 0 1-1-1.72L16 18l-7.9-4.64a1 1 0 1 1 1-1.72l7.9 4.61V7a1 1 0 0 1 2 0v9.25l7.87-4.62a1 1 0 0 1 1 1.72L20 18l7.9 4.64a1 1 0 0 1 .34 1.36"/>',
  solid:
    '<path d="m28.89 20.91-5-2.91 4.87-2.86a3.1 3.1 0 0 0 1.14-1.08 3 3 0 0 0-4.09-4.15L21 12.76V7a3 3 0 0 0-6 0v5.76l-4.85-2.85a3 3 0 1 0-3 5.18l5 2.91-4.95 2.86a3.1 3.1 0 0 0-1.14 1.08 3 3 0 0 0 4.09 4.14L15 23.24v5.66a3 3 0 0 0 2 2.94A3 3 0 0 0 21 29v-5.76l4.85 2.85a3 3 0 1 0 3-5.18Z"/>',
};

export const asteriskIconName = 'asterisk';
export const asteriskIcon: IconShapeTuple = [asteriskIconName, renderIcon(icon)];
