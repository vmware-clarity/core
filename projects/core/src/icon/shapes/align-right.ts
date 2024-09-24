/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12 27.25c0 .55.45 1 1 1h17v-2H13c-.55 0-1 .45-1 1m-6-6c0 .55.45 1 1 1h23v-2H7c-.55 0-1 .45-1 1m1-13c-.55 0-1 .45-1 1s.45 1 1 1h23v-2zm5 7c0 .55.45 1 1 1h17v-2H13c-.55 0-1 .45-1 1"/>',
};

export const alignRightIconName = 'align-right';
export const alignRightIcon: IconShapeTuple = [alignRightIconName, renderIcon(icon)];
