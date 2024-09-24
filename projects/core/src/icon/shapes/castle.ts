/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M33.938 14h-30c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v3h4V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v3h4V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1m-29-2h28V4h-4v3c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V4h-4v3c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V4h-4z" clip-rule="evenodd"/><path d="M30.938 33c0 .55-.45 1-1 1h-22c-.55 0-1-.45-1-1V16h2v16h20V16h2z"/><path fill-rule="evenodd" d="M14.938 27c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-5c0-2.21-1.79-4-4-4s-4 1.79-4 4zm6-5v4h-4v-4c0-1.1.9-2 2-2s2 .9 2 2" clip-rule="evenodd"/>',
  solid:
    '<path d="M33.938 14h-30c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v3h4V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v3h4V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1m-17 8c0-1.1.9-2 2-2s2 .9 2 2v4h-4z"/><path fill-rule="evenodd" d="M6.938 16v17c0 .55.45 1 1 1h22c.55 0 1-.45 1-1V16zm16 11c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1v-5c0-2.21 1.79-4 4-4s4 1.79 4 4z" clip-rule="evenodd"/>',
};

export const castleIconName = 'castle';
export const castleIcon: IconShapeTuple = [castleIconName, renderIcon(icon)];
