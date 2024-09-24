/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32.5 3h-29A1.5 1.5 0 0 0 2 4.5v21A1.5 1.5 0 0 0 3.5 27h29a1.5 1.5 0 0 0 1.5-1.5v-21A1.5 1.5 0 0 0 32.5 3M32 25H4V5h28Z"/><path d="M7.7 8.76h20.43l1.81-1.6H6.1V23h1.6zM26 32h-1.74a3.6 3.6 0 0 1-1.5-2.52v-1.35h-1.52v1.37a4.2 4.2 0 0 0 .93 2.5h-8.34a4.2 4.2 0 0 0 .93-2.52v-1.35h-1.52v1.37a3.6 3.6 0 0 1-1.5 2.5h-1.8a1 1 0 1 0 0 2h16.12a.92.92 0 0 0 1-1A1 1 0 0 0 26 32"/>',

  outlineAlerted:
    '<path d="M26 32h-1.74a3.6 3.6 0 0 1-1.5-2.52v-1.35h-1.52v1.37a4.2 4.2 0 0 0 .93 2.5h-8.34a4.2 4.2 0 0 0 .93-2.52v-1.35h-1.52v1.37a3.6 3.6 0 0 1-1.5 2.5h-1.8a1 1 0 1 0 0 2h16.12a.92.92 0 0 0 1-1A1 1 0 0 0 26 32m7.68-16.6H32V25H4V5h17.87L23 3H3.5A1.5 1.5 0 0 0 2 4.5v21A1.5 1.5 0 0 0 3.5 27h29a1.5 1.5 0 0 0 1.5-1.5V15.38Z"/><path d="M7.7 23V8.76h12l.92-1.6H6.1V23z"/>',

  outlineBadged:
    '<path d="M26 32h-1.74a3.6 3.6 0 0 1-1.5-2.52v-1.35h-1.52v1.37a4.2 4.2 0 0 0 .93 2.5h-8.34a4.2 4.2 0 0 0 .93-2.52v-1.35h-1.52v1.37a3.6 3.6 0 0 1-1.5 2.5h-1.8a1 1 0 1 0 0 2h16.12a.92.92 0 0 0 1-1A1 1 0 0 0 26 32M6.1 23h1.6V8.76H23a7.4 7.4 0 0 1-.43-1.6H6.1Z"/><path d="M32 13.22V25H4V5h18.57a7.5 7.5 0 0 1 .55-2H3.5A1.5 1.5 0 0 0 2 4.5v21A1.5 1.5 0 0 0 3.5 27h29a1.5 1.5 0 0 0 1.5-1.5V12.34a7.5 7.5 0 0 1-2 .88"/>',

  solid:
    '<path d="M26 32h-1.74a3.6 3.6 0 0 1-1.5-2.52v-1.35h-9.52v1.37a3.6 3.6 0 0 1-1.5 2.5h-1.8a1 1 0 1 0 0 2h16.12a.92.92 0 0 0 1-1A1 1 0 0 0 26 32m6.5-29h-29A1.5 1.5 0 0 0 2 4.5v21A1.5 1.5 0 0 0 3.5 27h29a1.5 1.5 0 0 0 1.5-1.5v-21A1.5 1.5 0 0 0 32.5 3M31 21.83H5V7h26Z"/>',

  solidAlerted:
    '<path d="M26 32h-1.74a3.6 3.6 0 0 1-1.5-2.52v-1.35h-9.52v1.37a3.6 3.6 0 0 1-1.5 2.5h-1.8a1 1 0 1 0 0 2h16.12a.92.92 0 0 0 1-1A1 1 0 0 0 26 32m7.68-16.6H31v6.43H5V7h15.71L23 3H3.5A1.5 1.5 0 0 0 2 4.5v21A1.5 1.5 0 0 0 3.5 27h29a1.5 1.5 0 0 0 1.5-1.5V15.38Z"/>',

  solidBadged:
    '<path d="M26 32h-1.74a3.6 3.6 0 0 1-1.5-2.52v-1.35h-9.52v1.37a3.6 3.6 0 0 1-1.5 2.5h-1.8a1 1 0 1 0 0 2h16.12a.92.92 0 0 0 1-1A1 1 0 0 0 26 32m5-18.57v8.41H5V7h17.57a7.3 7.3 0 0 1 .55-4H3.5A1.5 1.5 0 0 0 2 4.5v21A1.5 1.5 0 0 0 3.5 27h29a1.5 1.5 0 0 0 1.5-1.5V12.34a7.4 7.4 0 0 1-3 1.09"/>',
};

export const displayIconName = 'display';
export const displayIcon: IconShapeTuple = [displayIconName, renderIcon(icon)];
