/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6 9h2v2H6zm4 0h14v2H10zm-4 8h2v2H6zm4 0h14v2H10z"/><path d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h28v6H4Zm0 8h28v6H4Zm0 14v-6h28v6Z"/><path d="M6 25h2v2H6zm4 0h14v2H10z"/>',

  outlineAlerted:
    '<path d="M10 17h14v2H10zm-4 8h2v2H6zm4 0h14v2H10zm8.64-14A3.7 3.7 0 0 1 19 9.89l.56-.89H10v2Z"/><path d="M33.68 15.4H32V21H4v-6h16.58A3.67 3.67 0 0 1 19 13.56a3.6 3.6 0 0 1-.26-.56H4V7h16.71l1.15-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.38ZM4 29v-6h28v6Z"/>',

  outlineBadged:
    '<path d="M6 9h2v2H6zm0 8h2v2H6zm4 0h14v2H10zm-4 8h2v2H6zm4 0h14v2H10zm0-14h14v-.51A7.5 7.5 0 0 1 23.13 9H10Z"/><path d="M30 13.5a7.5 7.5 0 0 1-2.68-.5H4V7h18.57a7.5 7.5 0 0 1-.07-1 7.5 7.5 0 0 1 .07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.46 7.46 0 0 1-4 1.16M4 15h28v6H4Zm0 14v-6h28v6Z"/>',

  solid:
    '<path d="M2 22h32v-8H2Zm8-5h14v2H10Zm-4 0h2v2H6ZM32 4H4a2 2 0 0 0-2 2v6h32V6a2 2 0 0 0-2-2M8 9H6V7h2Zm16 0H10V7h14ZM2 30a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-6H2Zm8-3h14v2H10Zm-4 0h2v2H6Z"/>',

  solidAlerted:
    '<path d="M2 30a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-6H2Zm8-3h14v2H10Zm-4 0h2v2H6ZM19 9.89l.56-.89H10V7h10.71l1.73-3H4a2 2 0 0 0-2 2v6h16.57A3.67 3.67 0 0 1 19 9.89M8 9H6V7h2Zm25.68 6.4H22.23a3.69 3.69 0 0 1-2.88-1.4H2v8h32v-6.62ZM8 19H6v-2h2Zm16 0H10v-2h14Z"/>',

  solidBadged:
    '<path d="M2 14v8h32v-8Zm6 5H6v-2h2Zm16 0H10v-2h14ZM2 30a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-6H2Zm8-3h14v2H10Zm-4 0h2v2H6ZM23.13 9H10V7h12.57a7.5 7.5 0 0 1-.07-1 7.5 7.5 0 0 1 .28-2H4a2 2 0 0 0-2 2v6h23.51a7.5 7.5 0 0 1-2.38-3M8 9H6V7h2Z"/>',
};

export const rackServerIconName = 'rack-server';
export const rackServerIcon: IconShapeTuple = [rackServerIconName, renderIcon(icon)];
