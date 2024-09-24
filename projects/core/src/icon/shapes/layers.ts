/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M17.554 20.146c.133.065.28.1.429.1a1 1 0 0 0 .42-.1l14.984-7.088a1 1 0 0 0 0-1.81L18.403 4.16a1 1 0 0 0-.85 0L2.57 11.248a1 1 0 0 0 0 1.81zm.429-1.99L5.336 12.159 17.983 6.18l12.647 5.98z" clip-rule="evenodd"/><path d="M17.983 26.155a1 1 0 0 1-.43-.1L2.57 18.997a1 1 0 1 1 .85-1.81l14.564 6.868 14.555-6.888a1.01 1.01 0 1 1 .859 1.83l-14.984 7.088a1 1 0 0 1-.43.07"/><path d="M17.554 31.964c.134.064.28.099.43.1a1 1 0 0 0 .429-.07l14.974-7.079a1 1 0 1 0-.85-1.81l-14.554 6.889-14.565-6.928a.999.999 0 0 0-.849 1.81z"/>',
  solid:
    '<path d="M17.983 20.246a1 1 0 0 1-.43-.1L2.57 13.058a1 1 0 0 1 0-1.81L17.554 4.16a1 1 0 0 1 .849 0l14.984 7.088a1 1 0 0 1 0 1.81l-14.984 7.088a1 1 0 0 1-.42.1"/><path d="M17.983 26.155a1 1 0 0 1-.43-.1L2.57 18.997a1 1 0 1 1 .85-1.81l14.564 6.868 14.555-6.888a1.01 1.01 0 1 1 .859 1.83l-14.984 7.088a1 1 0 0 1-.43.07"/><path d="M17.554 31.964c.134.064.28.099.43.1a1 1 0 0 0 .429-.07l14.974-7.079a1 1 0 1 0-.85-1.81l-14.554 6.889-14.565-6.928a.999.999 0 0 0-.849 1.81z"/>',
};

export const layersIconName = 'layers';
export const layersIcon: IconShapeTuple = [layersIconName, renderIcon(icon)];
