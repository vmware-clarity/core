/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18.09 20.59A2.41 2.41 0 0 0 17 25.14V28h2v-2.77a2.41 2.41 0 0 0-.91-4.64"/><path d="M26 15v-4.28a8.2 8.2 0 0 0-8-8.36 8.2 8.2 0 0 0-8 8.36V15H7v17a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V15Zm-14-4.28a6.2 6.2 0 0 1 6-6.36 6.2 6.2 0 0 1 6 6.36V15H12ZM9 32V17h18v15Z"/>',
  solid:
    '<path d="M26 15v-4.28a8.2 8.2 0 0 0-8-8.36 8.2 8.2 0 0 0-8 8.36V15H7v17a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V15Zm-7 10.23V28h-2v-2.86a2.4 2.4 0 1 1 2 .09M24 15H12v-4.28a6.2 6.2 0 0 1 6-6.36 6.2 6.2 0 0 1 6 6.36Z"/>',
};

export const lockIconName = 'lock';
export const lockIcon: IconShapeTuple = [lockIconName, renderIcon(icon)];
