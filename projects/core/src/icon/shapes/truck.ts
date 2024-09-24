/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 12h-4V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1V8h20v11.7a6.5 6.5 0 0 1 1.56-.2H26V14h4a2 2 0 0 1 2 2v1h-4v2h4v5h-2.4a4.54 4.54 0 0 0-8.34 0h-6.83a4.5 4.5 0 0 0-4.17-2.76A4.38 4.38 0 1 0 14.72 26H21a4.49 4.49 0 0 0 8.92 0H33a1 1 0 0 0 1-1v-9a4 4 0 0 0-4-4M10.26 28a2.38 2.38 0 1 1 0-4.75 2.38 2.38 0 1 1 0 4.75m15.17 0a2.38 2.38 0 1 1 2.5-2.37 2.44 2.44 0 0 1-2.5 2.37"/>',
  solid:
    '<path d="M30 12h-4V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1V8h20v13.49A4.45 4.45 0 0 0 21.25 24h-6.82a4.5 4.5 0 0 0-4.17-2.76A4.38 4.38 0 1 0 14.72 26H21a4.48 4.48 0 0 0 8.91 0H34V16a4 4 0 0 0-4-4M10.26 28a2.38 2.38 0 1 1 0-4.75 2.38 2.38 0 1 1 0 4.75m15.17 0a2.38 2.38 0 1 1 2.5-2.37A2.44 2.44 0 0 1 25.42 28ZM32 17h-6v-3h4a2 2 0 0 1 2 2Z"/>',
};

export const truckIconName = 'truck';
export const truckIcon: IconShapeTuple = [truckIconName, renderIcon(icon)];
