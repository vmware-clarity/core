/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<circle cx="17.97" cy="10.45" r="1.4"/><path d="M21 25h-2V14.1h-3a1 1 0 0 0 0 2h1V25h-2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"/><path d="M18 34a16 16 0 1 1 16-16 16 16 0 0 1-16 16m0-30a14 14 0 1 0 14 14A14 14 0 0 0 18 4"/>',
  solid:
    '<path d="M18 2.1a16 16 0 1 0 16 16 16 16 0 0 0-16-16m-.1 5.28a2 2 0 1 1-2 2 2 2 0 0 1 2-2m3.6 21.25h-7a1.4 1.4 0 1 1 0-2.8h2.1v-9.2H15a1.4 1.4 0 1 1 0-2.8h4.4v12h2.1a1.4 1.4 0 1 1 0 2.8"/>',
};

export const infoStandardIconName = 'info-standard';
export const infoStandardIcon: IconShapeTuple = [infoStandardIconName, renderIcon(icon)];
