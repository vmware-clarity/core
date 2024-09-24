/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29 8h-1.4V4a1.6 1.6 0 0 0-3.2 0v4H11.6V4a1.6 1.6 0 0 0-3.2 0v4H7a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3m-1 20H8V12h20Z"/><path d="m16.8 25.66 7.71-7.8a1.6 1.6 0 1 0-2.27-2.25l-5.45 5.51L14 18.33a1.6 1.6 0 0 0-2.26 2.27Z"/>',
  solid:
    '<path d="M30 8h-2.4V4a1.6 1.6 0 0 0-3.2 0v4H11.6V4a1.6 1.6 0 0 0-3.2 0v4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m-4.57 9.43-9.07 9.17-6-6a2 2 0 1 1 2.82-2.83l3.14 3.13 6.23-6.3a2 2 0 0 1 2.85 2.81Z"/>',
};

export const eventMiniIconName = 'event-mini';
export const eventMiniIcon: IconShapeTuple = [eventMiniIconName, renderIcon(icon)];
