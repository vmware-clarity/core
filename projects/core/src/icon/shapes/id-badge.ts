/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 22a4.23 4.23 0 1 0-4.23-4.23A4.23 4.23 0 0 0 18 22m0-6.86a2.63 2.63 0 1 1-2.63 2.63A2.63 2.63 0 0 1 18 15.14M22 4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v7h8Zm-2 5h-4V4h4Zm6 21v-2.3a1.12 1.12 0 0 0-.26-.73A9.9 9.9 0 0 0 18 23.69 9.9 9.9 0 0 0 10.26 27a1.13 1.13 0 0 0-.26.73V30h1.6v-2.13a8.33 8.33 0 0 1 6.4-2.58 8.33 8.33 0 0 1 6.4 2.59V30Z"/><path d="M28 6h-4v2h4v24H8V8h4V6H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/>',

  outlineAlerted:
    '<path d="M18 22a4.23 4.23 0 1 0-4.23-4.23A4.23 4.23 0 0 0 18 22m0-6.86a2.63 2.63 0 1 1-2.63 2.63A2.63 2.63 0 0 1 18 15.14M10.26 27a1.13 1.13 0 0 0-.26.73V30h1.6v-2.13a8.33 8.33 0 0 1 6.4-2.58 8.33 8.33 0 0 1 6.4 2.59V30H26v-2.3a1.12 1.12 0 0 0-.26-.73A9.9 9.9 0 0 0 18 23.69 9.9 9.9 0 0 0 10.26 27M19 9.89l.56-.89H16V4h4v4.24l2-3.46V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v7h4.64A3.7 3.7 0 0 1 19 9.89"/><path d="M28 15.4V32H8V8h4V6H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V15.4Z"/>',

  outlineBadged:
    '<path d="M18 22a4.23 4.23 0 1 0-4.23-4.23A4.23 4.23 0 0 0 18 22m0-6.86a2.63 2.63 0 1 1-2.63 2.63A2.63 2.63 0 0 1 18 15.14M22 4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v7h8Zm-2 5h-4V4h4Zm-9.74 18a1.13 1.13 0 0 0-.26.73V30h1.6v-2.13a8.33 8.33 0 0 1 6.4-2.58 8.33 8.33 0 0 1 6.4 2.59V30H26v-2.3a1.12 1.12 0 0 0-.26-.73A9.9 9.9 0 0 0 18 23.69 9.9 9.9 0 0 0 10.26 27"/><path d="M28 13.22V32H8V8h4V6H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13.5a7.5 7.5 0 0 1-2-.28"/>',

  solid:
    '<circle cx="18" cy="17.77" r="4.23"/><path d="M21 4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6h6ZM10.26 27a1.13 1.13 0 0 0-.26.73V30h16v-2.3a1.12 1.12 0 0 0-.26-.73A9.9 9.9 0 0 0 18 23.69 9.9 9.9 0 0 0 10.26 27"/><path d="M28 6h-5v2h5v24H8V8h5V6H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/>',

  solidAlerted:
    '<path d="m19 9.89 2-3.39V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6h4Z"/><circle cx="18" cy="17.77" r="4.23"/><path d="M10.26 27a1.13 1.13 0 0 0-.26.73V30h16v-2.3a1.12 1.12 0 0 0-.26-.73A9.9 9.9 0 0 0 18 23.69 9.9 9.9 0 0 0 10.26 27"/><path d="M28 15.4V32H8V8h5V6H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V15.4Z"/>',

  solidBadged:
    '<circle cx="18" cy="17.77" r="4.23"/><path d="M21 4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6h6ZM10.26 27a1.13 1.13 0 0 0-.26.73V30h16v-2.3a1.12 1.12 0 0 0-.26-.73A9.9 9.9 0 0 0 18 23.69 9.9 9.9 0 0 0 10.26 27"/><path d="M28 13.22V32H8V8h5V6H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13.5a7.5 7.5 0 0 1-2-.28"/>',
};

export const idBadgeIconName = 'id-badge';
export const idBadgeIcon: IconShapeTuple = [idBadgeIconName, renderIcon(icon)];
