/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.87 8.32 28 2.42a2.07 2.07 0 0 0-2.92 0L4.27 23.2l-1.9 8.2a2.06 2.06 0 0 0 2 2.5 2 2 0 0 0 .43 0l8.29-1.9 20.78-20.76a2.07 2.07 0 0 0 0-2.92M12.09 30.2l-7.77 1.63 1.77-7.62L21.66 8.7l6 6ZM29 13.25l-6-6 3.48-3.46 5.9 6Z"/>',
  solid:
    '<path d="m4.22 23.2-1.9 8.2a2.06 2.06 0 0 0 2 2.5 2 2 0 0 0 .43 0L13 32l15.84-15.78L20 7.4Zm29.6-14.88-5.9-5.9a2.07 2.07 0 0 0-2.92 0L21.72 5.7l8.83 8.83 3.28-3.28a2.07 2.07 0 0 0-.01-2.93"/>',
};

export const pencilIconName = 'pencil';
export const pencilIcon: IconShapeTuple = [pencilIconName, renderIcon(icon)];
