/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M18 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 18 2M4 18a13.93 13.93 0 0 1 3.43-9.15l19.72 19.72A14 14 0 0 1 4 18M8.85 7.43l19.72 19.72c4.647-5.562 4.281-13.751-.844-18.876S14.412 2.783 8.85 7.43" clip-rule="evenodd"/>',
};

export const banIconName = 'ban';
export const banIcon: IconShapeTuple = [banIconName, renderIcon(icon)];
