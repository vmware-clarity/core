/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10.5 34.29 2 29.39v-9.81l8.5-4.9 8.5 4.9v9.81ZM4 28.23 10.5 32l6.5-3.77v-7.49L10.5 17 4 20.74Z"/><path d="m25.5 34.29-8.5-4.9v-9.81l8.5-4.9 8.5 4.9v9.81ZM19 28.23 25.5 32l6.5-3.77v-7.49L25.5 17 19 20.74Z"/><path d="m18 21.32-8.5-4.9V6.61l8.5-4.9 8.5 4.9v9.81Zm-6.5-6.06L18 19l6.5-3.75V7.77L18 4l-6.5 3.77Z"/>',
};

export const nodesIconName = 'nodes';
export const nodesIcon: IconShapeTuple = [nodesIconName, renderIcon(icon)];
