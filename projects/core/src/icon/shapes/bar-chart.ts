/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22zm9-19H7v16h1.6V11.6h2.8V26H13zm2 9h6v7h-1.6v-5.4h-2.8V26H15zm14-3h-6v10h1.6v-8.4h2.8V26H29z" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.912 1.6-5.682 9.469c-.27.382-.294.879-.063 1.285s.677.651 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.406.206-.902-.063-1.285l-5.682-9.47A1.28 1.28 0 0 0 28.009.99c-.451 0-.87.232-1.097.61"/><path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-1.172 2H4v22h28V15.357h2z"/><path d="M15 19h6v7h-1.6v-5.4h-2.8V26H15zm-2-9H7v16h1.6V11.6h2.8V26H13zm10 6h6v10h-1.6v-8.4h-2.8V26H23z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M32 13.22V29H4V7h18.57a7.5 7.5 0 0 1-.07-1q.001-.503.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88"/><path d="M7 10h6v16h-1.6V11.6H8.6V26H7zm14 9h-6v7h1.6v-5.4h2.8V26H21zm2-3h6v10h-1.6v-8.4h-2.8V26H23z"/>',

  solid:
    '<path fill-rule="evenodd" d="M34 29V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2m-21-3H7V10h6zm2 0h6v-7h-6zm14 0h-6V16h6z" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.905 1.61-5.682 9.47c-.27.382-.294.878-.063 1.284.23.405.677.651 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.406.206-.902-.063-1.285L29.1 1.61a1.28 1.28 0 0 0-1.098-.608c-.452 0-.87.232-1.097.609"/><path fill-rule="evenodd" d="m22.538 5-3.001 5.002a3.2 3.2 0 0 0-.116 3.35A3.28 3.28 0 0 0 22.341 15h11.323q.17.003.336-.01V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM7 26h6V10H7zm14 0h-6v-7h6zm2 0h6V16h-6z" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M34 12.34V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18.57a7.44 7.44 0 0 0 6.74 8.46l1.01.02A7.45 7.45 0 0 0 34 12.34M7 26h6V10H7zm14 0h-6v-7h6zm2 0h6V16h-6z" clip-rule="evenodd"/>',
};

export const barChartIconName = 'bar-chart';
export const barChartIcon: IconShapeTuple = [barChartIconName, renderIcon(icon)];
