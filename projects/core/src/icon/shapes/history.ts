/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M3.998 10.26a16.09 16.09 0 0 1 14-8.26 16 16 0 1 1-10.77 27.83 1.002 1.002 0 0 1 1.35-1.48A14 14 0 1 0 5.348 12h5.45a1 1 0 1 1 0 2h-8.8V5.2a1 1 0 1 1 2 0z"/><path d="M16.998 10.83a1 1 0 0 1 2 0v7.66l5 3.39a1 1 0 0 1-1.1 1.67l-5.9-4z"/>',
};

export const historyIconName = 'history';
export const historyIcon: IconShapeTuple = [historyIconName, renderIcon(icon)];
