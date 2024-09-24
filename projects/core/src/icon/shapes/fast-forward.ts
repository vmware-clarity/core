/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M2.56 31.882c.34.17.75.13 1.05-.1L15 23.077v7.915c0 .38.22.73.56.9s.75.13 1.05-.1l17-12.992c.25-.19.39-.48.39-.79a1 1 0 0 0-.39-.789l-17-13.011A.98.98 0 0 0 16 4c-.15 0-.3.03-.44.1-.34.17-.56.52-.56.9v7.914L3.61 4.21a.98.98 0 0 0-1.05-.11c-.34.17-.56.52-.56.9v25.982c0 .38.22.73.56.9M4 7.018l11.39 8.704c.3.23.71.27 1.05.1s.56-.52.56-.9V7.019l14.35 10.973L17 28.964v-7.915c0-.38-.22-.73-.56-.9a1 1 0 0 0-1.05.1L4 28.964z"/>',
  solid:
    '<path d="M2.56 31.882c.34.17.75.13 1.05-.1L15 23.077v7.915c0 .38.22.73.56.9s.75.13 1.05-.1l17-12.992c.25-.19.39-.48.39-.79a1 1 0 0 0-.39-.789l-17-13.011A.98.98 0 0 0 16 4c-.15 0-.3.03-.44.1-.34.17-.56.52-.56.9v7.914L3.61 4.21a.98.98 0 0 0-1.05-.11c-.34.17-.56.52-.56.9v25.982c0 .38.22.73.56.9"/>',
};

export const fastForwardIconName = 'fast-forward';
export const fastForwardIcon: IconShapeTuple = [fastForwardIconName, renderIcon(icon)];
