/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22zm5.602-5.032 6.018-8.746 6.688 9.923 8.106-10.709-1.276-.966-6.754 8.925-6.75-10.015-6.326 9.192-2.698-2.386-1.06 1.198z" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.896 1.611-5.681 9.47c-.27.382-.294.879-.064 1.284.23.406.678.652 1.156.636h11.374a1.28 1.28 0 0 0 1.155-.636 1.19 1.19 0 0 0-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61"/><path d="M22.53 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14.99q-.171.015-.344.011H32V29H4V7h17.33z"/><path d="m27.979 15.002-5.595 7.393-6.75-10.015-6.326 9.192-2.698-2.386-1.06 1.198 4.052 3.584 6.018-8.746 6.688 9.923 7.678-10.143z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M32 12.71V29H4V7h19.07a7 7 0 0 1 0-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V11.745a7 7 0 0 1-2 .965"/><path d="m15.62 15.222-6.018 8.746-4.052-3.584 1.06-1.198 2.698 2.386 6.326-9.192 6.75 10.015 6.754-8.925 1.276.966-8.106 10.709z"/>',

  solid:
    '<path fill-rule="evenodd" d="M4 5h28a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m11.46 10.36 7.1 10.58 8.79-11.66-1.7-1.28-7 9.27-7.19-10.71-6.76 9.88L6 19.05l-1.38 1.59 4.5 4z" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.896 1.611-5.681 9.47c-.27.382-.294.879-.064 1.284.23.406.678.652 1.156.636h11.374a1.28 1.28 0 0 0 1.155-.636 1.19 1.19 0 0 0-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61"/><path d="M22.53 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14.99q-.171.015-.344.011h-2.85L22.56 25.94l-7.1-10.58-6.34 9.28-4.5-4L6 19.05l2.7 2.39 6.76-9.88 7.19 10.71 5.489-7.268h-5.807a3.28 3.28 0 0 1-2.92-1.648 3.2 3.2 0 0 1 .116-3.35z"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M34 11.745A7 7 0 0 1 23.07 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2zM22.56 25.94l-7.1-10.58-6.34 9.28-4.5-4L6 19.05l2.7 2.39 6.76-9.88 7.19 10.71 7-9.27 1.7 1.28z" clip-rule="evenodd"/>',
};

export const lineChartIconName = 'line-chart';
export const lineChartIcon: IconShapeTuple = [lineChartIconName, renderIcon(icon)];
