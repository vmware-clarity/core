/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<circle cx="11.49" cy="17.5" r="1.5"/><path d="M33.48 9.29a1 1 0 0 0-1 0c-3.37 2-5.91 5.81-6.9 7.45L24.85 18l-1 1.62c-1.76 2.49-5.1 6.36-8.79 6.36-4.65 0-8.75-6.15-9.84-7.94 1.09-1.79 5.18-7.94 9.84-7.94 3.54 0 6.77 3.58 8.58 6.07l.28-.48s.36-.51.93-1.25c-2.13-2.8-5.67-6.38-9.85-6.38-6.59 0-11.67 9.07-11.88 9.46l-.23.48.27.48c.21.39 5.29 9.46 11.88 9.46 5.06 0 9.22-5.34 11-8C26 20 27.18 18 27.18 18l.07-.11a18 18 0 0 1 1.88-2.75 20.3 20.3 0 0 1 2.86-3v11.74a21 21 0 0 1-3.61-4l-.16.26-1 1.59a18.7 18.7 0 0 0 5.21 4.95 1 1 0 0 0 .5.14 1.1 1.1 0 0 0 .5-.13 1 1 0 0 0 .5-.87V10.16a1 1 0 0 0-.45-.87"/>',
};

export const fishIconName = 'fish';
export const fishIcon: IconShapeTuple = [fishIconName, renderIcon(icon)];
