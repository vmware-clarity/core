/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27.98 31a.924.924 0 0 1-.86 1H8.85a.924.924 0 0 1-.86-1V11.03H5.97V31c-.02.78.27 1.53.81 2.09s1.28.89 2.07.91h18.27c.78-.02 1.53-.34 2.07-.91s.83-1.32.81-2.09V11.03h-2.02zM13 12.98v15h2.02v-15zM15 4h6v2h2V4c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v2h2zm15.99 2.98H5.01c-.56 0-1.01.45-1.01 1s.45 1 1.01 1h25.98c.56 0 1.01-.45 1.01-1s-.45-1-1.01-1m-10.01 6v15H23v-15z"/>',

  solid:
    '<path d="M15 4h6v2h2V4c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v2h2zm15.99 2.98H5.01c-.56 0-1.01.45-1.01 1s.45 1 1.01 1h25.98c.56 0 1.01-.45 1.01-1s-.45-1-1.01-1M5.97 11.03V31c-.02.78.27 1.53.81 2.09s1.28.89 2.07.91h18.27c.78-.02 1.53-.34 2.07-.91s.83-1.32.81-2.09V11.03zm14.82 17.79V15h2.42v14h-2.42zm-7.98 0V15h2.42v14h-2.42z"/>',
};

export const trashIconName = 'trash';
export const trashIcon: IconShapeTuple = [trashIconName, renderIcon(icon)];
