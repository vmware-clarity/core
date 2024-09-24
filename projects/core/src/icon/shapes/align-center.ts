/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31 20H19v-4h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-6V2a1 1 0 0 0-2 0v4h-6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6v4H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12v4a1 1 0 0 0 2 0v-4h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-19-6V8h12v6Zm18 14H6v-6h24Z"/>',
};

export const alignCenterIconName = 'align-center';
export const alignCenterIcon: IconShapeTuple = [alignCenterIconName, renderIcon(icon)];
