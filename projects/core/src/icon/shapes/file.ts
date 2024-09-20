/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21.89 4H7.83A1.88 1.88 0 0 0 6 5.91v24.18A1.88 1.88 0 0 0 7.83 32h20.34A1.88 1.88 0 0 0 30 30.09V11.92Zm-.3 2.49 6 5.9h-6ZM8 30V6h12v8h8v16Z"/>',

  outlineAlerted:
    '<path d="M28 15.4V30H8V6h12v2.25l2.25-3.9-.36-.35H7.83A1.88 1.88 0 0 0 6 5.91v24.18A1.88 1.88 0 0 0 7.83 32h20.34A1.88 1.88 0 0 0 30 30.09V15.4Z"/>',

  outlineBadged:
    '<path d="M21.59 12.39v-5.9l1.07 1a7.3 7.3 0 0 1 0-2.82L21.89 4H7.83A1.88 1.88 0 0 0 6 5.91v24.18A1.88 1.88 0 0 0 7.83 32h20.34A1.88 1.88 0 0 0 30 30.09V13.5a7.45 7.45 0 0 1-3.91-1.11ZM28 30H8V6h12v8h8Z"/>',

  solid:
    '<path d="M21.89 4H7.83A1.88 1.88 0 0 0 6 5.91v24.18A1.88 1.88 0 0 0 7.83 32h20.34A1.88 1.88 0 0 0 30 30.09V11.92ZM21 13V5.84L28.3 13Z"/>',

  solidAlerted:
    '<path d="M22.2 15.4c-2 0-3.7-1.6-3.7-3.6 0-.7.2-1.3.5-1.9l3.2-5.5-.3-.4H7.8C6.8 4 6 4.9 6 5.9v24.2c0 1 .8 1.9 1.8 1.9h20.3c1 0 1.8-.9 1.8-1.9V15.4z"/>',

  solidBadged:
    '<path d="M27.25 13H21V5.84l1.64 1.6a7.3 7.3 0 0 1 0-2.74l-.75-.7H7.83A1.88 1.88 0 0 0 6 5.91v24.18A1.88 1.88 0 0 0 7.83 32h20.34A1.88 1.88 0 0 0 30 30.09V13.5a7.5 7.5 0 0 1-2.75-.5"/>',
};

export const fileIconName = 'file';
export const fileIcon: IconShapeTuple = [fileIconName, renderIcon(icon)];
