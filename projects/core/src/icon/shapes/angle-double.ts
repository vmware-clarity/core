/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29 19.41a1 1 0 0 1-.71-.29L18 8.83 7.71 19.12a1 1 0 0 1-1.41-1.41L18 6l11.71 11.71a1 1 0 0 1-.71 1.7"/><path d="M29 30.41a1 1 0 0 1-.71-.29L18 19.83 7.71 30.12a1 1 0 0 1-1.41-1.41L18 17l11.71 11.71a1 1 0 0 1-.71 1.7"/>',
};

export const angleDoubleIconName = 'angle-double';
export const angleDoubleIcon: IconShapeTuple = [angleDoubleIconName, renderIcon(icon)];
