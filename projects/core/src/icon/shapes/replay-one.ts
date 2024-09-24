/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M19 27.27a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1 3.8 3.8 0 0 0-1.1.23l-2 .62a.92.92 0 0 0-.72.86.88.88 0 0 0 .88.86 1.5 1.5 0 0 0 .43-.08l1.51-.42v11.2a1 1 0 0 0 1 1"/><path d="M18.06 5h-6.7l2.92-2.64A1 1 0 0 0 12.94.88L7.32 6l5.62 5a1 1 0 0 0 .67.26 1 1 0 0 0 .74-.33 1 1 0 0 0-.07-1.42L11.46 7h6.6A11.78 11.78 0 1 1 7.71 24.41a1 1 0 0 0-1.71.95A13.78 13.78 0 1 0 18.06 5"/>',
};

export const replayOneIconName = 'replay-one';
export const replayOneIcon: IconShapeTuple = [replayOneIconName, renderIcon(icon)];
