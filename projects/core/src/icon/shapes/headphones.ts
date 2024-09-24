/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 3A14.27 14.27 0 0 0 4 17.5V31h5.2a2.74 2.74 0 0 0 2.8-2.67v-6.66A2.74 2.74 0 0 0 9.2 19H6v-1.5A12.27 12.27 0 0 1 18 5a12.27 12.27 0 0 1 12 12.5V19h-3.2a2.74 2.74 0 0 0-2.8 2.67v6.67A2.74 2.74 0 0 0 26.8 31H32V17.5A14.27 14.27 0 0 0 18 3M9.2 21a.75.75 0 0 1 .8.67v6.67a.75.75 0 0 1-.8.67H6V21ZM26 28.33v-6.66a.75.75 0 0 1 .8-.67H30v8h-3.2a.75.75 0 0 1-.8-.67"/>',
  solid:
    '<path d="M18 3A14.27 14.27 0 0 0 4 17.5V31h4.2a1.74 1.74 0 0 0 1.8-1.67v-6.66A1.74 1.74 0 0 0 8.2 21H6v-3.5A12.27 12.27 0 0 1 18 5a12.27 12.27 0 0 1 12 12.5V21h-2.2a1.74 1.74 0 0 0-1.8 1.67v6.67A1.74 1.74 0 0 0 27.8 31H32V17.5A14.27 14.27 0 0 0 18 3"/>',
};

export const headphonesIconName = 'headphones';
export const headphonesIcon: IconShapeTuple = [headphonesIconName, renderIcon(icon)];
