/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10.52 34h-3a1 1 0 0 1-.88-1.44L12.55 21H6a1 1 0 0 1-.85-1.54l10.68-17a1 1 0 0 1 .81-.46h13.43a1 1 0 0 1 .77 1.69L21.78 14h5.38a1 1 0 0 1 .73 1.66l-16.63 18a1 1 0 0 1-.74.34m-1.34-2h.91l14.77-16h-5.27a1 1 0 0 1-.77-1.69L27.88 4H17.19L7.77 19h6.43a1 1 0 0 1 .88 1.44Z"/>',
  solid:
    '<path d="M30.8 2.29a.49.49 0 0 0-.45-.29H16.42a.5.5 0 0 0-.42.23l-10.71 17a.49.49 0 0 0 .41.77h7.67L6.6 33.25a.52.52 0 0 0 .46.75h3a.5.5 0 0 0 .37-.16L28 14.85a.5.5 0 0 0-.37-.85h-6.74l9.83-11.18a.49.49 0 0 0 .08-.53"/>',
};

export const boltIconName = 'bolt';
export const boltIcon: IconShapeTuple = [boltIconName, renderIcon(icon)];
