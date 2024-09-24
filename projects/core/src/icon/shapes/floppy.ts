/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M27.36 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8.78zM25 30H11v-8h14zm2 0h3V9.59L26.51 6H12v6h14a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V6H6v24h3v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path fill-rule="evenodd" d="M23.16 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V15.037h-2V30h-3v-8a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v8H6V6h4v6a2 2 0 0 0 2 2h7.87a3.23 3.23 0 0 1-.863-2H12V6h9.96zM11 30h14v-8H11z" clip-rule="evenodd"/>',

  outlineBadged:
    '<path fill-rule="evenodd" d="M30 30V13.5a7.5 7.5 0 0 0 2-.28V30a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16.78a7.5 7.5 0 0 0-.28 2H12v6.02h13.57l.43.3A2 2 0 0 1 24 14H12a2 2 0 0 1-2-2V6H6v24h3v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8zm-19 0h14v-8H11z" clip-rule="evenodd"/><path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',

  solid:
    '<path fill-rule="evenodd" d="M27.36 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8.78zM26 30H10v-8.5a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 1.5 1.5zM12 14h12a2 2 0 0 0 2-2H12V6h-2v6a2 2 0 0 0 2 2" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path fill-rule="evenodd" d="M23.16 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V15.037h-9.66A3.3 3.3 0 0 1 19.87 14H12a2 2 0 0 1-2-2V6h2v6h7.007a3.2 3.2 0 0 1 .53-1.961zM10 30h16v-8.5a1.5 1.5 0 0 0-1.5-1.5h-13a1.5 1.5 0 0 0-1.5 1.5z" clip-rule="evenodd"/>',

  solidBadged:
    '<path fill-rule="evenodd" d="M26 12.32a7.46 7.46 0 0 0 4 1.18 7.5 7.5 0 0 0 2-.28V30a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16.78a7.45 7.45 0 0 0 2.76 8H12V6h-2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-1.68M10 30h16v-8.5a1.5 1.5 0 0 0-1.5-1.5h-13a1.5 1.5 0 0 0-1.5 1.5z" clip-rule="evenodd"/><path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',
};

export const floppyIconName = 'floppy';
export const floppyIcon: IconShapeTuple = [floppyIconName, renderIcon(icon)];
