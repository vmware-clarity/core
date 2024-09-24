/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z"/><path d="M6 25h2v-3h2v3h3v-3h2v3h3v-3h2v3h3v-3h2v3h2.723c.3.02.57.18.74.43.44.63.02 1.5-.74 1.56L6 26.991Z"/>',

  outlineAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-1.172 2H4v22h28V15.357h2Z"/><path d="M6 25h2v-3h2v3h3v-3h2v3h3v-3h2v3h3v-3h2v3h2.723c.3.02.57.18.74.43.44.63.02 1.5-.74 1.56L6 26.991Z"/>',

  outlineBadged:
    '<path d="M32 13.22V29H4V7h18.57a7.5 7.5 0 0 1-.07-1q.001-.503.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88"/><path d="M6 25h2v-3h2v3h3v-3h2v3h3v-3h2v3h3v-3h2v3h2.723c.3.02.57.18.74.43.44.63.02 1.5-.74 1.56L6 26.991Z"/>',

  solid:
    '<path d="M34 7v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2M6 26.991l21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43H25v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3H8v3H6Z"/>',

  solidAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-4.333 7.395c-.83 1.206-.031 2.85 1.439 2.956q.104.009.206.006H34ZM6 26.991l21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43H25v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3H8v3H6Z"/>',

  solidBadged:
    '<path d="M34 12.34V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18.57a7.44 7.44 0 0 0 6.74 8.46l1.01.02A7.45 7.45 0 0 0 34 12.34M6 26.991l21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43H25v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3H8v3H6Z"/>',
};

export const tickChartIconName = 'tick-chart';
export const tickChartIcon: IconShapeTuple = [tickChartIconName, renderIcon(icon)];
