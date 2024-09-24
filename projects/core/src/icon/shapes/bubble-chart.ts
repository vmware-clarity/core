/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z"/><path d="M29 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3-1.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8M15 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4-2.4a2.4 2.4 0 1 0 .001 4.801A2.4 2.4 0 0 0 11 11.6M21 23a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3-1.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8"/>',

  outlineAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-1.172 2H4v22h28V15.357h2Z"/><path d="M29 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3-1.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8M15 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4-2.4a2.4 2.4 0 1 0 .001 4.801A2.4 2.4 0 0 0 11 11.6M21 23a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3-1.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8"/>',

  outlineBadged:
    '<path d="M32 13.22V29H4V7h18.57a7.5 7.5 0 0 1-.07-1q.001-.503.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88"/><path d="M29 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3-1.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8M15 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4-2.4a2.4 2.4 0 1 0 .001 4.801A2.4 2.4 0 0 0 11 11.6M21 23a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3-1.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8"/>',

  solid:
    '<path d="M34 7v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2m-23 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8m15 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/>',

  solidAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-4.333 7.395c-.83 1.206-.031 2.85 1.439 2.956q.104.009.206.006h5.309a3 3 0 1 0 2.842 0H34ZM11 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8m7 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/>',

  solidBadged:
    '<path d="M34 12.34V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18.57a7.44 7.44 0 0 0 6.74 8.46l1.01.02A7.45 7.45 0 0 0 34 12.34M11 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8m15 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/>',
};

export const bubbleChartIconName = 'bubble-chart';
export const bubbleChartIcon: IconShapeTuple = [bubbleChartIconName, renderIcon(icon)];
