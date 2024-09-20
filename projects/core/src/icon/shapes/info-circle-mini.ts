/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 4a14 14 0 1 0 14 14A14 14 0 0 0 18 4m0 24a10 10 0 1 1 10-10 10 10 0 0 1-10 10"/><path d="M16 18h4v6h-4zm0-6h4v3.2h-4z"/>',
  solid: '<path d="M18 4a14 14 0 1 0 14 14A14 14 0 0 0 18 4m2 22h-4V16h4Zm0-14h-4V8h4Z"/>',
};

export const infoCircleMiniIconName = 'info-circle-mini';
export const infoCircleMiniIcon: IconShapeTuple = [infoCircleMiniIconName, renderIcon(icon)];
