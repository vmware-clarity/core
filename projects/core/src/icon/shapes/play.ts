/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m31.45 17.11-26-13c-.31-.16-.68-.14-.98.04-.29.18-.47.5-.47.85v26a1 1 0 0 0 1 1c.15 0 .31-.04.45-.11l26-13A1 1 0 0 0 32 18a1 1 0 0 0-.55-.89M6 29.38V6.62L28.76 18z"/>',
  solid:
    '<path d="m31.45 17.11-26-13c-.31-.16-.68-.14-.98.04-.29.18-.47.5-.47.85v26a1 1 0 0 0 1 1c.15 0 .31-.04.45-.11l26-13A1 1 0 0 0 32 18a1 1 0 0 0-.55-.89"/>',
};

export const playIconName = 'play';
export const playIcon: IconShapeTuple = [playIconName, renderIcon(icon)];
