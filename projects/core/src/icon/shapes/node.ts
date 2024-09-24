/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline: '<path d="M18 30.66 7 24.33V11.67l11-6.33 11 6.33v12.66Zm-9-7.48 9 5.17 9-5.17V12.82l-9-5.17-9 5.17Z"/>',
};

export const nodeIconName = 'node';
export const nodeIcon: IconShapeTuple = [nodeIconName, renderIcon(icon)];
