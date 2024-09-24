/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34 17h-4v-6a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v6h-4V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v12H2a1 1 0 0 0 0 2h4v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V19h4v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6h4a1 1 0 0 0 0-2M14 30H8V6h6Zm14-6h-6V12h6Z"/>',
};

export const alignMiddleIconName = 'align-middle';
export const alignMiddleIcon: IconShapeTuple = [alignMiddleIconName, renderIcon(icon)];
