/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline: '<path d="M30 32H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M6 6v24h24V6Z"/>',
  solid: '<rect width="27.99" height="28" x="3.96" y="4" rx="2" ry="2"/>',
};

export const stopIconName = 'stop';
export const stopIcon: IconShapeTuple = [stopIconName, renderIcon(icon)];
