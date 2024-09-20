/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline: '<path d="M27.89 9h-20a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m-20 16V11h20v14Z"/>',
};

export const windowMaxIconName = 'window-max';
export const windowMaxIcon: IconShapeTuple = [windowMaxIconName, renderIcon(icon)];
