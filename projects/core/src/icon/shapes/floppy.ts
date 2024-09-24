/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27.36 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8.78ZM25 30H11v-8h14Zm5 0h-3v-8a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v8H6V6h4v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2H12V6h14.51L30 9.59Z"/>',

  outlineAlerted:
    '<path d="M30 15.4V30h-3v-8a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v8H6V6h4v6a2 2 0 0 0 2 2h7.35a3.54 3.54 0 0 1-.77-2H12V6h9.29l1.15-2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V15.4ZM25 30H11v-8h14Z"/>',

  outlineBadged:
    '<path d="M30 13.5V30h-3v-8a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v8H6V6h4v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-1.68l-.43-.3H12V6h10.5a7.5 7.5 0 0 1 .28-2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V13.22a7.5 7.5 0 0 1-2 .28M25 30H11v-8h14Z"/>',

  solid:
    '<path d="M27.36 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8.78ZM26 30H10v-8.5a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 1.5 1.5Zm-2-16H12a2 2 0 0 1-2-2V6h2v6h14a2 2 0 0 1-2 2"/>',

  solidAlerted:
    '<path d="M22.23 15.4a3.69 3.69 0 0 1-2.88-1.4H12a2 2 0 0 1-2-2V6h2v6h6.58A3.67 3.67 0 0 1 19 9.89L22.45 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V15.4ZM26 30H10v-8.5a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 1.5 1.5Z"/>',

  solidBadged:
    '<path d="M30 13.5a7.46 7.46 0 0 1-4-1.18A2 2 0 0 1 24 14H12a2 2 0 0 1-2-2V6h2v6h13.54a7.45 7.45 0 0 1-2.76-8H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V13.22a7.5 7.5 0 0 1-2 .28M26 30H10v-8.5a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 1.5 1.5Z"/>',
};

export const floppyIconName = 'floppy';
export const floppyIcon: IconShapeTuple = [floppyIconName, renderIcon(icon)];
