/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M4 5h28a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m0 2v22h28V7zm25 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-4.4 0a1.4 1.4 0 1 1 2.8 0 1.4 1.4 0 0 1-2.8 0M15 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-6.4 0a2.4 2.4 0 1 1 4.801.001A2.4 2.4 0 0 1 8.6 14M21 23a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-4.4 0a1.4 1.4 0 1 1 2.8 0 1.4 1.4 0 0 1-2.8 0" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.904 1.603-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.406.206-.903-.063-1.285l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61"/><path d="M22.534 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14.983q-.167.015-.336.01H32V29H4V7h17.334z"/><path fill-rule="evenodd" d="M26 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-4.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8M11 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-6.4a2.4 2.4 0 1 0 .001 4.801A2.4 2.4 0 0 0 11 11.6M18 26a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-4.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8" clip-rule="evenodd"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M32 29V13.22a7.5 7.5 0 0 0 2-.88V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18.57a7 7 0 0 0-.07 1q.001.502.07 1H4v22z"/><path fill-rule="evenodd" d="M26 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-4.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8M11 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-6.4a2.4 2.4 0 1 0 .001 4.801A2.4 2.4 0 0 0 11 11.6M18 26a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-4.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8" clip-rule="evenodd"/>',

  solid:
    '<path fill-rule="evenodd" d="M32 31a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2zM7 14a4 4 0 1 1 8 0 4 4 0 0 1-8 0m19 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-11 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.904 1.611-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61"/><path fill-rule="evenodd" d="M22.538 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14.991q-.167.015-.336.01h-7.567a3 3 0 1 1-.194 0H22.34a3.28 3.28 0 0 1-2.92-1.647 3.2 3.2 0 0 1 .116-3.35zM11 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8m7 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M34 12.34V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18.57a7.44 7.44 0 0 0 6.74 8.46l1.01.02A7.45 7.45 0 0 0 34 12.34M11 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8m12 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-5 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clip-rule="evenodd"/>',
};

export const bubbleChartIconName = 'bubble-chart';
export const bubbleChartIcon: IconShapeTuple = [bubbleChartIconName, renderIcon(icon)];
