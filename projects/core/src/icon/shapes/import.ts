/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M28 4H14.87L8 10.86V15h2v-1.39h7.61V6H28v24H8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-12 8h-6v-.32L15.7 6h.3z" clip-rule="evenodd"/><path d="M11.618 27.273a1 1 0 0 1 .322-.993L15.23 23H3a1 1 0 1 1 0-2h12.2l-3.29-3.27a1 1 0 0 1 1.41-1.41L19 22l-5.65 5.69a1 1 0 0 1-1.732-.417"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path fill-rule="evenodd" d="M23.16 4h-8.29L8 10.86V15h2v-1.39h7.61V6h4.35zM10 12h6V6h-.3L10 11.68z" clip-rule="evenodd"/><path d="M28 15.037h2V30a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2h20z"/><path d="M11.94 26.28a1 1 0 1 0 1.41 1.41L19 22l-5.68-5.68a1 1 0 0 0-1.41 1.41L15.2 21H3a1 1 0 1 0 0 2h12.23z"/>',

  outlineBadged:
    '<path fill-rule="evenodd" d="M17.61 13.61H10V15H8v-4.14L14.87 4h7.91a7.5 7.5 0 0 0-.28 2h-4.89zM15.7 6 10 11.69V12h6V6z" clip-rule="evenodd"/><path d="M28 13.22V30H8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V13.5a7.5 7.5 0 0 1-2-.28"/><path d="M11.618 27.273a1 1 0 0 1 .322-.993L15.23 23H3a1 1 0 1 1 0-2h12.2l-3.29-3.27a1 1 0 0 1 1.41-1.41L19 22l-5.65 5.69a1 1 0 0 1-1.732-.417M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',

  solid:
    '<path fill-rule="evenodd" d="M28 4H14.87L8 10.86V21H3a1 1 0 1 0 0 2h5v7a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M8 23h7.23l-3.32 3.27a1 1 0 0 0 1.41 1.41L19 22l-5.64-5.66a1 1 0 0 0-1.41 1.41L15.2 21H8zm8-11h-6v-.32L15.69 6H16z" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path fill-rule="evenodd" d="m23.16 4-3.624 6.039a3.19 3.19 0 0 0-.115 3.35 3.28 3.28 0 0 0 2.919 1.648H30V30a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-7h7.23l-3.32 3.27a1 1 0 0 0 1.41 1.41L19 22l-5.64-5.66a1 1 0 0 0-1.41 1.41L15.2 21H8V10.86L14.87 4zM10 12h6V6h-.31L10 11.68z" clip-rule="evenodd"/><path d="M8 21H3a1 1 0 1 0 0 2h5z"/>',

  solidBadged:
    '<path fill-rule="evenodd" d="M22.5 6a7.5 7.5 0 0 1 .28-2h-7.91L8 10.86V21H3a1 1 0 1 0 0 2h5v7a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V13.5A7.5 7.5 0 0 1 22.5 6M8 23h7.23l-3.32 3.27a1 1 0 0 0 1.41 1.41L19 22l-5.64-5.66a1 1 0 0 0-1.41 1.41L15.2 21H8zm8-11h-6v-.32L15.69 6H16z" clip-rule="evenodd"/><path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',
};

export const importIconName = 'import';
export const importIcon: IconShapeTuple = [importIconName, renderIcon(icon)];
