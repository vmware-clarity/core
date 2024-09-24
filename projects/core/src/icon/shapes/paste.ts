/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 12h-4v2h4v2h2v-2a2 2 0 0 0-2-2m0 6h2v6h-2zm0 12h-2v2h2a2 2 0 0 0 2-2v-4h-2Zm-6-8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2M6 6h16v16H6Zm14 24h6v2h-6zm-6-4h-2v4a2 2 0 0 0 2 2h4v-2h-4Z"/>',
  solid:
    '<path d="M30 12h-4v2h4v2h2v-2a2 2 0 0 0-2-2m0 6h2v6h-2zm0 12h-2v2h2a2 2 0 0 0 2-2v-4h-2Z"/><rect width="20" height="20" x="4" y="4" rx="2" ry="2"/><path d="M20 30h6v2h-6zm-6-4h-2v4a2 2 0 0 0 2 2h4v-2h-4Z"/>',
};

export const pasteIconName = 'paste';
export const pasteIcon: IconShapeTuple = [pasteIconName, renderIcon(icon)];
