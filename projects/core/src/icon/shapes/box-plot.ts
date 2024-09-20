/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z"/><path d="M7 12h10v14H7zm1.6 12.4h6.8v-5.6H8.6zm6.8-10.8H8.6v3.6h6.8zM19 24h10V10H19zm1.6-12.4h6.8v5.6h-6.8zm6.8 10.8h-6.8v-3.6h6.8z"/>',

  outlineAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-1.172 2H4v22h28V15.357h2Z"/><path d="M7 12h10v14H7zm1.6 12.4h6.8v-5.6H8.6zm6.8-10.8H8.6v3.6h6.8zM29 24H19v-8.655c.021.003 1.6.015 1.6.015v1.84h6.8v-1.84l1.6-.003zm-1.6-5.2h-6.8v3.6h6.8z"/>',

  outlineBadged:
    '<path d="M32 13.22V29H4V7h18.57a7.5 7.5 0 0 1-.07-1q.001-.503.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88"/><path d="M7 12h10v14H7zm1.6 12.4h6.8v-5.6H8.6zm6.8-10.8H8.6v3.6h6.8zM19 10h4.728a7.5 7.5 0 0 0 1.362 1.6H20.6v5.6h6.8v-4.213c.509.19 1.045.326 1.6.4V24H19Zm8.4 8.8h-6.8v3.6h6.8Z"/>',

  solid:
    '<path d="M34 7v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2M7 26h10V12H7Zm2-7h6v5H9Zm6-2H9v-3h6Zm4 7h10V10H19Zm2-12h6v5h-6Zm6 10h-6v-3h6Z"/>',

  solidAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-2.93 5H19v.048l-1.375 2.347c-.818 1.188-.054 2.802 1.375 2.95V24h10v-8.643h5ZM7 26h10V12H7Zm2-7h6v5H9Zm6-2H9v-3h6Zm12 0h-6v-1.643h6Zm0 5h-6v-3h6Z"/>',

  solidBadged:
    '<path d="M34 12.34V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18.57a7.4 7.4 0 0 0 1.063 5H19v14h10V13.427q.154.02.31.033l1.01.02A7.45 7.45 0 0 0 34 12.34M7 26h10V12H7Zm2-7h6v5H9Zm6-2H9v-3h6Zm6-5h4.472c.468.352.98.65 1.528.885V17h-6Zm6 10h-6v-3h6Z"/>',
};

export const boxPlotIconName = 'box-plot';
export const boxPlotIcon: IconShapeTuple = [boxPlotIconName, renderIcon(icon)];
