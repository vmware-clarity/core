/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28 4H12a2 2 0 0 0-2 2h18v24H12v-9.8h-2V30a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/><path d="M15.12 18.46a1 1 0 1 0 1.41 1.41l5.79-5.79-5.78-5.79a1 1 0 0 0-1.41 1.41L18.5 13H4a1 1 0 0 0-1 1 1 1 0 0 0 1 1h14.5Z"/>',
  solid:
    '<path d="M28 4H12a2 2 0 0 0-2 2v7h8.5l-3.38-3.29a1 1 0 0 1 1.41-1.41l5.79 5.79-5.79 5.79a1 1 0 0 1-1.41-1.41L18.5 15H10v15a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-18 9H4a1 1 0 0 0-1 1 1 1 0 0 0 1 1h6Z"/>',
};

export const loginIconName = 'login';
export const loginIcon: IconShapeTuple = [loginIconName, renderIcon(icon)];
