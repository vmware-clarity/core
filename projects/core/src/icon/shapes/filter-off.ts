/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M3.71 2.29c-.39-.39-1.03-.39-1.42 0s-.39 1.03 0 1.42L4.58 6H3c-.55-.01-1 .44-1 .99v1.67c0 .48.19.93.53 1.27L14 21.57v8.48l2 .95V20.98c0-.27-.1-.52-.29-.71L4 8.58v-.59h2.58L20 21.41v11.58l2 1V23.41L32.29 33.7c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41zM33 5.99H10.23l2 2H32v.61l-9.58 9.58 1.44 1.44 9.61-9.63c.34-.34.54-.81.53-1.3v-1.7c0-.55-.45-1-1-1"/>',
  solid:
    '<path d="M33.47 9.99c.34-.34.54-.81.53-1.3v-1.7c0-.55-.45-1-1-1H10.23l13.63 13.63zm.24 22.3-30-30c-.39-.39-1.03-.39-1.42 0s-.39 1.03 0 1.42L4.58 6H3c-.55 0-1 .45-1 1v1.67c0 .48.19.93.53 1.27L14 21.58v8.48L22 34V23.42l10.29 10.29c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41z"/>',
};

export const filterOffIconName = 'filter-off';
export const filterOffIcon: IconShapeTuple = [filterOffIconName, renderIcon(icon)];
