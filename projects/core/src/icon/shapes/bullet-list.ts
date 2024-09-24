/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m25 1H10.02v2H31c.55 0 1-.45 1-1s-.45-1-1-1m0-8H10.02v2H31c.55 0 1-.45 1-1s-.45-1-1-1m.98-7c0-.55-.45-1-1-1H10v2h20.98c.55 0 1-.45 1-1"/>',
};

export const bulletListIconName = 'bullet-list';
export const bulletListIcon: IconShapeTuple = [bulletListIconName, renderIcon(icon)];
