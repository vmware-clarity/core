/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 9H16.42l-2.31-3.18A2 2 0 0 0 12.49 5H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m0 20H6V13h7.31a2 2 0 0 0 2-2H6V7h6.49l2.61 3.59a1 1 0 0 0 .81.41H30Z"/>',
  outlineAlerted:
    '<path d="M30 15.4V29H6V13h7.31a2 2 0 0 0 2-2H6V7h6.49l2.61 3.59a1 1 0 0 0 .81.41h2.73A3.7 3.7 0 0 1 19 9.89l.56-.89h-3.14l-2.31-3.18A2 2 0 0 0 12.49 5H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V15.4Z"/>',
  outlineBadged:
    '<path d="M30 13.5V29H6V13h7.31a2 2 0 0 0 2-2H6V7h6.49l2.61 3.59a1 1 0 0 0 .81.41h8.51a7.5 7.5 0 0 1-1.29-2h-6.71l-2.31-3.18A2 2 0 0 0 12.49 5H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V13.22a7.5 7.5 0 0 1-2 .28"/>',
  solid:
    '<path d="M30 9H16.42l-2.31-3.18A2 2 0 0 0 12.49 5H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2M6 11V7h6.49l2.72 4Z"/>',
  solidAlerted:
    '<path d="M22.23 15.4A3.68 3.68 0 0 1 19 9.89l.56-.89h-3.14l-2.31-3.18A2 2 0 0 0 12.49 5H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V15.4ZM6 11V7h6.49l2.72 4Z"/>',
  solidBadged:
    '<path d="M30 13.5A7.5 7.5 0 0 1 23.13 9h-6.71l-2.31-3.18A2 2 0 0 0 12.49 5H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V13.22a7.5 7.5 0 0 1-2 .28M6 11V7h6.49l2.72 4Z"/>',
};

export const folderIconName = 'folder';
export const folderIcon: IconShapeTuple = [folderIconName, renderIcon(icon)];
