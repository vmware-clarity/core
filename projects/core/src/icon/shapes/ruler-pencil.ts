/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M9 17.41V27h9.59l-2-2H11v-5.59z"/><path d="M34.87 32.29 32 29.38V32H4v-4.15h2v-1.6H4V19.6h2V18H4v-6.4h2V10H4V4.41l15.94 15.85v-2.82L3.71 1.29A1 1 0 0 0 2 2v31a1 1 0 0 0 1 1h31.16a1 1 0 0 0 .71-1.71"/><path d="M24 30h4a2 2 0 0 0 2-2V8.7l-2.3-4.23a2 2 0 0 0-1.76-1 2 2 0 0 0-1.76 1.08L22 8.72V28a2 2 0 0 0 2 2m0-20.8 1.94-3.77L28 9.21V24h-4Zm0 16.43h4v2.44h-4Z"/>',
  solid:
    '<path d="M34.87 32.21 30 27.37V8.75l-2.3-4.23a2 2 0 0 0-3.54 0L22 8.76v10.65L3.71 1.21A1 1 0 0 0 2 1.92V10h2.17v1.6H2V18h2.17v1.6H2v6.65h2.17v1.6H2v5.07a1 1 0 0 0 1 1h31.16a1 1 0 0 0 .71-1.71M10 26v-9.06L19.07 26Zm18 2.11h-4v-2.43h4Zm0-4h-4V9.25l1.94-3.77L28 9.26Z"/>',
};

export const rulerPencilIconName = 'ruler-pencil';
export const rulerPencilIcon: IconShapeTuple = [rulerPencilIconName, renderIcon(icon)];
