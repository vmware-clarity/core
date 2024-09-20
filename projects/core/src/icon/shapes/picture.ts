/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 30V6h28v24Z"/><path d="M8.92 14a3 3 0 1 0-3-3 3 3 0 0 0 3 3m0-4.6A1.6 1.6 0 1 1 7.33 11a1.6 1.6 0 0 1 1.59-1.59Zm13.86 5.97-5.4 5.4-4-4a1 1 0 0 0-1.41 0L5.92 22.9v2.83l6.79-6.79L16 22.18l-3.75 3.75H15l8.45-8.45L30 24v-2.82l-5.81-5.81a1 1 0 0 0-1.41 0"/>',

  outlineBadged:
    '<path d="M11.93 11a3 3 0 1 0-3 3 3 3 0 0 0 3-3m-4.6 0a1.6 1.6 0 1 1 1.6 1.6 1.6 1.6 0 0 1-1.6-1.6m10.05 9.77-4-4a1 1 0 0 0-1.41 0L5.92 22.9v2.83l6.79-6.79L16 22.18l-3.75 3.75H15l8.45-8.45L30 24v-2.82l-5.81-5.81a1 1 0 0 0-1.41 0Z"/><path d="M32 13.22V30H4V6h18.5a7.5 7.5 0 0 1 .28-2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.5 7.5 0 0 1-2 .88"/>',

  solid:
    '<path d="M32 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M8.92 8a3 3 0 1 1-3 3 3 3 0 0 1 3-3M6 27v-4.1l6-6.08a1 1 0 0 1 1.41 0L16 19.35 8.32 27Zm24 0H11.15l6.23-6.23 5.4-5.4a1 1 0 0 1 1.41 0L30 21.18Z"/>',

  solidBadged:
    '<path d="M30 13.5A7.48 7.48 0 0 1 22.78 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.46 7.46 0 0 1-4 1.16M8.92 8a3 3 0 1 1-3 3 3 3 0 0 1 3-3M6 27v-4.1l6-6.08a1 1 0 0 1 1.41 0L16 19.35 8.32 27Zm24 0H11.15l6.23-6.23 5.4-5.4a1 1 0 0 1 1.41 0L30 21.18Z"/>',
};

export const pictureIconName = 'picture';
export const pictureIcon: IconShapeTuple = [pictureIconName, renderIcon(icon)];
