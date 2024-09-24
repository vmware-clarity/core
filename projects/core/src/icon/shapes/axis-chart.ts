/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M4 5h28a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m0 2v22h28V7z" clip-rule="evenodd"/><path d="M6.007 26.731H27.73c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43l-19.729-.005.009-13.726c0-.78-.84-1.26-1.51-.87-.31.17-.5.51-.5.87z"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61"/><path fill-rule="evenodd" d="M22.56 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.026q-.167.015-.336.01H32V29H4V7h17.36zm5.17 21.73-21.723.001L6 11.01c0-.36.19-.7.5-.87.67-.39 1.51.09 1.51.87l-.009 13.726 19.729.004c.3.02.57.18.74.43.44.63.02 1.5-.74 1.56" clip-rule="evenodd"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M23.07 5a7 7 0 0 0 0 2H4v22h28V12.71a7 7 0 0 0 2-.965V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/><path d="m6.007 26.731 21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43l-19.729-.004.009-13.726c0-.78-.84-1.26-1.51-.87-.31.17-.5.51-.5.87z"/>',

  solid:
    '<path fill-rule="evenodd" d="M34 29V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2m-6.27-2.27-21.723.001L6 11.01c0-.36.19-.7.5-.87.67-.39 1.51.09 1.51.87l-.009 13.726 19.729.004c.3.02.57.18.74.43.44.63.02 1.5-.74 1.56" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.905 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284L29.1 1.646a1.28 1.28 0 0 0-1.098-.609c-.452 0-.87.232-1.097.61"/><path fill-rule="evenodd" d="m22.56 5-3.023 5.039a3.2 3.2 0 0 0-.116 3.35 3.28 3.28 0 0 0 2.92 1.648h11.323a3 3 0 0 0 .336-.01V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM6.007 26.731l21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43l-19.729-.004.009-13.726c0-.78-.84-1.26-1.51-.87-.31.17-.5.51-.5.87z" clip-rule="evenodd"/>',

  solidBadged:
    '<path fill-rule="evenodd" d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10" clip-rule="evenodd"/><path d="M34 11.745A7 7 0 0 1 23.07 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2zM6.007 26.731l21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43l-19.729-.004.009-13.726c0-.78-.84-1.26-1.51-.87-.31.17-.5.51-.5.87z"/>',
};

export const axisChartIconName = 'axis-chart';
export const axisChartIcon: IconShapeTuple = [axisChartIconName, renderIcon(icon)];
