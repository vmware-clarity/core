/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M4 6h28a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m5 12h18a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2m0 4h10a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2m23 6H4V8h28zm-5-14H9a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M4 6h28a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m5 16h10a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2m18-4H9a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2M9 14h18a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2" clip-rule="evenodd"/>',
};

export const detailsIconName = 'details';
export const detailsIcon: IconShapeTuple = [detailsIconName, renderIcon(icon)];
