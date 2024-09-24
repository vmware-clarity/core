/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="m33.71 13.38-4.09-4.09a1 1 0 0 0-.7-.29h-5V7.05A2 2 0 0 0 22 5h-8.16A1.92 1.92 0 0 0 12 7.05V9H7.08a1 1 0 0 0-.71.29l-4.08 4.09a1 1 0 0 0-.29.71V29a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14.08a1 1 0 0 0-.29-.7M14 7h8v2h-8zm8 11h10v-3.5L28.5 11h-21L4 14.5V18h10v1.93H4V29h28v-9.07H22zm-2-3h-4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-3.6 6.6h3.2v-5.2h-3.2z" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="m29.62 9.29 4.09 4.09a1 1 0 0 1 .29.7V18H21v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2H2v-3.91a1 1 0 0 1 .29-.71l4.08-4.09A1 1 0 0 1 7.08 9H12V7.05A1.92 1.92 0 0 1 13.84 5H22a2 2 0 0 1 1.92 2.05V9h5a1 1 0 0 1 .7.29M14 9h8V7h-8z" clip-rule="evenodd"/><path d="M21 22a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2H2v9a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-9H21z"/><path d="M19.6 16.4h-3.2v5.2h3.2z"/>',
};

export const toolsIconName = 'tools';
export const toolsIcon: IconShapeTuple = [toolsIconName, renderIcon(icon)];
