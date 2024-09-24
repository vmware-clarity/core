/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M4 17h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2m0-2V8h11v7zm11 15H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m6-13h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H21a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2m0-9v7h11V8zM4 28v-7h11v7zm28 2H21a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m-11-2v-7h11v7z" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.896 1.611-5.681 9.47c-.27.382-.294.879-.064 1.284.23.406.678.652 1.156.636h11.374a1.28 1.28 0 0 0 1.155-.636 1.19 1.19 0 0 0-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61M21.93 6H21a2 2 0 0 0-2 2v3.574a3.2 3.2 0 0 1 .528-1.57z"/><path d="M19 11.973V15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-.01q-.171.015-.344.011H22.332q-.094.002-.187-.001H21v-.25a3.25 3.25 0 0 1-1.587-1.396 3.2 3.2 0 0 1-.413-1.38"/><path fill-rule="evenodd" d="M15 17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4 8v7h11V8zm0 22h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2m0-9v7h11v-7zm17 9h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H21a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2m0-9v7h11v-7z" clip-rule="evenodd"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M32 12.71V15H21V8h2.29A7 7 0 0 1 23 6h-2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-3.255a7 7 0 0 1-2 .965"/><path fill-rule="evenodd" d="M15 17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4 8v7h11V8zm0 22h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2m0-9v7h11v-7zm17 9h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H21a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2m0-9v7h11v-7z" clip-rule="evenodd"/>',

  solid:
    '<path d="M4 17h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2m17 0h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H21a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2m-6 13H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m6 0h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H21a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2"/>',

  solidAlerted:
    '<path d="m26.912 1.615-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.609"/><path d="m21.948 6-2.404 4.008a3.2 3.2 0 0 0-.116 3.35 3.28 3.28 0 0 0 2.92 1.647h11.324q.165.005.328-.01V15a2 2 0 0 1-2 2H21a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM15 17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4 30h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2m28 0H21a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M34 11.745A7 7 0 0 1 23 6h-2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2zM15 17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4 30h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2m28 0H21a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"/>',
};

export const gridChartIconName = 'grid-chart';
export const gridChartIcon: IconShapeTuple = [gridChartIconName, renderIcon(icon)];
