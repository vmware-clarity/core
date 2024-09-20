/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z"/><path d="m15.62 15.222-6.018 8.746-4.052-3.584 1.06-1.198 2.698 2.386 6.326-9.192 6.75 10.015 6.754-8.925 1.276.966-8.106 10.709z"/>',

  outlineAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-1.172 2H4v22h28V15.357h2Z"/><path d="m15.62 15.222-6.018 8.746-4.052-3.584 1.06-1.198 2.698 2.386 6.326-9.192 6.75 10.015 5.333-7.047h2.007l-7.416 9.797Z"/>',

  outlineBadged:
    '<path d="M32 13.22V29H4V7h18.57a7.5 7.5 0 0 1-.07-1q.001-.503.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88"/><path d="m15.62 15.222-6.018 8.746-4.052-3.584 1.06-1.198 2.698 2.386 6.326-9.192 6.75 10.015 6.754-8.925 1.276.966-8.106 10.709z"/>',

  solid:
    '<path d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-9.44 20.94-7.1-10.58-6.34 9.28-4.5-4L6 19.05l2.7 2.39 6.76-9.88 7.19 10.71 7-9.27 1.7 1.28Z"/>',

  solidAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-4.333 7.395c-.83 1.206-.031 2.85 1.439 2.956q.104.009.206.006h8.182L22.38 22.06 15.63 12l-6.35 9.28-2.53-2.24-1.33 1.49 4.23 3.75 5.96-8.72 6.67 9.94 7.679-10.143H34Z"/>',

  solidBadged:
    '<path d="m30.32 13.48 1.06.8-8.82 11.66-7.1-10.58-6.34 9.28-4.5-4L6 19.05l2.7 2.39 6.76-9.88 7.19 10.71 6.66-8.81A7.44 7.44 0 0 1 22.57 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.45 7.45 0 0 1-3.68 1.14"/>',
};

export const lineChartIconName = 'line-chart';
export const lineChartIcon: IconShapeTuple = [lineChartIconName, renderIcon(icon)];
