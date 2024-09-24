/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M16.42 10H30a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6.49a2 2 0 0 1 1.62.82zM6 30h24V12H15.91a1 1 0 0 1-.81-.41L12.49 8H6v4h9.31a2 2 0 0 1-2 2H6z" clip-rule="evenodd"/>',
  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path d="M19.56 10h-3.14l-2.31-3.18A2 2 0 0 0 12.49 6H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V15.037h-2V30H6V14h7.31a2 2 0 0 0 2-2H6V8h6.49l2.61 3.59a1 1 0 0 0 .81.41h3.097a3.2 3.2 0 0 1 .53-1.961z"/>',
  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10m2 1.71a7 7 0 0 1-2 .29v17H6V14h7.31a2 2 0 0 0 2-2H6V8h6.49l2.61 3.59a1 1 0 0 0 .81.41h10.482a7 7 0 0 1-2.137-2H16.42l-2.31-3.18A2 2 0 0 0 12.49 6H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2z"/>',
  solid:
    '<path fill-rule="evenodd" d="M16.42 10H30a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6.49a2 2 0 0 1 1.62.82zM6 8v4h9.21l-2.72-4z" clip-rule="evenodd"/>',
  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path fill-rule="evenodd" d="m19.56 10-.024.039a3.19 3.19 0 0 0-.115 3.35 3.28 3.28 0 0 0 2.919 1.648H32V30a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6.49a2 2 0 0 1 1.62.82L16.42 10zM6 12V8h6.49l2.72 4z" clip-rule="evenodd"/>',
  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M32 12.71a7 7 0 0 1-2 .29 6.99 6.99 0 0 1-5.745-3H16.42l-2.31-3.18A2 2 0 0 0 12.49 6H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2zM6 12V8h6.49l2.72 4z" clip-rule="evenodd"/>',
};

export const folderIconName = 'folder';
export const folderIcon: IconShapeTuple = [folderIconName, renderIcon(icon)];
