/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M6 13.61h7.61V6H24v8.38h2V6a2 2 0 0 0-2-2H10.87L4 10.87V30a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2H6zm22.32 2.74a1 1 0 0 0-1.41 1.41L30.16 21H18a1 1 0 1 0 0 2h12.19l-3.28 3.28a1 1 0 1 0 1.41 1.41L34 22zM11.69 6 6 11.69V12h6V6z" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path fill-rule="evenodd" d="m23.16 4-1.2 2h-8.35v7.61H6V30h20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10.87L10.87 4zM6 11.69 11.69 6H12v6H6z" clip-rule="evenodd"/><path d="M26.962 16.402a1 1 0 0 1 1.358-.052L34 22l-5.68 5.69a1 1 0 1 1-1.41-1.41L30.19 23H18a1 1 0 1 1 0-2h12.16l-3.25-3.24a1 1 0 0 1 .052-1.358"/>',

  outlineBadged:
    '<path fill-rule="evenodd" d="M13.61 13.61H6V30h20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10.87L10.87 4h11.91a7.5 7.5 0 0 0-.28 2h-8.89zM11.69 6 6 11.69V12h6V6z" clip-rule="evenodd"/><path d="M26 12.34a7.5 7.5 0 0 1-2-1.85v3.89h2zm.962 4.062a1 1 0 0 1 1.358-.052L34 22l-5.68 5.69a1 1 0 1 1-1.41-1.41L30.19 23H18a1 1 0 1 1 0-2h12.16l-3.25-3.24a1 1 0 0 1 .052-1.358M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',

  solid:
    '<path fill-rule="evenodd" d="M16 22c0-.55.45-1 1-1h8v2h-8c-.55 0-1-.45-1-1m9 1h5.19l-3.28 3.28a.98.98 0 0 0-.32.99c.09.37.37.65.74.74s.75-.04.99-.32L34 22l-5.68-5.65c-.4-.34-.99-.32-1.36.05s-.39.96-.05 1.36L30.16 21H25V6c0-1.1-.9-2-2-2H10.87L4 10.86V30c0 1.1.9 2 2 2h17c1.1 0 2-.9 2-2zM12 12H6v-.32L11.69 6H12z" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path fill-rule="evenodd" d="m23.156 4.006-3.62 6.033a3.19 3.19 0 0 0-.115 3.35 3.28 3.28 0 0 0 2.919 1.648H25V21h-8c-.55 0-1 .45-1 1s.45 1 1 1h8v7c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V10.86L10.87 4H23q.078 0 .156.006M6 12h6V6h-.31L6 11.68z" clip-rule="evenodd"/><path d="M25 23h5.19l-3.28 3.28a.98.98 0 0 0-.32.99c.09.37.37.65.74.74s.75-.04.99-.32L34 22l-5.68-5.65c-.4-.34-.99-.32-1.36.05s-.39.96-.05 1.36L30.16 21H25z"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M23.284 4.02A7 7 0 0 0 23 6a6.98 6.98 0 0 0 2 4.899V21h-8c-.55 0-1 .45-1 1s.45 1 1 1h8v7c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V10.86L10.87 4H23q.144 0 .284.02M6 12h6V6h-.31L6 11.68z" clip-rule="evenodd"/><path d="M25 23h5.19l-3.28 3.28a.98.98 0 0 0-.32.99c.09.37.37.65.74.74s.75-.04.99-.32L34 22l-5.68-5.65c-.4-.34-.99-.32-1.36.05s-.39.96-.05 1.36L30.16 21H25z"/>',
};

export const exportIconName = 'export';
export const exportIcon: IconShapeTuple = [exportIconName, renderIcon(icon)];
