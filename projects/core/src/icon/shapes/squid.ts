/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 7a1 1 0 0 1-1-1V3.19a1 1 0 0 1 2 0V6a1 1 0 0 1-1 1m0 27a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1M7.41 18l1.78-1.77a1 1 0 1 0-1.42-1.42L6 16.59l-1.77-1.78a1 1 0 1 0-1.42 1.42L4.59 18l-1.78 1.77a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29L6 19.41l1.77 1.78a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"/><path d="m6 13.76.36-.36a3 3 0 0 1 2.11-.88 11 11 0 0 1 19 0 3 3 0 0 1 2.12.88l.36.36.2-.2a13 13 0 0 0-24.4 0Zm24 8.48-.36.36a3 3 0 0 1-2.12.88 11 11 0 0 1-19 0 3 3 0 0 1-2.12-.88l-.4-.36-.2.2a13 13 0 0 0 24.4 0ZM31.41 18l1.78-1.77a1 1 0 0 0-1.42-1.42L30 16.59l-1.77-1.78a1 1 0 1 0-1.42 1.42L28.59 18l-1.78 1.77a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29L30 19.41l1.77 1.78a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"/>',
};

export const squidIconName = 'squid';
export const squidIcon: IconShapeTuple = [squidIconName, renderIcon(icon)];
