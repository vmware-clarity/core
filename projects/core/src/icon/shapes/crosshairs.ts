/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3m15-4h-4.05c-.48-5.27-4.68-9.47-9.95-9.95V3c0-.55-.45-1-1-1s-1 .45-1 1v4.05c-5.27.48-9.47 4.68-9.95 9.95H3c-.55 0-1 .45-1 1s.45 1 1 1h4.05c.48 5.27 4.68 9.47 9.95 9.95V33c0 .55.45 1 1 1s1-.45 1-1v-4.05c5.27-.48 9.47-4.68 9.95-9.95H33c.55 0 1-.45 1-1s-.45-1-1-1M18 27c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9"/>',
};

export const crosshairsIconName = 'crosshairs';
export const crosshairsIcon: IconShapeTuple = [crosshairsIconName, renderIcon(icon)];
