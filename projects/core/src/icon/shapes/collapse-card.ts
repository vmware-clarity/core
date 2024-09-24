/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 21H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6H4v-4h28Zm-14-6.78 5.65-5.65a.81.81 0 0 0 0-1.14.8.8 0 0 0-1.13 0L18 18l-4.52-4.52a.8.8 0 0 0-1.13 0 .81.81 0 0 0 0 1.14Z"/><path d="m18 14.22 5.65-5.65a.81.81 0 0 0 0-1.14.8.8 0 0 0-1.13 0L18 12l-4.52-4.57a.8.8 0 0 0-1.13 0 .81.81 0 0 0 0 1.14Z"/>',
  solid:
    '<rect width="32" height="8" x="2" y="22" rx="1" ry="1"/><path d="m18 20.7-5.79-5.79a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0L18 17.87l4.38-4.37a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41Z"/><path d="m18 14.5-5.79-5.79a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0L18 11.67l4.38-4.38a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42Z"/>',
};

export const collapseCardIconName = 'collapse-card';
export const collapseCardIcon: IconShapeTuple = [collapseCardIconName, renderIcon(icon)];
