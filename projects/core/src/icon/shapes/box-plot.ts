/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M4 5h28a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m0 2v22h28V7zm3 5h10v14H7zm8.4 12.4H8.6v-5.6h6.8zm0-10.8H8.6v3.6h6.8zM29 24H19V10h10zm-8.4-12.4h6.8v5.6h-6.8zm0 10.8h6.8v-3.6h-6.8z" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.935 1.6-5.681 9.469c-.27.382-.295.879-.064 1.285s.678.651 1.156.636H33.72a1.28 1.28 0 0 0 1.157-.636c.23-.406.206-.902-.064-1.285l-5.682-9.47A1.28 1.28 0 0 0 28.033.99c-.452 0-.87.232-1.098.61"/><path d="M4 5h18.563l-1.2 2H4v22h28V14.99h1.695q.153.004.305-.008V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"/><path fill-rule="evenodd" d="M19 12.008V24h10v-9.01h-1.6v2.21h-6.8v-2.682a3.24 3.24 0 0 1-1.148-1.176 3.2 3.2 0 0 1-.41-1.334zM20.6 22.4h6.8v-3.6h-6.8zM7 12h10v14H7zm8.4 12.4H8.6v-5.6h6.8zm0-10.8H8.6v3.6h6.8z" clip-rule="evenodd"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M24.255 10H19v14h10V12.93a7 7 0 0 1-1.6-.429V17.2h-6.8v-5.6h5.2a7 7 0 0 1-1.545-1.6M27.4 22.4h-6.8v-3.6h6.8z" clip-rule="evenodd"/><path d="M32 12.71V29H4V7h19.07a7 7 0 0 1 0-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V11.745a7 7 0 0 1-2 .965"/><path fill-rule="evenodd" d="M17 12H7v14h10zM8.6 24.4h6.8v-5.6H8.6zm0-10.8h6.8v3.6H8.6z" clip-rule="evenodd"/>',

  solid:
    '<path fill-rule="evenodd" d="M34 7v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2M7 26h10V12H7zm8-7H9v5h6zm0-2H9v-3h6zm14 7H19V10h10zm-8-12h6v5h-6zm0 10h6v-3h-6z" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.904 1.615-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.609M9 19h6v5H9zm0-2h6v-3H9z"/><path fill-rule="evenodd" d="M22.54 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14.995q-.167.015-.336.01H29V24H19V12.031l.012-.002a3.2 3.2 0 0 1 .524-2.021zM17 26H7V12h10z" clip-rule="evenodd"/><path d="M21 14.752V17h6v-1.995h-4.66a3.3 3.3 0 0 1-1.34-.254M27 22h-6v-3h6z"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10M9 19h6v5H9zm0-2h6v-3H9z"/><path fill-rule="evenodd" d="M34 11.745A6.97 6.97 0 0 1 30 13q-.51 0-1-.07V24H19V10h5.255A6.97 6.97 0 0 1 23 6q0-.51.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2zM17 26H7V12h10z" clip-rule="evenodd"/><path d="M26.392 12H21v5h6v-4.674a7 7 0 0 1-.608-.326M27 22h-6v-3h6z"/>',
};

export const boxPlotIconName = 'box-plot';
export const boxPlotIcon: IconShapeTuple = [boxPlotIconName, renderIcon(icon)];
