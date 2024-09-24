/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.91 18.47 30.78 8.41A2 2 0 0 0 28.87 7H7.13a2 2 0 0 0-1.91 1.41L2.09 18.48a2 2 0 0 0-.09.59V27a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.94a2 2 0 0 0-.09-.59M32 27H4v-7.94L7.13 9h21.74L32 19.06Z"/><path d="M7.12 22h1.8v3h-1.8zm5 0h1.8v3h-1.8zm4.99 0h1.8v3h-1.8zm4.99 0h1.8v3h-1.8zm5 0h1.8v3h-1.8zM6.23 18h23.69v1.4H6.23z"/>',

  outlineAlerted:
    '<path d="M7.12 22h1.8v3h-1.8zm5 0h1.8v3h-1.8zm4.99 0h1.8v3h-1.8zm4.99 0h1.8v3h-1.8zm5 0h1.8v3h-1.8zM6.23 18h23.69v1.4H6.23z"/><path d="M33.91 18.47 33 15.4h-2.14L32 19.06V27H4v-7.94L7.13 9h12.43l1.15-2H7.13a2 2 0 0 0-1.91 1.41L2.09 18.48a2 2 0 0 0-.09.59V27a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.94a2 2 0 0 0-.09-.59"/>',

  outlineBadged:
    '<path d="M7.12 22h1.8v3h-1.8zm5 0h1.8v3h-1.8zm4.99 0h1.8v3h-1.8zm4.99 0h1.8v3h-1.8zm5 0h1.8v3h-1.8zM6.23 18h23.69v1.4H6.23z"/><path d="m33.91 18.47-1.65-5.32a7.5 7.5 0 0 1-2 .33L32 19.06V27H4v-7.94L7.13 9h16a7.5 7.5 0 0 1-.55-2H7.13a2 2 0 0 0-1.91 1.41L2.09 18.48a2 2 0 0 0-.09.59V27a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.94a2 2 0 0 0-.09-.59"/>',

  solid:
    '<path d="M33.91 18.47 30.78 8.41A2 2 0 0 0 28.87 7H7.13a2 2 0 0 0-1.91 1.41L2.09 18.48a2 2 0 0 0-.09.59V27a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.94a2 2 0 0 0-.09-.59M8.92 25h-1.8v-3h1.8Zm5 0h-1.8v-3h1.8Zm5 0h-1.8v-3h1.8Zm5 0H22.1v-3h1.8Zm5 0H27.1v-3h1.8ZM31 19.4H5V18h26Z"/>',

  solidAlerted:
    '<path d="M33 15.4H22.23A3.68 3.68 0 0 1 19 9.89L20.71 7H7.13a2 2 0 0 0-1.91 1.41L2.09 18.48a2 2 0 0 0-.09.59V27a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.94a2 2 0 0 0-.09-.59ZM8.92 25h-1.8v-3h1.8Zm5 0h-1.8v-3h1.8Zm5 0h-1.8v-3h1.8Zm5 0H22.1v-3h1.8Zm5 0H27.1v-3h1.8ZM31 19.4H5V18h26Z"/>',

  solidBadged:
    '<path d="M32.26 13.15A7.49 7.49 0 0 1 22.57 7H7.13a2 2 0 0 0-1.91 1.41L2.09 18.48a2 2 0 0 0-.09.59V27a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.94a2 2 0 0 0-.09-.59ZM8.92 25h-1.8v-3h1.8Zm5 0h-1.8v-3h1.8Zm5 0h-1.8v-3h1.8Zm5 0H22.1v-3h1.8Zm5 0H27.1v-3h1.8ZM31 19.4H5V18h26Z"/>',
};

export const networkSwitchIconName = 'network-switch';
export const networkSwitchIcon: IconShapeTuple = [networkSwitchIconName, renderIcon(icon)];
