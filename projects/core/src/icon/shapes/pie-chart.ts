/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M4 5h28a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m0 2v22h28V7zm13 20a8 8 0 0 1 0-16v8h8a8 8 0 0 1-8 8m-1.6-6.6h7.847a6.4 6.4 0 0 1-6.247 5 6.4 6.4 0 0 1-1.6-12.598zM19 9a8 8 0 0 1 8 8h-8zm1.6 1.801a6.41 6.41 0 0 1 4.598 4.599H20.6z" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.896 1.611-5.681 9.47c-.27.382-.294.879-.064 1.284.23.406.678.652 1.156.636h11.374a1.28 1.28 0 0 0 1.155-.636 1.19 1.19 0 0 0-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61"/><path d="M22.53 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14.99q-.171.015-.344.011H32V29H4V7h17.33z"/><path d="M20.087 9.073A8 8 0 0 0 19 9v2.574a3.2 3.2 0 0 1 .528-1.57zM19 11.973V17h8c0-.69-.087-1.36-.252-1.998h-1.666q.064.195.116.398H20.6v-.847a3.24 3.24 0 0 1-1.187-1.199 3.2 3.2 0 0 1-.413-1.38"/><path fill-rule="evenodd" d="M9 19a8 8 0 0 0 16 0h-8v-8a8 8 0 0 0-8 8m14.247 1.4H15.4v-7.598A6.4 6.4 0 0 0 17 25.4a6.4 6.4 0 0 0 6.247-5" clip-rule="evenodd"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M32 12.71V29H4V7h19.07a7 7 0 0 1 0-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V11.745a7 7 0 0 1-2 .965"/><path fill-rule="evenodd" d="M9 19a8 8 0 0 0 16 0h-8v-8a8 8 0 0 0-8 8m14.247 1.4H15.4v-7.598A6.4 6.4 0 0 0 17 25.4a6.4 6.4 0 0 0 6.247-5" clip-rule="evenodd"/><path fill-rule="evenodd" d="M27 17a8 8 0 0 0-8-8v8zm-1.802-1.6a6.41 6.41 0 0 0-4.598-4.599V15.4z" clip-rule="evenodd"/>',

  solid:
    '<path fill-rule="evenodd" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M19 9a8 8 0 0 1 8 8h-8zm-2 10v-8a8 8 0 1 0 8 8z" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.896 1.611-5.681 9.47c-.27.382-.294.879-.064 1.284.23.406.678.652 1.156.636h11.374a1.28 1.28 0 0 0 1.155-.636 1.19 1.19 0 0 0-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61"/><path fill-rule="evenodd" d="M22.53 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14.99q-.171.015-.344.011h-6.908c.165.64.252 1.309.252 1.999h-8v-5.027a3 3 0 0 1 0-.4V9q.553 0 1.087.073zM17 11v8h8a8 8 0 1 1-8-8" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M34 11.745A7 7 0 0 1 23.07 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2zM27 17a8 8 0 0 0-8-8v8zm-10-6v8h8a8 8 0 1 1-8-8" clip-rule="evenodd"/>',
};

export const pieChartIconName = 'pie-chart';
export const pieChartIcon: IconShapeTuple = [pieChartIconName, renderIcon(icon)];
