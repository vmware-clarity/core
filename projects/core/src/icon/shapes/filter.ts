/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 4H3a1 1 0 0 0-1 1v1.67a1.8 1.8 0 0 0 .53 1.27L14 19.58v10.2l2 .76V19a1 1 0 0 0-.29-.71L4 6.59V6h28v.61L20.33 18.29A1 1 0 0 0 20 19v13.21l2 .79V19.5L33.47 8A1.8 1.8 0 0 0 34 6.7V5a1 1 0 0 0-1-1"/>',

  solid:
    '<path d="M22 33V19.5L33.47 8A1.8 1.8 0 0 0 34 6.7V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1.67a1.8 1.8 0 0 0 .53 1.27L14 19.58v10.2Z"/><path d="M33.48 4h-31a.52.52 0 0 0-.48.52v1.72a1.33 1.33 0 0 0 .39.95l12 12v10l7.25 3.61V19.17l12-12a1.35 1.35 0 0 0 .36-.91V4.52a.52.52 0 0 0-.52-.52"/>',
};

export const filterIconName = 'filter';
export const filterIcon: IconShapeTuple = [filterIconName, renderIcon(icon)];
