/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10 10H4v2h8V4h-2zm0 10H4v2h8v-8h-2zm10 0h-6v2h8v-8h-2zM10 30H4v2h8v-8h-2zm10 0h-6v2h8v-8h-2zM30 4v6h-6v2h8V4zm-10 6h-6v2h8V4h-2zm10 10h-6v2h8v-8h-2zm0 10h-6v2h8v-8h-2z"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61M30 15.037h2V22h-8v-2h6zm-10-.906a3.3 3.3 0 0 0 2 .895V22h-8v-2h6zm2-8.199V4h-2v5.266zM19.56 10l-.024.039A3.2 3.2 0 0 0 19.007 12H14v-2zM4 10h6V4h2v8H4zm0 10h6v-6h2v8H4zm0 10h6v-6h2v8H4zm10 0h6v-6h2v8h-8zm10 0h6v-6h2v8h-8z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-5.745-1a7 7 0 0 0 2.137 2H24v-2zM4 10h6V4h2v8H4zm0 10h6v-6h2v8H4zm10 0h6v-6h2v8h-8zM4 30h6v-6h2v8H4zm10 0h6v-6h2v8h-8zm0-20h6V4h2v8h-8zm10 10h6v-6h2v8h-8zm0 10h6v-6h2v8h-8z"/>',

  solid:
    '<path d="M4 12h8V4H4zm10 20h8v-8h-8zM4 32h8v-8H4zm0-10h8v-8H4zm20 10h8v-8h-8zm0-28v8h8V4zm0 18h8v-8h-8zm-10 0h8v-8h-8zm0-10h8V4h-8z"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61M24 15.037h8V22h-8zM19.87 14A3.3 3.3 0 0 0 22 15.026V22h-8v-8zM22 5.932l-2.464 4.107A3.2 3.2 0 0 0 19.007 12H14V4h8zM12 12H4V4h8zm10 20h-8v-8h8zm-10 0H4v-8h8zm0-10H4v-8h8zm20 10h-8v-8h8z"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-6-1.392A7.04 7.04 0 0 0 26.392 12H24zM12 12H4V4h8zm10 20h-8v-8h8zm-10 0H4v-8h8zm0-10H4v-8h8zm20 10h-8v-8h8zm0-10h-8v-8h8zm-10 0h-8v-8h8zm0-10h-8V4h8z"/>',
};

export const applicationsIconName = 'applications';
export const applicationsIcon: IconShapeTuple = [applicationsIconName, renderIcon(icon)];
