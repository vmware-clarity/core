/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2M4 18a13.93 13.93 0 0 1 3.43-9.15l19.72 19.72A14 14 0 0 1 4 18m24.57 9.15L8.85 7.43a14 14 0 0 1 19.72 19.72"/>',
};

export const banIconName = 'ban';
export const banIcon: IconShapeTuple = [banIconName, renderIcon(icon)];
