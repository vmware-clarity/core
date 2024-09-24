/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M6 4h18V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1zm4 4h18V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1zm18 16H16v2h12zm-12-4h12v2H16zm-3 14h18a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H13a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1m1-2h16V12H14zm14-16H16v2h12z" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M6 4v22H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1zm4 4v22H9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1zm21 2H13a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1M16 26h12v-2H16zm12-4H16v-2h12zm-12-4h12v-2H16z" clip-rule="evenodd"/>',
};

export const fileGroupIconName = 'file-group';
export const fileGroupIcon: IconShapeTuple = [fileGroupIconName, renderIcon(icon)];
