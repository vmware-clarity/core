/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 22H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h30c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1m-1 6H4v-4h28zM18 13.5l5.79-5.79a1 1 0 0 0 .3-.71 1 1 0 0 0-.3-.71.996.996 0 0 0-1.41 0L18 10.67l-4.38-4.38a.996.996 0 0 0-1.41 0 1 1 0 0 0-.3.71 1 1 0 0 0 .3.71zm4.38-1L18 16.87l-4.38-4.37a.996.996 0 1 0-1.41 1.41L18 19.7l5.79-5.79a.996.996 0 1 0-1.41-1.41"/>',
  solid:
    '<path d="M12.21 7.71 18 13.5l5.79-5.79a1 1 0 1 0-1.41-1.42L18 10.67l-4.38-4.38a1 1 0 1 0-1.41 1.42"/><path d="m18 19.7-5.79-5.79a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0L18 16.87l4.38-4.37a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41zM2 23a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>',
};

export const collapseCardIconName = 'collapse-card';
export const collapseCardIcon: IconShapeTuple = [collapseCardIconName, renderIcon(icon)];
