/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32.84 15.72a1 1 0 1 0-2 .29 13 13 0 0 1 .16 1.93A13 13 0 0 1 8.7 27h5.36a1 1 0 0 0 0-2h-9v9a1 1 0 1 0 2 0v-5.8a15 15 0 0 0 25.78-12.48M30.06 1A1.05 1.05 0 0 0 29 2v5.83A14.94 14.94 0 0 0 3 17.94a15 15 0 0 0 .2 2.48 1 1 0 0 0 1 .84h.16a1 1 0 0 0 .82-1.15A13 13 0 0 1 5 17.94a13 13 0 0 1 13-13A12.87 12.87 0 0 1 27.44 9h-5.38a1 1 0 0 0 0 2H31V2a1 1 0 0 0-.94-1"/>',
};

export const syncIconName = 'sync';
export const syncIcon: IconShapeTuple = [syncIconName, renderIcon(icon)];
