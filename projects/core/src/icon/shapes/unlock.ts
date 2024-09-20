/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12 25.14V28h2v-2.77a2.42 2.42 0 1 0-2-.09"/><path d="M26 2a8.2 8.2 0 0 0-8 8.36V15H2v17a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V15h-4v-4.64A6.2 6.2 0 0 1 26 4a6.2 6.2 0 0 1 6 6.36v6.83a1 1 0 0 0 2 0v-6.83A8.2 8.2 0 0 0 26 2m-4 15v15H4V17Z"/>',
  solid:
    '<path d="M26 2a8.2 8.2 0 0 0-8 8.36V15H2v17a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V15h-4v-4.64A6.2 6.2 0 0 1 26 4a6.2 6.2 0 0 1 6 6.36v6.83a1 1 0 0 0 2 0v-6.83A8.2 8.2 0 0 0 26 2M14 25.23V28h-2v-2.86a2.4 2.4 0 1 1 2 .09"/>',
};

export const unlockIconName = 'unlock';
export const unlockIcon: IconShapeTuple = [unlockIconName, renderIcon(icon)];
