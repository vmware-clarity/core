/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6.69 14.03C8.332 9.36 12.783 6 18.004 6c5.22 0 9.671 3.36 11.311 8.03.63.06 1.22.31 1.69.74.16-.14.33-.26.52-.37-1.51-5.66-6.49-9.92-12.521-10.35V3c0-.55-.45-1-1-1s-1 .45-1 1v1.05C10.971 4.48 6 8.74 4.48 14.4c.18.1.36.22.52.37a3.02 3.02 0 0 1 1.69-.74M7 22c.26 0 .51-.1.711-.29a.996.996 0 0 0 0-1.41l-1.29-1.29 1.29-1.29a.996.996 0 1 0-1.41-1.41L5.01 17.6l-1.29-1.29a.996.996 0 1 0-1.41 1.41l1.29 1.29-1.29 1.29a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l1.29-1.29 1.29 1.29c.2.2.45.29.71.29zm21.414 1.94c-2.07 3.61-5.96 6.06-10.411 6.06S9.66 27.56 7.59 23.94a2.96 2.96 0 0 1-2.56-.68c1.96 4.82 6.55 8.31 11.971 8.69V33c0 .55.45 1 1 1s1-.45 1-1v-1.05a14.02 14.02 0 0 0 11.973-8.69 2.98 2.98 0 0 1-2.56.68m4-4.94 1.291-1.29a.996.996 0 1 0-1.41-1.41l-1.29 1.29-1.29-1.29a.996.996 0 1 0-1.41 1.41l1.29 1.29-1.29 1.29a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l1.29-1.29 1.29 1.29c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41L32.435 19z"/>',
};

export const squidIconName = 'squid';
export const squidIcon: IconShapeTuple = [squidIconName, renderIcon(icon)];
