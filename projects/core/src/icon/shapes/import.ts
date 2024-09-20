/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28 4H14.87L8 10.86V15h2v-1.39h7.61V6H28v24H8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-12 8h-6v-.32L15.7 6h.3Z"/><path d="M11.94 26.28a1 1 0 1 0 1.41 1.41L19 22l-5.68-5.68a1 1 0 0 0-1.41 1.41L15.2 21H3a1 1 0 1 0 0 2h12.23Z"/>',

  outlineAlerted:
    '<path d="M11.94 26.28a1 1 0 1 0 1.41 1.41L19 22l-5.68-5.68a1 1 0 0 0-1.41 1.41L15.2 21H3a1 1 0 1 0 0 2h12.23Z"/><path d="M28 15.4V30H8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V15.4Zm-18-1.79h7.61V6h3.68l1.15-2h-7.57L8 10.86V15h2Zm0-1.92L15.7 6h.3v6h-6Z"/>',

  outlineBadged:
    '<path d="M11.94 26.28a1 1 0 1 0 1.41 1.41L19 22l-5.68-5.68a1 1 0 0 0-1.41 1.41L15.2 21H3a1 1 0 1 0 0 2h12.23Z"/><path d="M28 13.22V30H8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V13.5a7.5 7.5 0 0 1-2-.28m-18 .39h7.61V6h4.89a7.5 7.5 0 0 1 .28-2h-7.91L8 10.86V15h2Zm0-1.92L15.7 6h.3v6h-6Z"/>',

  solid:
    '<path d="M3 21a1 1 0 1 0 0 2h5v-2ZM28 4H14.87L8 10.86V21h7.2l-3.25-3.25a1 1 0 0 1 1.41-1.41L19 22l-5.68 5.68a1 1 0 0 1-1.41-1.41L15.23 23H8v7a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-12 8h-6v-.32L15.69 6H16Z"/>',

  solidAlerted:
    '<path d="M3 21a1 1 0 1 0 0 2h5v-2Zm19.23-5.6A3.68 3.68 0 0 1 19 9.89L22.45 4h-7.58L8 10.86V21h7.2l-3.25-3.25a1 1 0 0 1 1.41-1.41L19 22l-5.68 5.68a1 1 0 0 1-1.41-1.41L15.23 23H8v7a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V15.4ZM16 12h-6v-.32L15.69 6H16Z"/>',

  solidBadged:
    '<path d="M3 21a1 1 0 1 0 0 2h5v-2ZM22.5 6a7.5 7.5 0 0 1 .28-2h-7.91L8 10.86V21h7.2l-3.25-3.25a1 1 0 0 1 1.41-1.41L19 22l-5.68 5.68a1 1 0 0 1-1.41-1.41L15.23 23H8v7a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V13.5A7.5 7.5 0 0 1 22.5 6M16 12h-6v-.32L15.69 6H16Z"/>',
};

export const importIconName = 'import';
export const importIcon: IconShapeTuple = [importIconName, renderIcon(icon)];
