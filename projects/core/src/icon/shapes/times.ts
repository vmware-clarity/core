/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m19.47 17.973 8.29-8.268a.995.995 0 0 0-.053-1.354A1 1 0 0 0 26.35 8.3l-8.29 8.268L9.77 8.29a1.006 1.006 0 0 0-1.42 0 1 1 0 0 0 0 1.416l8.3 8.268-8.3 8.268a.996.996 0 0 0 .416 1.727c.365.088.75-.036.994-.32l8.3-8.268 8.29 8.267a1 1 0 0 0 1.357-.052.995.995 0 0 0 .053-1.354z"/>',
};

export const timesIconName = 'times';
export const timesIcon: IconShapeTuple = [timesIconName, renderIcon(icon)];
