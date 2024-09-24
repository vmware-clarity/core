/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m6.7 11.715 5.897 6.004c.19.2.44.29.7.29a1 1 0 0 0 .7-.29c.38-.39.38-1.02 0-1.411l-4.219-4.293H29.02c.54 0 .98-.45.98-1s-.44-1-.98-1H9.758l4.219-4.304c.38-.39.38-1.02 0-1.41a.97.97 0 0 0-1.39 0L6.7 10.294l-.69.71zm22.6 12.598-5.897-6.004a.97.97 0 0 0-1.39 0c-.38.39-.38 1.02 0 1.411l4.219 4.293H6.98c-.54 0-.98.45-.98 1s.44 1.001.98 1.001h19.242l-4.219 4.293c-.38.39-.38 1.02 0 1.41.19.2.44.29.7.29a1 1 0 0 0 .7-.29l5.897-6.003.69-.71-.69-.711z"/>',
};

export const twoWayArrowsIconName = 'two-way-arrows';
export const twoWayArrowsIcon: IconShapeTuple = [twoWayArrowsIconName, renderIcon(icon)];
