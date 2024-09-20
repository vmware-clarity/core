/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31 1a1 1 0 0 0-1 1v32a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1M4 21v8a1 1 0 0 0 1 1h23V20H5a1 1 0 0 0-1 1m2 1h20v6H6Zm6-15v8a1 1 0 0 0 1 1h15V6H13a1 1 0 0 0-1 1m2 1h12v6H14Z"/>',
};

export const alignRightIconName = 'align-right';
export const alignRightIcon: IconShapeTuple = [alignRightIconName, renderIcon(icon)];
