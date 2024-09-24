/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.72 32H5.28C3.47 32 2 30.53 2 28.72V11.28C2 9.47 3.47 8 5.28 8h25.44C32.53 8 34 9.47 34 11.28v17.44c0 1.81-1.47 3.28-3.28 3.28M5.28 10C4.57 10 4 10.58 4 11.28v17.44c0 .71.58 1.28 1.28 1.28h25.44c.71 0 1.28-.58 1.28-1.28V11.28c0-.71-.58-1.28-1.28-1.28z"/><path d="M23 9h-2V6h-6v3h-2V5c0-.55.45-1 1-1h8c.55 0 1 .45 1 1zM10 9H8v21h2zm18 0h-2v21h2z"/>',
  solid:
    '<path d="M23 9h-2V6h-6v3h-2V5c0-.55.45-1 1-1h8c.55 0 1 .45 1 1z"/><path d="M26 8H10v24h16zm4.72 0H28v24h2.72c1.81 0 3.28-1.47 3.28-3.28V11.28C34 9.47 32.53 8 30.72 8M8 8H5.28C3.47 8 2 9.47 2 11.28v17.44C2 30.53 3.47 32 5.28 32H8z"/>',
};

export const suitcase2IconName = 'suitcase2';
export const suitcase2Icon: IconShapeTuple = [suitcase2IconName, renderIcon(icon)];
