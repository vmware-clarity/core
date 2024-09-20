/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 28H4v-6.68a7.1 7.1 0 0 1-2-1.43V28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-8.11a6.7 6.7 0 0 1-2 1.42Z"/><path d="M25 22.4a1 1 0 0 0 1-1v-5.46h-2V18H14v2h10v1.4a1 1 0 0 0 1 1"/><path d="M33 6h-9V4.38A2.42 2.42 0 0 0 21.55 2h-7.1A2.42 2.42 0 0 0 12 4.38V6H3a1 1 0 0 0-1 1v8a5 5 0 0 0 5 5h3v1.4a1 1 0 0 0 2 0v-5.46h-2V18H7a3 3 0 0 1-3-3V8h28v7a3 3 0 0 1-3 3h-1v2h1a5 5 0 0 0 5-5V7a1 1 0 0 0-1-1M22 6h-8V4.43a.45.45 0 0 1 .45-.43h7.11a.43.43 0 0 1 .44.42Z"/>',
  solid:
    '<path d="M30 18a4.06 4.06 0 0 0 4-4V6H24V4.43A2.44 2.44 0 0 0 21.55 2h-7.1A2.44 2.44 0 0 0 12 4.43V6H2v8a4.06 4.06 0 0 0 4.05 4h4v-2.08h2v5.7a1 1 0 1 1-2 0v-1.56H6.06A6.06 6.06 0 0 1 2 18.49v9.45a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-9.45a6 6 0 0 1-4.06 1.57H28V18ZM14 4.43a.45.45 0 0 1 .45-.43h7.1a.45.45 0 0 1 .45.43V6h-8Zm12 17.19a1 1 0 1 1-2 0v-1.56H14V18h10v-2.08h2Z"/>',
};

export const briefcaseIconName = 'briefcase';
export const briefcaseIcon: IconShapeTuple = [briefcaseIconName, renderIcon(icon)];
