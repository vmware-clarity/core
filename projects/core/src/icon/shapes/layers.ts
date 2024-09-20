/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 20.25a1 1 0 0 1-.43-.1l-15-7.09a1 1 0 0 1 0-1.81l15-7.09a1 1 0 0 1 .85 0l15 7.09a1 1 0 0 1 0 1.81l-15 7.09a1 1 0 0 1-.42.1M5.34 12.16l12.66 6 12.66-6L18 6.18Z"/><path d="M18 26.16a1 1 0 0 1-.43-.1L2.57 19a1 1 0 1 1 .85-1.81L18 24.06l14.57-6.89a1 1 0 1 1 .86 1.83l-15 7.09a1 1 0 0 1-.43.07"/><path d="M18 32.07a1 1 0 0 1-.43-.1l-15-7.09a1 1 0 0 1 .85-1.81L18 30l14.57-6.89a1 1 0 1 1 .85 1.81L18.43 32a1 1 0 0 1-.43.07"/>',
  solid:
    '<path d="M18 20.25a1 1 0 0 1-.43-.1l-15-7.09a1 1 0 0 1 0-1.81l15-7.09a1 1 0 0 1 .85 0l15 7.09a1 1 0 0 1 0 1.81l-15 7.09a1 1 0 0 1-.42.1"/><path d="M18 26.16a1 1 0 0 1-.43-.1L2.57 19a1 1 0 1 1 .85-1.81L18 24.06l14.57-6.89a1 1 0 1 1 .86 1.83l-15 7.09a1 1 0 0 1-.43.07"/><path d="M18 32.07a1 1 0 0 1-.43-.1l-15-7.09a1 1 0 0 1 .85-1.81L18 30l14.57-6.89a1 1 0 1 1 .85 1.81L18.43 32a1 1 0 0 1-.43.07"/>',
};

export const layersIconName = 'layers';
export const layersIcon: IconShapeTuple = [layersIconName, renderIcon(icon)];
