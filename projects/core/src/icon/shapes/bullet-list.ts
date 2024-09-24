/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<circle cx="5.21" cy="9.17" r="2"/><circle cx="5.21" cy="17.17" r="2"/><circle cx="5.21" cy="25.17" r="2"/><path d="M32.42 9a1 1 0 0 0-1-1H10v2h21.42a1 1 0 0 0 1-1m-1 7H10v2h21.42a1 1 0 0 0 0-2m0 8H10v2h21.42a1 1 0 0 0 0-2"/>',
};

export const bulletListIconName = 'bullet-list';
export const bulletListIcon: IconShapeTuple = [bulletListIconName, renderIcon(icon)];
