/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.06 11h-24a1 1 0 1 0 0 2H14v9.65l-3.75 10a1 1 0 0 0 .58 1.29 1.1 1.1 0 0 0 .36.06 1 1 0 0 0 .93-.65l3.5-9.35h4.76l3.52 9.35a1 1 0 0 0 .93.65 1.1 1.1 0 0 0 .36-.06 1 1 0 0 0 .58-1.29L22 22.68V13h8.06a1 1 0 1 0 0-2M20 22h-4v-9h4Zm-2-12a4 4 0 1 0-4-4 4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2"/>',
  solid:
    '<circle cx="17.96" cy="5" r="3"/><path d="M30 10H6a1 1 0 0 0 0 2h8v8.36l-3.89 12.81a1 1 0 0 0 .66 1.25 1.6 1.6 0 0 0 .29 0 1 1 0 0 0 1-.71l3.29-10.84h5.38L24 33.75a1 1 0 0 0 1 .71 1.6 1.6 0 0 0 .29 0 1 1 0 0 0 .66-1.25L22 20.4V12h8a1 1 0 0 0 0-2"/>',
};

export const accessibility2IconName = 'accessibility-2';
export const accessibility2Icon: IconShapeTuple = [accessibility2IconName, renderIcon(icon)];
