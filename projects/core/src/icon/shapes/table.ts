/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M8 34a1 1 0 0 1-1-1V2.92a1 1 0 0 1 2 0V33a1 1 0 0 1-1 1m9-.08a1 1 0 0 1-1-1V9.1a1 1 0 1 1 2 0v23.82a1 1 0 0 1-1 1m9 .08a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v24a1 1 0 0 1-1 1"/><path d="M33.11 18h-25a1 1 0 1 1 0-2h25a1 1 0 1 1 0 2m-.01 8.94h-25a1 1 0 1 1 0-1.94h25a1 1 0 1 1 0 1.92ZM33 8.92H3A1 1 0 1 1 3 7h30a1 1 0 1 1 0 1.94Z"/>',
};

export const tableIconName = 'table';
export const tableIcon: IconShapeTuple = [tableIconName, renderIcon(icon)];
