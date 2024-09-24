/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M7 6h16v9.8h2V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2H7Z"/><path d="M28.16 17.28a1 1 0 0 0-1.41 1.41L30.13 22h-14.5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h14.5l-3.38 3.46a1 1 0 1 0 1.41 1.41l5.84-5.8Z"/>',
  solid:
    '<path d="M23 4H7a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6h-9.37a1 1 0 0 1-1-1 1 1 0 0 1 1-1H25V6a2 2 0 0 0-2-2m5.16 13.28a1 1 0 0 0-1.41 1.41L30.13 22H25v2h5.13l-3.38 3.46a1 1 0 1 0 1.41 1.41l5.84-5.8Z"/>',
};

export const logoutIconName = 'logout';
export const logoutIcon: IconShapeTuple = [logoutIconName, renderIcon(icon)];
