/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14"/><path d="M24 17H12a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2"/>',

  solid: '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m6 17.5H12a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 0 3"/>',
};

export const minusCircleIconName = 'minus-circle';
export const minusCircleIcon: IconShapeTuple = [minusCircleIconName, renderIcon(icon)];
