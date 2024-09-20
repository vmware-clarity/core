/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 29a11 11 0 1 1 11-11 11 11 0 0 1-11 11m0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9"/><path d="M18 23a5 5 0 1 1 5-5 5 5 0 0 1-5 5m0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3m0-6a1 1 0 0 1-1-1V2.8a1 1 0 0 1 2 0V8a1 1 0 0 1-1 1m0 25a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1M8 19H3.17a1 1 0 0 1 0-2H8a1 1 0 0 1 0 2m25.1 0H28a1 1 0 0 1 0-2h5.1a1 1 0 0 1 0 2"/>',
};

export const crosshairsIconName = 'crosshairs';
export const crosshairsIcon: IconShapeTuple = [crosshairsIconName, renderIcon(icon)];
