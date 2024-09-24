/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M13 4.5c-.55 0-1 .45-1 1v22c0 .55.45 1 1 1s1-.45 1-1v-22c0-.55-.45-1-1-1m-4 0c-.55 0-1 .45-1 1v22c0 .55.45 1 1 1s1-.45 1-1v-22c0-.55-.45-1-1-1m-4 0c-.55 0-1 .45-1 1v26c0 .55.45 1 1 1s1-.45 1-1v-26c0-.55-.45-1-1-1m12 0c-.55 0-1 .45-1 1v22c0 .55.45 1 1 1s1-.45 1-1v-22c0-.55-.45-1-1-1m14 0c-.55 0-1 .45-1 1v26c0 .55.45 1 1 1s1-.45 1-1v-26c0-.55-.45-1-1-1m-4 0c-.55 0-1 .45-1 1v22c0 .55.45 1 1 1s1-.45 1-1v-22c0-.55-.45-1-1-1m-6 0c-.55 0-1 .45-1 1v22c0 .55.45 1 1 1s1-.45 1-1v-22c0-.55-.45-1-1-1"/>',
};

export const barCodeIconName = 'bar-code';
export const barCodeIcon: IconShapeTuple = [barCodeIconName, renderIcon(icon)];
