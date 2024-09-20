/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.47 7.37a1 1 0 0 0-1 .06L23 13.77V8.26a1 1 0 0 0-1.64-.77L13.48 14H10V4.62a1 1 0 0 0-.78-1l-4-.9a1 1 0 0 0-.85.2 1 1 0 0 0-.37.81V14H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V8.26a1 1 0 0 0-.53-.89M6 5l2 .44V14H6Zm26 25H4V16h9.83a1 1 0 0 0 .64-.23l6.53-5.4v5.28a1 1 0 0 0 1.56.83L32 10.14Z"/><path d="M6 17.99h8v2H6zm0 4h8v2H6zm0 4h8v2H6zm13-7h2v3h-2zm0 6h2v3h-2zm4-6h2v3h-2zm0 6h2v3h-2zm4-6h2v3h-2zm0 6h2v3h-2z"/>',
  solid:
    '<path d="M32.45 8.44 22 15.3V9.51a1 1 0 0 0-1.63-.78L14.07 14H10V4.06L4 2.71V14H2v17a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9.27a1 1 0 0 0-1.55-.83M14 29H6v-2h8Zm0-4H6v-2h8Zm0-4H6v-2h8Zm8 8h-2v-3h2Zm0-6h-2v-3h2Zm4 6h-2v-3h2Zm0-6h-2v-3h2Zm4 6h-2v-3h2Zm0-6h-2v-3h2Z"/>',
};

export const factoryIconName = 'factory';
export const factoryIcon: IconShapeTuple = [factoryIconName, renderIcon(icon)];
