/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<circle cx="17.58" cy="26.23" r="1.4"/><path d="M24.7 13a5.18 5.18 0 0 0-2.16-3.56 7.26 7.26 0 0 0-5.71-1.09A11.34 11.34 0 0 0 12 10.44 1 1 0 1 0 13.26 12a9.3 9.3 0 0 1 3.94-1.72 5.3 5.3 0 0 1 4.16.74 3.2 3.2 0 0 1 1.35 2.19c.33 2.69-3.19 3.75-5.32 4.14l-.82.15v4.36a1 1 0 0 0 2 0v-2.69c6.04-1.38 6.31-4.76 6.13-6.17"/>',
};

export const unknownStatusIconName = 'unknown-status';
export const unknownStatusIcon: IconShapeTuple = [unknownStatusIconName, renderIcon(icon)];
