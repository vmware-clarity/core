/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 29H3a1 1 0 1 1 0-2h30a1 1 0 1 1 0 2m0-4h-.62a8.11 8.11 0 0 1-8-6.67C23.62 14.44 21.89 7.94 18 7.94s-5.69 6.51-6.38 10.39a8.11 8.11 0 0 1-8 6.65H3a1 1 0 1 1 0-2h.6a6.11 6.11 0 0 0 6-4.98c1.41-7.88 4.3-12 8.35-12s6.93 4.16 8.33 12a6.11 6.11 0 0 0 6 5H33a1 1 0 0 1 0 2"/>',
};

export const bellCurveIconName = 'bell-curve';
export const bellCurveIcon: IconShapeTuple = [bellCurveIconName, renderIcon(icon)];
