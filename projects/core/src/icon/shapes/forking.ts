/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m18.37 21.71-8.07-4.83a1 1 0 0 1-.47-.83V6.27l2.24 3A1 1 0 0 0 13.66 8l-4-5.33A1 1 0 0 0 8 2.69L4 8a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.39l2.23-3v9.78a3 3 0 0 0 1.45 2.61l8.06 4.82a1.37 1.37 0 0 1 .66 1.17v8.83a1 1 0 0 0 2 0v-8.83a3.37 3.37 0 0 0-1.63-2.88M31.66 8l-4-5.33a1 1 0 0 0-1.59 0L22 8a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.39l2.32-3.07v9.89a1 1 0 0 1-.47.83l-.11.08-4.87 3.88a5.5 5.5 0 0 1 1.11 1.68l5-4a3 3 0 0 0 1.38-2.51V6.38l2.15 2.85A1 1 0 1 0 31.66 8"/>',
};

export const forkingIconName = 'forking';
export const forkingIcon: IconShapeTuple = [forkingIconName, renderIcon(icon)];
