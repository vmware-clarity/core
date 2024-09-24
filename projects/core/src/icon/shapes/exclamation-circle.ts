/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6m0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10"/><path d="M18 20.07a1.3 1.3 0 0 1-1.3-1.3v-6a1.3 1.3 0 1 1 2.6 0v6a1.3 1.3 0 0 1-1.3 1.3"/><circle cx="17.95" cy="23.02" r="1.5"/>',
  solid:
    '<path d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6m-1.49 6a1.49 1.49 0 0 1 3 0v6.89a1.49 1.49 0 1 1-3 0ZM18 25.5a1.72 1.72 0 1 1 1.72-1.72A1.72 1.72 0 0 1 18 25.5"/>',
};

export const exclamationCircleIconName = 'exclamation-circle';
export const exclamationCircleIcon: IconShapeTuple = [exclamationCircleIconName, renderIcon(icon)];
