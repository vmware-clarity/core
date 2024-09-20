/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z"/><path d="M7 10h6v16h-1.6V11.6H8.6V26H7Zm8 9h6v7h-1.6v-5.4h-2.8V26H15Zm8-3h6v10h-1.6v-8.4h-2.8V26H23Z"/>',

  outlineAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-1.172 2H4v22h28V15.357h2Z"/><path d="M7 10h6v16h-1.6V11.6H8.6V26H7Zm8 9h6v7h-1.6v-5.4h-2.8V26H15Zm8-3h6v10h-1.6v-8.4h-2.8V26H23Z"/>',

  outlineBadged:
    '<path d="M32 13.22V29H4V7h18.57a7.5 7.5 0 0 1-.07-1q.001-.503.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88"/><path d="M7 10h6v16h-1.6V11.6H8.6V26H7Zm8 9h6v7h-1.6v-5.4h-2.8V26H15Zm8-3h6v10h-1.6v-8.4h-2.8V26H23Z"/>',

  solid:
    '<path d="M34 7v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2M7 26h6V10H7Zm8 0h6v-7h-6Zm8 0h6V16h-6Z"/>',

  solidAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-4.333 7.395c-.83 1.206-.031 2.85 1.439 2.956q.104.009.206.006H34ZM7 26h6V10H7Zm8 0h6v-7h-6Zm8 0h6V16h-6Z"/>',

  solidBadged:
    '<path d="M34 12.34V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18.57a7.44 7.44 0 0 0 6.74 8.46l1.01.02A7.45 7.45 0 0 0 34 12.34M7 26h6V10H7Zm8 0h6v-7h-6Zm8 0h6V16h-6Z"/>',
};

export const barChartIconName = 'bar-chart';
export const barChartIcon: IconShapeTuple = [barChartIconName, renderIcon(icon)];
