/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28 8H14a2 2 0 0 0-2 2v2h2v-2h14v10h-2v2h2a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"/><path d="M22 14H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2M8 26V16h14v10Z"/>',
};

export const windowRestoreIconName = 'window-restore';
export const windowRestoreIcon: IconShapeTuple = [windowRestoreIconName, renderIcon(icon)];
