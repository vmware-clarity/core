/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M25 12.016V9.06a7.01 7.01 0 0 0-3.5-6.072 6.99 6.99 0 0 0-7 0A7.01 7.01 0 0 0 11 9.061v7.01a1 1 0 1 0 2 0V14.02h8v-2.003h-8V9.06a5.004 5.004 0 0 1 5-5.008c2.761 0 5 2.242 5 5.008v6.96a1 1 0 1 0 2 0v-2h5v18.028H6V14.019h3v-2.003H4v20.121c0 1.056.855 1.913 1.91 1.913h24.18c1.055 0 1.91-.856 1.91-1.913V12.016z"/>',
  solid:
    '<path d="M18 4.234c-2.761 0-5 2.254-5 5.034v2.8h-2v-2.8a7.06 7.06 0 0 1 3.5-6.104 6.96 6.96 0 0 1 7 0A7.06 7.06 0 0 1 25 9.268v2.8h-2v-2.8c0-2.78-2.239-5.034-5-5.034"/><path d="M25 15.19v-3.122h7v20.138a2.007 2.007 0 0 1-2 2.014H6c-1.105 0-2-.902-2-2.014V12.068h7v3.121c0 .556.448 1.007 1 1.007s1-.45 1-1.007v-3.121h10v3.121c0 .556.448 1.007 1 1.007s1-.45 1-1.007"/>',
};

export const shoppingBagIconName = 'shopping-bag';
export const shoppingBagIcon: IconShapeTuple = [shoppingBagIconName, renderIcon(icon)];
