/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 18c0 7.7-6.3 14-14 14S4 25.7 4 18C4 10.6 9.7 4.5 17.1 4v3.7c-5.7.5-9.9 5.5-9.4 11.2s5.5 9.9 11.2 9.4c5.3-.5 9.4-4.9 9.4-10.3h-2c0 4.6-3.7 8.3-8.3 8.3S9.7 22.6 9.7 18c0-4.2 3.1-7.8 7.3-8.3v4.4c-1.8.4-3.1 2-3.1 3.9 0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.8-1.3-3.4-3-3.8V2.1c-.3-.1-.6-.1-.9-.1C9.2 2 2 9.2 2 18s7.2 16 16 16 16-7.2 16-16zm-12 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2"/>',
  solid:
    '<path d="M32 18c0 7.7-6.2 14-14 14S4 25.8 4 18C4 10.6 9.7 4.5 17.1 4v3.7c-5.7.5-9.8 5.5-9.3 11.2s5.5 9.8 11.2 9.3c5.3-.5 9.3-4.9 9.3-10.2h-2c0 4.6-3.7 8.3-8.3 8.3S9.7 22.6 9.7 18c0-4.2 3.2-7.8 7.3-8.2v4.4c-2.1.6-3.4 2.7-2.9 4.9.6 2.1 2.7 3.4 4.9 2.9 2.1-.6 3.4-2.7 2.9-4.9-.4-1.4-1.5-2.5-2.9-2.9V2h-1.1c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16z"/>',
};

export const radarIconName = 'radar';
export const radarIcon: IconShapeTuple = [radarIconName, renderIcon(icon)];
