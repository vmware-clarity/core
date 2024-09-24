/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12.17 6A6.21 6.21 0 0 0 6 11H2.13v2H6a6.23 6.23 0 0 0 6.21 5H17V6Zm2.93 10h-2.93a4.2 4.2 0 0 1-4.31-4 4.17 4.17 0 0 1 4.31-4h2.93Zm18.82 7h-3.78a6.25 6.25 0 0 0-6.21-5H19v2h-5a1 1 0 1 0 0 2h5v4h-5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h5v2h4.94a6.23 6.23 0 0 0 6.22-5h3.76Zm-10 5H21v-8h2.94a4.17 4.17 0 0 1 4.31 4 4.17 4.17 0 0 1-4.31 4Z"/>',
  solid:
    '<path d="M12 6a6.21 6.21 0 0 0-6.21 5H2v2h3.83A6.23 6.23 0 0 0 12 18h5V6Zm21.79 17h-3.65a6.25 6.25 0 0 0-6.21-5H19v2h-5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h5v4h-5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h5v2h4.94a6.23 6.23 0 0 0 6.22-5h3.64Z"/>',
};

export const disconnectIconName = 'disconnect';
export const disconnectIcon: IconShapeTuple = [disconnectIconName, renderIcon(icon)];
