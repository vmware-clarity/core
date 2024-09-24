/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23 26.5H6v2h17c.55 0 1-.45 1-1s-.45-1-1-1m6-6H6v2h23c.55 0 1-.45 1-1s-.45-1-1-1M6 8.5v2h23c.55 0 1-.45 1-1s-.45-1-1-1zm17 6H6v2h17c.55 0 1-.45 1-1s-.45-1-1-1"/>',
};

export const alignLeftIconName = 'align-left';
export const alignLeftIcon: IconShapeTuple = [alignLeftIconName, renderIcon(icon)];
