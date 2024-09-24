/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29.29 5H27v2h2v25H7V7h2V5H7a1.75 1.75 0 0 0-2 1.69v25.62A1.7 1.7 0 0 0 6.71 34h22.58A1.7 1.7 0 0 0 31 32.31V6.69A1.7 1.7 0 0 0 29.29 5"/><path d="M26 7.33A2.34 2.34 0 0 0 23.67 5h-1.8a4 4 0 0 0-7.75 0h-1.79A2.34 2.34 0 0 0 10 7.33V11h16ZM24 9H12V7.33a.33.33 0 0 1 .33-.33H16V6a2 2 0 0 1 4 0v1h3.67a.33.33 0 0 1 .33.33Zm-13 5h14v2H11zm0 4h14v2H11zm0 4h14v2H11zm0 4h14v2H11z"/>',

  outlineBadged:
    '<path d="M11 14h14v2H11zm0 4h14v2H11zm0 4h14v2H11zm0 4h14v2H11zM23.13 9H12V7.33a.33.33 0 0 1 .33-.33H16V6a2 2 0 0 1 4 0v1h2.57a7.5 7.5 0 0 1-.07-1 7.5 7.5 0 0 1 .07-1h-.7a4 4 0 0 0-7.75 0h-1.79A2.34 2.34 0 0 0 10 7.33V11h14.42a7.5 7.5 0 0 1-1.29-2"/><path d="M30 13.5a7.5 7.5 0 0 1-1-.07V32H7V7h2V5H7a1.75 1.75 0 0 0-2 1.69v25.62A1.7 1.7 0 0 0 6.71 34h22.58A1.7 1.7 0 0 0 31 32.31V13.43a7.5 7.5 0 0 1-1 .07"/>',

  solid:
    '<path d="M29.29 5h-7.12a4.45 4.45 0 0 0-4.11-3A4.46 4.46 0 0 0 14 5H7a1.75 1.75 0 0 0-2 1.69v25.62A1.7 1.7 0 0 0 6.71 34h22.58A1.7 1.7 0 0 0 31 32.31V6.69A1.7 1.7 0 0 0 29.29 5m-18 3a1 1 0 0 1 1-1h3.44v-.69a2.31 2.31 0 1 1 4.63 0V7h3.44a1 1 0 0 1 1 1v2H11.31ZM25 28H11v-2h14Zm0-4H11v-2h14Zm0-4H11v-2h14Zm0-4H11v-2h14Z"/>',

  solidBadged:
    '<path d="M30 13.5a7.49 7.49 0 0 1-6.34-3.5H11.31V8a1 1 0 0 1 1-1h3.44v-.69a2.31 2.31 0 1 1 4.63 0V7h2.19a8 8 0 0 1-.07-1 7.5 7.5 0 0 1 .07-1h-.4a4.45 4.45 0 0 0-4.11-3A4.46 4.46 0 0 0 14 5H7a1.75 1.75 0 0 0-2 1.69v25.62A1.7 1.7 0 0 0 6.71 34h22.58A1.7 1.7 0 0 0 31 32.31V13.43a7.5 7.5 0 0 1-1 .07M25 28H11v-2h14Zm0-4H11v-2h14Zm0-4H11v-2h14Zm0-4H11v-2h14Z"/>',
};

export const clipboardIconName = 'clipboard';
export const clipboardIcon: IconShapeTuple = [clipboardIconName, renderIcon(icon)];
