/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 22H4V8h28Z"/><path d="M9 14h18a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m0 4h18a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m0 4h10a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2"/>',
  solid:
    '<path d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M19 22H9a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m8-4H9a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0-4H9a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2"/>',
};

export const detailsIconName = 'details';
export const detailsIcon: IconShapeTuple = [detailsIconName, renderIcon(icon)];
