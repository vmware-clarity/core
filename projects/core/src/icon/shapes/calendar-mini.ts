/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29 8h-1.4V4a1.6 1.6 0 0 0-3.2 0v4H11.6V4a1.6 1.6 0 0 0-3.2 0v4H7a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3m-1 4v4.4H8V12ZM8 28v-8.4h20V28Z"/>',
  solid:
    '<path d="M29 8h-1.4V4a1.6 1.6 0 0 0-3.2 0v4H11.6V4a1.6 1.6 0 0 0-3.2 0v4H7a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3M8 28V16h20v12Z"/>',
};

export const calendarMiniIconName = 'calendar-mini';
export const calendarMiniIcon: IconShapeTuple = [calendarMiniIconName, renderIcon(icon)];
