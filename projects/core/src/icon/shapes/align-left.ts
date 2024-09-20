/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5 1a1 1 0 0 0-1 1v32a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1m26 19H8v10h23a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-1 8H10v-6h20Zm-6-13V7a1 1 0 0 0-1-1H8v10h15a1 1 0 0 0 1-1m-2-1H10V8h12Z"/>',
};

export const alignLeftIconName = 'align-left';
export const alignLeftIcon: IconShapeTuple = [alignLeftIconName, renderIcon(icon)];
