/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23 26a1 1 0 0 1-1 1H8c-.22 0-.43.2-.61.33L4 30V14a1 1 0 0 1 1-1h3.86v-2H5a3 3 0 0 0-3 3v18a1 1 0 0 0 .56.89 1 1 0 0 0 1-.1L8.71 29h13.44A2.77 2.77 0 0 0 25 26.13V25h-2Z"/><path d="M31 4H14a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h13.55l4.78 3.71a1 1 0 0 0 1 .11 1 1 0 0 0 .57-.9V7A3 3 0 0 0 31 4m1 18.94-3.5-2.73a1 1 0 0 0-.61-.21H14a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h17a1.1 1.1 0 0 1 1 1.06Z"/>',

  outlineBadged:
    '<path d="M23 26a1 1 0 0 1-1 1H8c-.22 0-.43.2-.61.33L4 30V14a1 1 0 0 1 1-1h3.86v-2H5a3 3 0 0 0-3 3v18a1 1 0 0 0 .56.89 1 1 0 0 0 1-.1L8.71 29h13.44A2.77 2.77 0 0 0 25 26.13V25h-2Z"/><path d="M32 13.22v9.72l-3.5-2.73a1 1 0 0 0-.61-.21H14a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.5a7.5 7.5 0 0 1 .28-2H14a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h13.55l4.78 3.71a1 1 0 0 0 1 .11 1 1 0 0 0 .57-.9V12.37a7.5 7.5 0 0 1-1.9.85"/>',

  solid:
    '<path d="M8 19v-8H5a3 3 0 0 0-3 3v18a1 1 0 0 0 .56.89 1 1 0 0 0 1-.1L8.71 29h13.44A2.77 2.77 0 0 0 25 26.13V25H14a6 6 0 0 1-6-6"/><path d="M31 4H14a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h13.55l4.78 3.71a1 1 0 0 0 1 .11 1 1 0 0 0 .57-.9V7A3 3 0 0 0 31 4"/>',

  solidBadged:
    '<path d="M8 19v-8H5a3 3 0 0 0-3 3v18a1 1 0 0 0 .56.89 1 1 0 0 0 1-.1L8.71 29h13.44A2.77 2.77 0 0 0 25 26.13V25H14a6 6 0 0 1-6-6"/><path d="M30 13.5A7.48 7.48 0 0 1 22.78 4H14a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h13.55l4.78 3.71a1 1 0 0 0 1 .11 1 1 0 0 0 .57-.9V12.37A7.45 7.45 0 0 1 30 13.5"/>',
};

export const talkBubblesIconName = 'talk-bubbles';
export const talkBubblesIcon: IconShapeTuple = [talkBubblesIconName, renderIcon(icon)];
