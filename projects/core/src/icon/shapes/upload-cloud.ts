/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.31 13v-.32a10.26 10.26 0 0 0-10.45-10 10.47 10.47 0 0 0-9.6 6.1A9.74 9.74 0 0 0 1.6 18.4a9.62 9.62 0 0 0 9.65 9.6H15v-2h-3.75A7.65 7.65 0 0 1 11 10.74h.67l.23-.63a8.43 8.43 0 0 1 8-5.4 8.26 8.26 0 0 1 8.45 8 8 8 0 0 1 0 .8l-.08.72.65.3A6 6 0 0 1 26.38 26H21v2h5.38a8 8 0 0 0 3.93-15"/><path d="M22.28 21.85a1 1 0 0 0 .72-1.71l-5-5-5 5a1 1 0 0 0 1.41 1.41L17 19v12.25a1 1 0 1 0 2 0V19l2.57 2.57a1 1 0 0 0 .71.28"/>',

  outlineAlerted:
    '<path d="M22.28 21.85a1 1 0 0 0 .72-1.71l-5-5-5 5a1 1 0 0 0 1.41 1.41L17 19v12.25a1 1 0 1 0 2 0V19l2.57 2.57a1 1 0 0 0 .71.28"/><path d="M3.6 18.38a7.71 7.71 0 0 1 7.4-7.64h.67l.23-.63a8.43 8.43 0 0 1 8-5.4 8.8 8.8 0 0 1 2 .25l1-1.8a10.8 10.8 0 0 0-3.07-.45 10.47 10.47 0 0 0-9.6 6.1A9.74 9.74 0 0 0 1.6 18.4a9.62 9.62 0 0 0 9.65 9.6H15v-2h-3.75a7.66 7.66 0 0 1-7.65-7.62m29.3-2.98h-2.69A6 6 0 0 1 26.38 26H21v2h5.38a8 8 0 0 0 6.52-12.6"/>',

  outlineBadged:
    '<path d="M22.28 21.85a1 1 0 0 0 .72-1.71l-5-5-5 5a1 1 0 0 0 1.41 1.41L17 19v12.25a1 1 0 1 0 2 0V19l2.57 2.57a1 1 0 0 0 .71.28"/><path d="M30.92 13.44a7.1 7.1 0 0 1-2.63-.14v.23l-.08.72.65.3A6 6 0 0 1 26.38 26H21v2h5.38a8 8 0 0 0 4.54-14.56M3.6 18.38a7.71 7.71 0 0 1 7.4-7.64h.67l.23-.63a8.43 8.43 0 0 1 8-5.4 8.8 8.8 0 0 1 2.68.42 7.5 7.5 0 0 1 .5-1.94 10.8 10.8 0 0 0-3.18-.48 10.47 10.47 0 0 0-9.6 6.1 9.74 9.74 0 0 0-8.7 9.59 9.62 9.62 0 0 0 9.65 9.6H15v-2h-3.75a7.66 7.66 0 0 1-7.65-7.62"/>',
};

export const uploadCloudIconName = 'upload-cloud';
export const uploadCloudIcon: IconShapeTuple = [uploadCloudIconName, renderIcon(icon)];
