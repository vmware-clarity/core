/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M25 12V9.05a7 7 0 1 0-14 0v7a1 1 0 0 0 2 0V14h8v-2h-8V9.05a5 5 0 1 1 10 0V16a1 1 0 1 0 2 0v-2h5v18H6V14h3v-2H4v20.09A1.91 1.91 0 0 0 5.91 34h24.18A1.91 1.91 0 0 0 32 32.09V12Z"/>',
  solid:
    '<path d="M13 9.22a5 5 0 1 1 10 0V12h2V9.22a7 7 0 1 0-14 0V12h2ZM25 12v3.1a1 1 0 1 1-2 0V12H13v3.1a1 1 0 0 1-2 0V12H4v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12Z"/>',
};

export const shoppingBagIconName = 'shopping-bag';
export const shoppingBagIcon: IconShapeTuple = [shoppingBagIconName, renderIcon(icon)];
