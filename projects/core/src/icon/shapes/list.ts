/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12 24h2v2h-2zm2-4h-2v2h2zm-2-4h2v2h-2zm2-4h-2v2h2zm-2-4h2v2h-2zm12 16h-8v2h8zm-8-4h8v2h-8zm8-4h-8v2h8zm-8-4h8v2h-8zm8-4h-8v2h8z"/><path fill-rule="evenodd" d="M8 2h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 30h20V4H8z" clip-rule="evenodd"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M24.255 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13a7 7 0 0 1-2-.29V32H8V4h15.29a7 7 0 0 1 .965-2"/><path d="M23.29 8H16v2h8v-.392A7 7 0 0 1 23.29 8M14 8h-2v2h2zm0 4h-2v2h2zm0 4h-2v2h2zm0 4h-2v2h2zm-2 4h2v2h-2zm12 0h-8v2h8zm0-4h-8v2h8zm0-4h-8v2h8zm0-4h-8v2h8z"/>',

  solid:
    '<path fill-rule="evenodd" d="M28 2H8c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M14 26h-2v-2h2zm-2-4h2v-2h-2zm2-4h-2v-2h2zm-2-4h2v-2h-2zm2-4h-2V8h2zm2 16h8v-2h-8zm8-4h-8v-2h8zm-8-4h8v-2h-8zm8-4h-8v-2h8zm-8-4h8V8h-8z" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M24.255 2H8c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V13a7 7 0 0 1-6-3.392V10h-8V8h7.29A7 7 0 0 1 23 6c0-1.487.464-2.866 1.255-4M12 26h2v-2h-2zm2-4h-2v-2h2zm-2-4h2v-2h-2zm2-4h-2v-2h2zm-2-4h2V8h-2zm12 16h-8v-2h8zm-8-4h8v-2h-8zm8-4h-8v-2h8zm-8-4h8v-2h-8z" clip-rule="evenodd"/>',
};

export const listIconName = 'list';
export const listIcon: IconShapeTuple = [listIconName, renderIcon(icon)];
