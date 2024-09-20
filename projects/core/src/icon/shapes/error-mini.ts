/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 4a14 14 0 1 0 14 14A14 14 0 0 0 18 4m0 24a10 10 0 1 1 10-10 10 10 0 0 1-10 10"/><path d="M16 12h4v6h-4zm0 8.8h4V24h-4z"/>',
  solid: '<path d="M18 4a14 14 0 1 0 14 14A14 14 0 0 0 18 4m2 20h-4v-4h4Zm0-8h-4V8h4Z"/>',
};

export const errorMiniIconName = 'error-mini';
export const errorMiniIcon: IconShapeTuple = [errorMiniIconName, renderIcon(icon)];
