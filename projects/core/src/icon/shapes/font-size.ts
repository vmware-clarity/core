/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21 9.08A1.13 1.13 0 0 0 19.86 8H4.62a1.1 1.1 0 1 0 0 2.19H11V27a1.09 1.09 0 0 0 2.17 0V10.19h6.69A1.14 1.14 0 0 0 21 9.08M30.67 15h-9.52a1.1 1.1 0 1 0 0 2.19H25v9.31a1.09 1.09 0 0 0 2.17 0v-9.27h3.54a1.1 1.1 0 1 0 0-2.19Z"/>',
};

export const fontSizeIconName = 'font-size';
export const fontSizeIcon: IconShapeTuple = [fontSizeIconName, renderIcon(icon)];
