/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 9.83a1 1 0 0 0-1 1v8.72l5.9 4a1 1 0 0 0 1.1-1.67l-5-3.39v-7.66a1 1 0 0 0-1-1"/><path d="M18 2a16.09 16.09 0 0 0-14 8.26V5.2a1 1 0 0 0-2 0V14h8.8a1 1 0 0 0 0-2H5.35a14 14 0 1 1 3.23 16.35 1 1 0 0 0-1.35 1.48A16 16 0 1 0 18 2"/>',
};

export const historyIconName = 'history';
export const historyIcon: IconShapeTuple = [historyIconName, renderIcon(icon)];
