/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<circle cx="18" cy="26.06" r="1.33"/><path d="M18 22.61a1 1 0 0 1-1-1v-12a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1"/><path d="M18 34a16 16 0 1 1 16-16 16 16 0 0 1-16 16m0-30a14 14 0 1 0 14 14A14 14 0 0 0 18 4"/>',
  solid:
    '<path d="M18 2.1a16 16 0 1 0 16 16 16 16 0 0 0-16-16m-1.4 6.7a1.4 1.4 0 0 1 2.8 0v12a1.4 1.4 0 0 1-2.8 0ZM18 28.6a1.8 1.8 0 1 1 1.8-1.8 1.8 1.8 0 0 1-1.8 1.8"/>',
};

export const errorStandardIconName = 'error-standard';
export const errorStandardIcon: IconShapeTuple = [errorStandardIconName, renderIcon(icon)];
