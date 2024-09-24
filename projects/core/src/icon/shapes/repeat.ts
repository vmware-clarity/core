/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M25.272 20.3c-.37.39-.37 1.02 0 1.41l3.11 3.293H8.997A3.01 3.01 0 0 1 6 22v-6.974l-1.99-2.091s-.01.05-.01.07v9.006a5 5 0 0 0 4.998 5.003h19.383l-3.109 3.292c-.37.39-.37 1.02 0 1.411.18.2.43.29.67.29s.48-.1.67-.29L32 26.004l-5.388-5.714a.913.913 0 0 0-1.34 0zm1.73-11.297H7.609l3.109-3.292c.37-.39.37-1.02 0-1.411a.913.913 0 0 0-1.34 0L4 10.004l5.388 5.713c.18.2.43.29.67.29s.48-.1.67-.29c.37-.39.37-1.02 0-1.41l-3.11-3.293h19.384A3.01 3.01 0 0 1 30 14.016v6.974l1.989 2.102s.01-.05.01-.07v-9.006a5.003 5.003 0 0 0-4.998-5.003z"/>',
};

export const repeatIconName = 'repeat';
export const repeatIcon: IconShapeTuple = [repeatIconName, renderIcon(icon)];
