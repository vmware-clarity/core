/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline: '<path d="M27,27H9a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Z"/>',
};

export const windowMinIconName = 'window-min';
export const windowMinIcon: IconShapeTuple = [windowMinIconName, renderIcon(icon)];
