/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23.993 10.006h-3.999v2.002h3.999zM7.999 26.022h1.999V24.02h-2zM27.99 10.006h-1.999v2.002h2zm-2.289 8.298a.998.998 0 0 0-1.41 1.411l3.96 4.295H18.004v2.002H28.25l-3.958 4.294a.998.998 0 0 0 .71 1.702c.26 0 .51-.1.71-.29L32 25l-6.288-6.717zm-13.995-2.002L7.75 12.008h10.246v-2.002H7.749l3.958-4.294a.998.998 0 0 0-1.41-1.411L4 11.007l6.288 6.717c.2.2.45.29.71.29s.51-.1.71-.29a1 1 0 0 0 0-1.412zm.29 9.72h3.999V24.02h-3.999z"/>',
};

export const switchIconName = 'switch';
export const switchIcon: IconShapeTuple = [switchIconName, renderIcon(icon)];
