/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 14H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v3h4V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v3h4V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1M4 12h28V4h-4v3c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V4h-4v3c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1V4H4zm25 22H7c-.55 0-1-.45-1-1V16h2v16h20V16h2v17c0 .55-.45 1-1 1"/><path d="M21 28h-6c-.55 0-1-.45-1-1v-5c0-2.21 1.79-4 4-4s4 1.79 4 4v5c0 .55-.45 1-1 1m-5-2h4v-4c0-1.1-.9-2-2-2s-2 .9-2 2z"/>',
  solid:
    '<path d="M33 14H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v3h4V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v3h4V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1m-5 2H6v17c0 .55.45 1 1 1h22c.55 0 1-.45 1-1V16zm-6 11c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1v-5c0-2.21 1.79-4 4-4s4 1.79 4 4z"/><path d="M18 20c-1.1 0-2 .9-2 2v4h4v-4c0-1.1-.9-2-2-2"/>',
};

export const castleIconName = 'castle';
export const castleIcon: IconShapeTuple = [castleIconName, renderIcon(icon)];
