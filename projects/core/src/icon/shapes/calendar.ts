/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6"/><path d="M8 14h2v2H8zm6 0h2v2h-2zm6 0h2v2h-2zm6 0h2v2h-2zM8 19h2v2H8zm6 0h2v2h-2zm6 0h2v2h-2zm6 0h2v2h-2zM8 24h2v2H8zm6 0h2v2h-2zm6 0h2v2h-2zm6 0h2v2h-2zM10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1m16 0a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1M13 6h10v2H13z"/>',
  outlineAlerted:
    '<path d="M33.68 15.4H32V30H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V15.38Z"/><path d="M8 14h2v2H8zm6 0h2v2h-2zm-6 5h2v2H8zm6 0h2v2h-2zm6 0h2v2h-2zm6 0h2v2h-2zM8 24h2v2H8zm6 0h2v2h-2zm6 0h2v2h-2zm6 0h2v2h-2zM10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1m11.29-4H13v2h7.14z"/>',
  outlineBadged:
    '<path d="M32 13.22V30H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V12.34a7.5 7.5 0 0 1-2 .88"/><path d="M8 14h2v2H8zm6 0h2v2h-2zm6 0h2v2h-2zm6 0h2v2h-2zM8 19h2v2H8zm6 0h2v2h-2zm6 0h2v2h-2zm6 0h2v2h-2zM8 24h2v2H8zm6 0h2v2h-2zm6 0h2v2h-2zm6 0h2v2h-2zM10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1m12.5-4H13v2h9.78a7.5 7.5 0 0 1-.28-2"/>',
  solid:
    '<path d="M32.25 6h-4v3a2.2 2.2 0 1 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6M10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z"/><path d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1m16 0a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"/>',
  solidAlerted:
    '<path d="M33.68 15.4H22.23A3.68 3.68 0 0 1 19 9.89L21.29 6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V15.38ZM10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm6 5h-2v-2h2Zm0-5h-2v-2h2Z"/><path d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"/>',
  solidBadged:
    '<path d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"/><path d="M30 13.5A7.5 7.5 0 0 1 22.5 6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V12.34a7.45 7.45 0 0 1-4 1.16M10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z"/>',
};

export const calendarIconName = 'calendar';
export const calendarIcon: IconShapeTuple = [calendarIconName, renderIcon(icon)];
