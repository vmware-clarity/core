/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h28v2.2H4Zm0 22V10.8h28V29Z"/><path d="M17 23h6v2h-6zM7 15.68l6.79 3.12L7 21.91v2.2l9.6-4.41v-1.81L7 13.48z"/>',

  outlineAlerted:
    '<path d="M17 23h6v2h-6zM7 24.11l9.6-4.41v-1.81L7 13.48v2.2l6.79 3.12L7 21.91z"/><path d="M33.68 15.4H32V29H4V10.8h14.68a3.7 3.7 0 0 1 .32-.91l.4-.69H4V7h16.71l1.15-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.38Z"/>',

  outlineBadged:
    '<path d="M17 23h6v2h-6zM7 24.11l9.6-4.41v-1.81L7 13.48v2.2l6.79 3.12L7 21.91z"/><path d="M32 13.22V29H4V10.8h20.24a7.5 7.5 0 0 1-1-1.6H4V7h18.57a7.5 7.5 0 0 1-.07-1 7.5 7.5 0 0 1 .07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.5 7.5 0 0 1-2 .88"/>',

  solid:
    '<path d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M6.8 15.81v-2.64l10 4.59v2.08l-10 4.59v-2.65l6.51-3Zm16.6 9.59H17V23h6.4ZM4 9.2V7h28v2.2Z"/>',

  solidAlerted:
    '<path d="M33.68 15.4H22.23A3.68 3.68 0 0 1 19 9.89l.4-.69H4V7h16.71l1.15-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.38ZM16.8 19.83l-10 4.59v-2.64l6.51-3-6.51-3v-2.61l10 4.59Zm6.6 5.57H17V23h6.4Z"/>',

  solidBadged:
    '<path d="M30 13.5a7.49 7.49 0 0 1-6.78-4.3H4V7h18.57a7.5 7.5 0 0 1-.07-1 7.5 7.5 0 0 1 .07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.46 7.46 0 0 1-4 1.16m-13.2 6.33-10 4.59v-2.64l6.51-3-6.51-3v-2.61l10 4.59Zm6.6 5.57H17V23h6.4Z"/>',
};

export const terminalIconName = 'terminal';
export const terminalIcon: IconShapeTuple = [terminalIconName, renderIcon(icon)];
