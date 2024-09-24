/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M27 8h3c2.21 0 4 1.79 4 4v11h-5v-2h3v-9c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v9h3v2H2V12c0-2.21 1.79-4 4-4h3V4h18zm1 9H8c-.55 0-1 .45-1 1s.45 1 1 1h1v13h18V19h1c.55 0 1-.45 1-1s-.45-1-1-1m-3 13H11V19h14zm0-22H11V6h14zm4 4.04h-2v2h2z" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.609M23.16 4H9v4H6c-2.21 0-4 1.79-4 4v11h5v-2H4v-9c0-1.1.9-2 2-2h13.56l1.2-2H11V6h10.96zM32 15.037h1.664q.169.003.336-.01V23h-5v-2h3z"/><path fill-rule="evenodd" d="M8 17h20c.55 0 1 .45 1 1s-.45 1-1 1h-1v13H9V19H8c-.55 0-1-.45-1-1s.45-1 1-1m3 13h14V19H11z" clip-rule="evenodd"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-3 1.326a7 7 0 0 0 2 .603v1.111h-2zm5 .384V21h-3v2h5V12a4 4 0 0 0-.008-.25 7 7 0 0 1-1.992.96M24.255 10a7 7 0 0 1-.965-2H11V6h12c0-.695.101-1.366.29-2H9v4H6c-2.21 0-4 1.79-4 4v11h5v-2H4v-9c0-1.1.9-2 2-2z"/><path fill-rule="evenodd" d="M8 17h20c.55 0 1 .45 1 1s-.45 1-1 1h-1v13H9V19H8c-.55 0-1-.45-1-1s.45-1 1-1m3 13h14V19H11z" clip-rule="evenodd"/>',

  solid:
    '<path fill-rule="evenodd" d="M30 8h-3V4H9v4H6c-2.21 0-4 1.79-4 4v11h7v9h18v-9h7V12c0-2.21-1.79-4-4-4m-5 22H11V19h14zm0-22H11V6h14zm4 6.04h-2v-2h2z" clip-rule="evenodd"/>',

  solidAlerted:
    '<path fill-rule="evenodd" d="M23.16 4H9v4H6c-2.21 0-4 1.79-4 4v11h7v9h18v-9h7v-7.974q-.167.015-.336.01H22.34a3.28 3.28 0 0 1-2.92-1.647 3.19 3.19 0 0 1 .116-3.35L20.76 8H11V6h10.96zM11 30h14V19H11z" clip-rule="evenodd"/><path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.609"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M33.992 11.75A6.97 6.97 0 0 1 30 13q-.51 0-1-.07v1.11h-2v-1.714A7.02 7.02 0 0 1 23.29 8H11V6h12c0-.695.101-1.366.29-2H9v4H6c-2.21 0-4 1.79-4 4v11h7v9h18v-9h7V12a4 4 0 0 0-.008-.25M11 30h14V19H11z" clip-rule="evenodd"/>',
};

export const printerIconName = 'printer';
export const printerIcon: IconShapeTuple = [printerIconName, renderIcon(icon)];
