/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m16.17 25.86-5.36-5.36a1 1 0 0 1 1.41-1.41L16.17 23l8.64-8.64a1 1 0 0 1 1.41 1.41Z"/><path d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6"/><path d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1m16 0a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1M13 6h10v2H13z"/>',
  outlineAlerted:
    '<path d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1m.81 10.5 5.36 5.36 10.05-10.05a1 1 0 0 0 .23-.41H23.8L16.17 23l-3.94-3.94a1 1 0 0 0-1.41 1.41ZM21.29 6H13v2h7.14z"/><path d="M33.68 15.4H32V30H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V15.38Z"/>',
  outlineBadged:
    '<path d="m10.81 20.5 5.36 5.36 10.05-10.05a1 1 0 0 0-1.41-1.41L16.17 23l-3.94-3.94a1 1 0 0 0-1.41 1.41ZM10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"/><path d="M32 13.22V30H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V12.34a7.5 7.5 0 0 1-2 .88"/><path d="M22.5 6H13v2h9.78a7.5 7.5 0 0 1-.28-2"/>',
  solid:
    '<path d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1m16 0a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"/><path d="M32.25 6h-4v3a2.2 2.2 0 0 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6m-6.31 10.58-9.67 9.67L11 20.94A1.36 1.36 0 0 1 12.9 19l3.38 3.38L24 14.66a1.36 1.36 0 1 1 1.93 1.93Z"/>',
  solidAlerted:
    '<path d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"/><path d="M33.68 15.4H26.3a1.34 1.34 0 0 1-.36 1.18l-9.67 9.67L11 20.94A1.36 1.36 0 0 1 12.9 19l3.38 3.38 7-7h-1A3.68 3.68 0 0 1 19 9.89L21.29 6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V15.38Z"/>',
  solidBadged:
    '<path d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"/><path d="M30 13.5A7.5 7.5 0 0 1 22.5 6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V12.34a7.45 7.45 0 0 1-4 1.16m-4.06 3.08-9.67 9.67L11 20.94A1.36 1.36 0 0 1 12.9 19l3.38 3.38L24 14.66a1.36 1.36 0 1 1 1.93 1.93Z"/>',
};

export const eventIconName = 'event';
export const eventIcon: IconShapeTuple = [eventIconName, renderIcon(icon)];
