/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 9H4a1 1 0 0 1 0-2h28a1 1 0 1 1 0 2m0 10H4a1 1 0 1 1 0-2h28a1 1 0 1 1 0 2M4 29h28a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2"/>',
};

export const barsIconName = 'bars';
export const barsIcon: IconShapeTuple = [barsIconName, renderIcon(icon)];
