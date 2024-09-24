/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29.39 2.08a1 1 0 0 0-1.09.2c-.11.11-2.76 2.53-9.01.65-4.25-1.28-7.53-.5-9.29-.02V5c1.23-.4 4.4-1.45 8.71-.15 4.55 1.37 7.58.71 9.29-.06v11.74c-.94.69-3.95 2.42-8.63.54-3.75-1.5-7.44-.65-9.37-.15V19c1.42-.42 5.03-1.51 8.63-.07 1.81.72 3.42.99 4.82.99 3.89 0 6.12-2.08 6.24-2.2.2-.19.31-.45.31-.72V3c0-.4-.24-.76-.61-.92M7 2c-.55 0-1 .45-1 1v30c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1"/>',
  solid:
    '<path d="M7 2c-.55 0-1 .45-1 1v30c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1m22.39.08a1 1 0 0 0-1.09.2c-.11.11-2.76 2.53-9.01.65-4.25-1.28-7.53-.5-9.29-.02V19c1.42-.42 5.03-1.51 8.63-.07 1.81.72 3.42.99 4.82.99 3.89 0 6.12-2.08 6.24-2.2.2-.19.31-.45.31-.72V2.99c0-.4-.24-.76-.61-.92z"/>',
};

export const flagIconName = 'flag';
export const flagIcon: IconShapeTuple = [flagIconName, renderIcon(icon)];
