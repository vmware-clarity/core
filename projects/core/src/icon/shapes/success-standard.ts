/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14"/><path d="M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05-6-6A1 1 0 0 0 8 18.53L15.49 26 28 13.52a1 1 0 0 0 0-1.42"/>',
  solid:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m10.45 10.63L15.31 25.76 7.55 18a1.4 1.4 0 0 1 2-2l5.78 5.78 11.14-11.13a1.4 1.4 0 1 1 2 2Z"/>',
};

export const successStandardIconName = 'success-standard';
export const successStandardIcon: IconShapeTuple = [successStandardIconName, renderIcon(icon)];
