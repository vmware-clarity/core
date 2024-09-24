/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.43 16H10v2h21.43a1 1 0 0 0 0-2m0 8H10v2h21.43a1 1 0 0 0 0-2M15.45 10h16a1 1 0 0 0 0-2h-14Zm2.05-6.58a1.09 1.09 0 0 0-1.55 0l-8.06 8.06-3.38-3.64a1.1 1.1 0 1 0-1.61 1.5l4.94 5.3L17.5 5a1.1 1.1 0 0 0 0-1.58"/>',
};

export const checkboxListIconName = 'checkbox-list';
export const checkboxListIcon: IconShapeTuple = [checkboxListIconName, renderIcon(icon)];
