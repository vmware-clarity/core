/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28.54 13H7.46a1 1 0 0 1 0-2h21.08a1 1 0 0 1 0 2m-7.37 6H7.46a1 1 0 0 1 0-2h13.71a1 1 0 0 1 0 2m-7.43 6H7.46a1 1 0 0 1 0-2h6.28a1 1 0 0 1 0 2"/>',
};

export const sortByIconName = 'sort-by';
export const sortByIcon: IconShapeTuple = [sortByIconName, renderIcon(icon)];
