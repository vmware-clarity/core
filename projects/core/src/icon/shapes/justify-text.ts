/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31 26.75H5c-.55 0-1 .45-1 1s.45 1 1 1h26c.55 0 1-.45 1-1s-.45-1-1-1m-26-16h26c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1m26 4H5c-.55 0-1 .45-1 1s.45 1 1 1h26c.55 0 1-.45 1-1s-.45-1-1-1m0 6H5c-.55 0-1 .45-1 1s.45 1 1 1h26c.55 0 1-.45 1-1s-.45-1-1-1"/>',
};

export const justifyTextIconName = 'justify-text';
export const justifyTextIcon: IconShapeTuple = [justifyTextIconName, renderIcon(icon)];
