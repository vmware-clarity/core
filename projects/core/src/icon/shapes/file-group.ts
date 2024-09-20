/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31 34H13a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1m-17-2h16V12H14Z"/><path d="M16 16h12v2H16zm0 4h12v2H16zm0 4h12v2H16zM6 24V4h18V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1Z"/><path d="M10 28V8h18V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1Z"/>',
  solid:
    '<path d="M31 10H13a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1m-3 16H16v-2h12Zm0-4H16v-2h12Zm0-4H16v-2h12Z"/><path d="M6 24V4h18V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1Z"/><path d="M10 28V8h18V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1Z"/>',
};

export const fileGroupIconName = 'file-group';
export const fileGroupIcon: IconShapeTuple = [fileGroupIconName, renderIcon(icon)];
