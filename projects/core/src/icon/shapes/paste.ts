/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M24 22V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2M6 6h16v16H6z" clip-rule="evenodd"/><path d="M12 26h2v4h4v2h-4a2 2 0 0 1-2-2zm8 4h6v2h-6zm8 0h2v-4h2v4a2 2 0 0 1-2 2h-2zm2-12h2v6h-2zm-4-6h4a2 2 0 0 1 2 2v2h-2v-2h-4z"/>',
  solid:
    '<path d="M4 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 20h2v4h4v2h-4a2 2 0 0 1-2-2zm14 4h-6v2h6zm0-18h4a2 2 0 0 1 2 2v2h-2v-2h-4zm4 6h2v6h-2zm-2 12h2v-4h2v4a2 2 0 0 1-2 2h-2z"/>',
};

export const pasteIconName = 'paste';
export const pasteIcon: IconShapeTuple = [pasteIconName, renderIcon(icon)];
