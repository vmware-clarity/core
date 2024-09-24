/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 28.04H3c-.55 0-1 .45-1 1s.45 1 1 1h30c.55 0 1-.45 1-1s-.45-1-1-1m-30-2h.6c3.96 0 7.33-2.8 8.02-6.65C12.68 13.48 14.18 8 18 8s5.31 5.46 6.35 11.37c.68 3.87 4.06 6.67 8.02 6.67h.62c.55 0 1-.45 1-1s-.45-1-1-1h-.62c-2.99 0-5.54-2.11-6.06-5.02C25.51 14.47 24.01 6 17.99 6s-7.54 8.48-8.35 13.03c-.52 2.9-3.06 5-6.05 5h-.6c-.55 0-1 .45-1 1s.45 1 1 1z"/>',
};

export const bellCurveIconName = 'bell-curve';
export const bellCurveIcon: IconShapeTuple = [bellCurveIconName, renderIcon(icon)];
