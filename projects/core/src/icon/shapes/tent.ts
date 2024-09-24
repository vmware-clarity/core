/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m18.938 22-3.46 6h-2.32l4.91-8.5c.35-.62 1.37-.62 1.73 0l4.91 8.5h-2.31z"/><path fill-rule="evenodd" d="M20.1 8.368 32.947 30h.99c.55 0 1 .45 1 1s-.45 1-1 1h-30c-.55 0-1-.45-1-1s.45-1 1-1h.992L17.775 8.368 16.078 5.51c-.28-.48-.12-1.09.35-1.37a1 1 0 0 1 1.37.35l1.14 1.92 1.14-1.92c.28-.47.9-.63 1.37-.35s.63.9.35 1.37zM30.62 30H7.255l11.684-19.674z" clip-rule="evenodd"/>',
  solid:
    '<path d="M33.938 30h-.99L20.097 8.37l1.7-2.86c.28-.48.12-1.09-.35-1.37s-1.09-.12-1.37.35l-1.14 1.92-1.14-1.92c-.28-.47-.9-.63-1.37-.35s-.63.9-.35 1.37l1.7 2.86L4.928 30h-.99c-.55 0-1 .45-1 1s.45 1 1 1h30c.55 0 1-.45 1-1s-.45-1-1-1m-11.54-2-3.46-6-3.46 6h-2.31l4.91-8.5c.36-.62 1.38-.62 1.73 0l4.91 8.5z"/>',
};

export const tentIconName = 'tent';
export const tentIcon: IconShapeTuple = [tentIconName, renderIcon(icon)];
