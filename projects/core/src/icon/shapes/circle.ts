/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M4 18c0-7.732 6.268-14 14-14s14 6.268 14 14-6.268 14-14 14S4 25.732 4 18m2 0c0 6.627 5.373 12 12 12a12 12 0 0 0 12-12c0-6.627-5.373-12-12-12S6 11.373 6 18" clip-rule="evenodd"/>',
  solid:
    '<path d="M18 4C10.268 4 4 10.268 4 18s6.268 14 14 14 14-6.268 14-14S25.732 4 18 4"/>',
};

export const circleIconName = 'circle';
export const circleIcon: IconShapeTuple = [circleIconName, renderIcon(icon)];
