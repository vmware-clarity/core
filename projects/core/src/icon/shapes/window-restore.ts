/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14 8h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2v-2h2V10H14v2h-2v-2a2 2 0 0 1 2-2"/><path fill-rule="evenodd" d="M22 14H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2M8 26V16h14v10z" clip-rule="evenodd"/>',
};

export const windowRestoreIconName = 'window-restore';
export const windowRestoreIcon: IconShapeTuple = [windowRestoreIconName, renderIcon(icon)];
