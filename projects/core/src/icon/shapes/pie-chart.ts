/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z"/><path d="M17 27a8 8 0 0 1 0-16v8h8a8 8 0 0 1-8 8m6.247-6.6H15.4v-7.598A6.4 6.4 0 0 0 17 25.4a6.4 6.4 0 0 0 6.247-5"/><path d="M19 9a8 8 0 0 1 8 8h-8Zm6.198 6.4a6.41 6.41 0 0 0-4.598-4.599V15.4Z"/>',

  outlineAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-1.172 2H4v22h28V15.357h2Z"/><path d="M17 27a8 8 0 0 1 0-16v8h8a8 8 0 0 1-8 8m6.247-6.6H15.4v-7.598A6.4 6.4 0 0 0 17 25.4a6.4 6.4 0 0 0 6.247-5"/><path d="M27 17h-8v-1.655l.064.006q.104.009.206.006h7.561q.168.797.169 1.643"/>',

  outlineBadged:
    '<path d="M32 13.22V29H4V7h18.57a7.5 7.5 0 0 1-.07-1q.001-.503.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88"/><path d="M17 27a8 8 0 0 1 0-16v8h8a8 8 0 0 1-8 8m6.247-6.6H15.4v-7.598A6.4 6.4 0 0 0 17 25.4a6.4 6.4 0 0 0 6.247-5"/><path d="M19 9a8 8 0 0 1 8 8h-8Zm6.198 6.4a6.41 6.41 0 0 0-4.598-4.599V15.4Z"/>',

  solid:
    '<path d="M34 7v22a2 2 0 0 1-2 2s-30-.895-30-2V7a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2m-9 12h-8v-8a8 8 0 1 0 8 8m-6-2h8a8 8 0 0 0-8-8Z"/>',

  solidAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-4.333 7.395c-.818 1.188-.054 2.802 1.375 2.95V17h8q-.001-.846-.169-1.643H34Zm-9-10h-8v-8a8 8 0 1 0 8 8"/>',

  solidBadged:
    '<path d="M34 12.34V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18.57a7.44 7.44 0 0 0 6.74 8.46l1.01.02A7.45 7.45 0 0 0 34 12.34M25 19h-8v-8a8 8 0 1 0 8 8m-6-2h8a8 8 0 0 0-8-8Z"/>',
};

export const pieChartIconName = 'pie-chart';
export const pieChartIcon: IconShapeTuple = [pieChartIconName, renderIcon(icon)];
