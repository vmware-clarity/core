/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 24c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6-22H12v2h12zm2-4H10c-1.1 0-2 .9-2 2v30h20V4c0-1.1-.9-2-2-2m0 30H10V4h16zm-2-22H12v2h12z"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path d="M24.36 2H10c-1.1 0-2 .9-2 2v30h20V15.037h-2V32H10V4h13.16z"/><path d="M21.96 6H12v2h8.76zm-2.4 4H12v2h7.007a3.2 3.2 0 0 1 .53-1.961z"/><path fill-rule="evenodd" d="M15 27c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3m2 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1" clip-rule="evenodd"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M24.255 2H10c-1.1 0-2 .9-2 2v30h20V12.71a7 7 0 0 1-2-.965V32H10V4h13.29a7 7 0 0 1 .965-2"/><path d="M23 6H12v2h11.29A7 7 0 0 1 23 6"/><path fill-rule="evenodd" d="M15 27c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3m2 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1" clip-rule="evenodd"/><path d="M12 10h12v2H12z"/>',

  solid:
    '<path d="M18 26c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m8-24H10c-1.1 0-2 .9-2 2v30h20V4c0-1.1-.9-2-2-2m-8 28c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3m6-18H12v-2h12zm0-4H12V6h12z"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61M17 27c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1"/><path fill-rule="evenodd" d="M24.36 2H10c-1.1 0-2 .9-2 2v30h20V15.037h-5.66a3.28 3.28 0 0 1-2.92-1.648A3.2 3.2 0 0 1 19.008 12H12v-2h7.56l1.2-2H12V6h9.96zM15 27c0 1.65 1.35 3 3 3s3-1.35 3-3-1.35-3-3-3-3 1.35-3 3" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M30 10.9a5 5 0 1 0 0-10 5 5 0 0 0 0 10M17 27c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1"/><path fill-rule="evenodd" d="M24.186 2H10c-1.1 0-2 .9-2 2v30h20V12.61A7.02 7.02 0 0 1 23.32 8H12V6h11v-.1c0-1.444.437-2.786 1.186-3.9M15 27c0 1.65 1.35 3 3 3s3-1.35 3-3-1.35-3-3-3-3 1.35-3 3m-3-15h12v-2H12z" clip-rule="evenodd"/>',
};

export const hostIconName = 'host';
export const hostIcon: IconShapeTuple = [hostIconName, renderIcon(icon)];
