/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.93 9.837c-.28-2.39-1.47-4.509-3.36-5.968-3.99-3.089-9.92-2.27-13.21 1.84L3.6 22.831c-1.22 1.53-1.78 3.409-1.55 5.308A6.54 6.54 0 0 0 4.56 32.6a6.74 6.74 0 0 0 4.14 1.399c2.12 0 4.25-.95 5.7-2.759l12.23-15.224c.8-1 1.17-2.24 1.02-3.48a4.33 4.33 0 0 0-1.66-2.938c-1.95-1.51-4.85-1.12-6.46.88l-6.76 8.417a1.002 1.002 0 1 0 1.56 1.26l6.76-8.418c.93-1.15 2.58-1.4 3.68-.55.5.39.82.95.89 1.6.08.71-.13 1.41-.59 1.989L12.84 30c-1.77 2.209-4.94 2.669-7.05 1.03-.98-.76-1.6-1.86-1.74-3.11-.16-1.35.24-2.709 1.13-3.808L18.92 6.958c2.62-3.259 7.3-3.939 10.43-1.51a6.84 6.84 0 0 1 2.6 4.619c.24 1.999-.36 4.008-1.67 5.638L19.25 29.44a1.002 1.002 0 1 0 1.56 1.26l11.03-13.736c1.65-2.049 2.39-4.578 2.09-7.127"/>',
};

export const paperclipIconName = 'paperclip';
export const paperclipIcon: IconShapeTuple = [paperclipIconName, renderIcon(icon)];
