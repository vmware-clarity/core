/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31 27.19a1 1 0 0 0-1-.56h-.85a11 11 0 0 1-4.23-21.02 1 1 0 0 0 .61-1 1 1 0 0 0-.67-.91 14.7 14.7 0 0 0-5-.87 15.12 15.12 0 0 0 0 30.24 14.78 14.78 0 0 0 11-4.81 1 1 0 0 0 .14-1.07m-11.11 3.93a13.12 13.12 0 0 1 0-26.24 12 12 0 0 1 2 .16 13 13 0 0 0 5.72 23.53 12.75 12.75 0 0 1-7.72 2.55"/>',
  solid:
    '<path d="M29.2 26.72a12.07 12.07 0 0 1-6.3-22.28A13.7 13.7 0 0 0 19.49 4a14 14 0 0 0 0 28 13.82 13.82 0 0 0 10.9-5.34 12 12 0 0 1-1.19.06"/>',
};

export const moonIconName = 'moon';
export const moonIcon: IconShapeTuple = [moonIconName, renderIcon(icon)];
