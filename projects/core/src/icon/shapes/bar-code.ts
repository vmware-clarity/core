/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5 7a1 1 0 0 0-1 1v22a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v22a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1"/>',
};

export const barCodeIconName = 'bar-code';
export const barCodeIcon: IconShapeTuple = [barCodeIconName, renderIcon(icon)];
