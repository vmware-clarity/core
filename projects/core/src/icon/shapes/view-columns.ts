/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M31 5H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 29H5V7h8zm2 0h8V7h-8z" clip-rule="evenodd"/>',
};

export const viewColumnsIconName = 'view-columns';
export const viewColumnsIcon: IconShapeTuple = [viewColumnsIconName, renderIcon(icon)];
