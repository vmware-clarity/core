/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M32 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M8.92 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6m13.86 1.37-5.4 5.4-4-4a1 1 0 0 0-1.41 0L5.92 22.9v2.83l6.79-6.79L16 22.18l-3.75 3.75H15l8.45-8.45L30 24v-2.82l-5.81-5.81a1 1 0 0 0-1.41 0m-12.375-4.99A1.6 1.6 0 0 0 8.92 9.4v.01A1.6 1.6 0 0 0 7.33 11a1.6 1.6 0 1 0 3.075-.62M4 6v24h28V6z" clip-rule="evenodd"/>',
  outlineBadged:
    '<path fill-rule="evenodd" d="M32 30V13.22a7.5 7.5 0 0 0 2-.88V30a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h18.78a7.5 7.5 0 0 0-.28 2H4v24zM13.38 16.77l4 4 5.4-5.4a1 1 0 0 1 1.41 0L30 21.18V24l-6.55-6.52L15 25.93h-2.75L16 22.18l-3.29-3.24-6.79 6.79V22.9l6.05-6.13a1 1 0 0 1 1.41 0M11.93 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-3-1.6a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2" clip-rule="evenodd"/><path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',
  solid:
    '<path fill-rule="evenodd" d="M4 4h28a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m7.92 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0M6 27v-4.1l6-6.08a1 1 0 0 1 1.41 0L16 19.35 8.32 27zm5.15 0H30v-5.82l-5.81-5.81a1 1 0 0 0-1.41 0z" clip-rule="evenodd"/>',
  solidBadged:
    '<path fill-rule="evenodd" d="M24.027 10.546A7.48 7.48 0 0 0 30 13.5a7.46 7.46 0 0 0 4-1.16V30a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h18.78a7.48 7.48 0 0 0 1.247 6.546M11.92 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0M6 27v-4.1l6-6.08a1 1 0 0 1 1.41 0L16 19.35 8.32 27zm5.15 0H30v-5.82l-5.81-5.81a1 1 0 0 0-1.41 0z" clip-rule="evenodd"/><path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',
};

export const imageIconName = 'image';
export const imageIcon: IconShapeTuple = [imageIconName, renderIcon(icon)];
