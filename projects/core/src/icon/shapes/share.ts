/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27.53 24a5 5 0 0 0-3.6 1.55l-12.19-6.1a4.47 4.47 0 0 0 0-2.8l12.21-6.21a5.12 5.12 0 1 0-1.07-1.7l-12.09 6.15a5 5 0 1 0 0 6.33l12.06 6.07a4.9 4.9 0 0 0-.31 1.71 5 5 0 1 0 5-5Zm0-20a3 3 0 1 1-3 3 3 3 0 0 1 3-3M7 21a3 3 0 1 1 3-3 3 3 0 0 1-3 3m20.53 11a3 3 0 1 1 3-3 3 3 0 0 1-3 3"/>',
  solid:
    '<path d="M27.53 24a5 5 0 0 0-3.6 1.55l-12.19-6.1a4.47 4.47 0 0 0 0-2.8l12.21-6.21a5.12 5.12 0 1 0-1.07-1.7l-12.09 6.15a5 5 0 1 0 0 6.33l12.06 6.07a4.9 4.9 0 0 0-.31 1.71 5 5 0 1 0 5-5Z"/>',
};

export const shareIconName = 'share';
export const shareIcon: IconShapeTuple = [shareIconName, renderIcon(icon)];
