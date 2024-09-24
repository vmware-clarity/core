/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22zm4-4H6v1.991l21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43H25v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3H8z" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.896 1.611-5.681 9.47c-.27.382-.294.879-.064 1.284.23.406.678.652 1.156.636h11.374a1.28 1.28 0 0 0 1.155-.636 1.19 1.19 0 0 0-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61"/><path d="M22.53 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14.99q-.171.015-.344.011H32V29H4V7h17.33z"/><path d="M6 25h2v-3h2v3h3v-3h2v3h3v-3h2v3h3v-3h2v3h2.723c.3.02.57.18.74.43.44.63.02 1.5-.74 1.56L6 26.991z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M32 12.71V29H4V7h19.07a7 7 0 0 1 0-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V11.745a7 7 0 0 1-2 .965"/><path d="M6 25h2v-3h2v3h3v-3h2v3h3v-3h2v3h3v-3h2v3h2.723c.3.02.57.18.74.43.44.63.02 1.5-.74 1.56L6 26.991z"/>',

  solid:
    '<path fill-rule="evenodd" d="M34 29V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2m-6.277-2.01L6 26.991V25h2v-3h2v3h3v-3h2v3h3v-3h2v3h3v-3h2v3h2.723c.3.02.57.18.74.43.44.63.02 1.5-.74 1.56" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.896 1.611-5.681 9.47c-.27.382-.294.879-.064 1.284.23.406.678.652 1.156.636h11.374a1.28 1.28 0 0 0 1.155-.636 1.19 1.19 0 0 0-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61"/><path fill-rule="evenodd" d="m22.53 5-3.002 5.004a3.2 3.2 0 0 0-.115 3.35 3.28 3.28 0 0 0 2.919 1.648h11.324q.173.003.344-.011V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM6 26.991l21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43H25v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3H8v3H6z" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M34 11.745A7 7 0 0 1 23.07 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2zM6 26.991l21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43H25v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3H8v3H6z" clip-rule="evenodd"/>',
};

export const tickChartIconName = 'tick-chart';
export const tickChartIcon: IconShapeTuple = [tickChartIconName, renderIcon(icon)];
