/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M16 11c0-.55-.45-1-1-1h-5V5c0-.55-.45-1-1-1s-1 .45-1 1v5H3c-.55 0-1 .45-1 1s.45 1 1 1h5v5c0 .55.45 1 1 1s1-.45 1-1v-5h5c.55 0 1-.45 1-1m-4 8c0 .55.45 1 1 1h20c.55 0 1-.45 1-1s-.45-1-1-1H13c-.55 0-1 .45-1 1m15 11H13c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1m6-6H13c-.55 0-1 .45-1 1s.45 1 1 1h20c.55 0 1-.45 1-1s-.45-1-1-1"/>',
};

export const addTextIconName = 'add-text';
export const addTextIcon: IconShapeTuple = [addTextIconName, renderIcon(icon)];
