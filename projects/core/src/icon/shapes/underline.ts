/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M26 17.96c0 5.92-3.21 9-8.01 9s-8-3.08-7.99-8.83V8.15c0-.64.49-1.15 1.09-1.15s1.09.51 1.09 1.15v9.84c0 4.38 2.32 6.85 5.87 6.85s5.79-2.27 5.79-6.71V8.15c0-.64.49-1.15 1.09-1.15s1.09.51 1.09 1.15v9.81zM4 29.9c0-.57.44-1.05 1-1.1h26c.57.05 1 .53 1 1.1s-.44 1.05-1 1.1H5a1.1 1.1 0 0 1-1-1.1" clip-rule="evenodd"/>',
};

export const underlineIconName = 'underline';
export const underlineIcon: IconShapeTuple = [underlineIconName, renderIcon(icon)];
