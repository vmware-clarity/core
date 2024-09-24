/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M3.24 5.53 11.71 14a10.94 10.94 0 0 0-8.3 3.11 1 1 0 0 0 0 1.41l6.33 6.33-7.45 7.44a1 1 0 1 0 1.3 1.52l.11-.11 7.44-7.44 6.33 6.33a1 1 0 0 0 1.42 0 11 11 0 0 0 3.1-8.3l8.34 8.34 1.41-1.41L4.65 4.12zm14.89 24.91L5.58 17.87a9 9 0 0 1 8.65-1.34l5.25 5.25a9 9 0 0 1-1.35 8.66m15.58-15.55L21.11 2.3a1 1 0 0 0-1.41 1.41L32.29 16.3a1 1 0 0 0 1.42-1.41m-11.285 3.96 4.695-4.695 1.407 1.407-4.695 4.695zM20.44 7.48l-4.7 4.7 1.42 1.42 4.71-4.71z"/>',
  solid:
    '<path d="m3.24 5.53 8.59 8.59a10.9 10.9 0 0 0-8.42 3.1 1 1 0 0 0 0 1.41L9.73 25l-7.44 7.41a1 1 0 0 0 1.3 1.52l.11-.11 7.44-7.44 6.33 6.33a1 1 0 0 0 1.42 0A11 11 0 0 0 22 24.28l8.34 8.34 1.41-1.41L4.65 4.12zM33.71 15 21.11 2.41a1 1 0 0 0-1.41 1.41l12.59 12.6a1 1 0 0 0 .71.29 1 1 0 0 0 .72-.3 1 1 0 0 0-.01-1.41m-17.903-2.764 4.638-4.638 8.083 8.082-4.639 4.639z"/>',
};

export const unpinIconName = 'unpin';
export const unpinIcon: IconShapeTuple = [unpinIconName, renderIcon(icon)];
