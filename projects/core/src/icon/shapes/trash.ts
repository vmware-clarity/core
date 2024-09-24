/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27.14 34H8.86A2.93 2.93 0 0 1 6 31V11.23h2V31a.93.93 0 0 0 .86 1h18.28a.93.93 0 0 0 .86-1V11.23h2V31a2.93 2.93 0 0 1-2.86 3m3.64-25H5a1 1 0 0 1 0-2h25.78a1 1 0 0 1 0 2"/><path d="M21 13h2v15h-2zm-8 0h2v15h-2zm10-7.14h-1.9V4h-6.2v1.86H13V4a2 2 0 0 1 1.9-2h6.2A2 2 0 0 1 23 4Z"/>',

  solid:
    '<path d="M6 9v22a2.93 2.93 0 0 0 2.86 3h18.23A2.93 2.93 0 0 0 30 31V9Zm9 20h-2V14h2Zm8 0h-2V14h2Zm7.73-24H23V4a2 2 0 0 0-2-2h-6.2A2 2 0 0 0 13 4v1H5a1 1 0 1 0 0 2h25.73a1 1 0 0 0 0-2"/>',
};

export const trashIconName = 'trash';
export const trashIcon: IconShapeTuple = [trashIconName, renderIcon(icon)];
