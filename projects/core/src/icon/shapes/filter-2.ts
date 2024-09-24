/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 11H3a1 1 0 1 0 0 2h30a1 1 0 1 0 0-2m-5 6H8a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2m-15 6h10a1 1 0 1 1 0 2H13a1 1 0 1 1 0-2"/>',
};

export const filter2IconName = 'filter-2';
export const filter2Icon: IconShapeTuple = [filter2IconName, renderIcon(icon)];
