/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27 26H9c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1M5 10h26c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1m22 4H9c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1m4 6H5c-.55 0-1 .45-1 1s.45 1 1 1h26c.55 0 1-.45 1-1s-.45-1-1-1"/>',
};

export const alignCenterIconName = 'align-center';
export const alignCenterIcon: IconShapeTuple = [alignCenterIconName, renderIcon(icon)];
