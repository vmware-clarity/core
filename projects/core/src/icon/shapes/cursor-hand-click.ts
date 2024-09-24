/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.4 17.6c-1.8-1.9-4.2-3.2-6.7-3.7q-1.65-.45-3.3-.6c2.8-3.3 2.3-8.3-1-11.1s-8.3-2.3-11.1 1-2.3 8.3 1 11.1c.6.5 1.2.9 1.8 1.1v2.2l-1.6-1.5c-1.4-1.4-3.7-1.4-5.2 0-1.4 1.4-1.5 3.6-.1 5l4.6 5.4c.2 1.4.7 2.7 1.4 3.9.5.9 1.2 1.8 1.9 2.5v1.9c0 .6.4 1 1 1h13.6c.5 0 1-.5 1-1v-2.6c1.9-2.3 2.9-5.2 2.9-8.1v-5.8c.1-.4 0-.6-.2-.7m-22-9.4c0-3.3 2.7-5.9 6-5.8 3.3 0 5.9 2.7 5.8 6 0 1.8-.8 3.4-2.2 4.5v-5a3.4 3.4 0 0 0-3.4-3.2c-1.8-.1-3.4 1.4-3.4 3.2v5.2c-1.7-1-2.7-2.9-2.8-4.9M28.7 24c.1 2.6-.8 5.1-2.5 7.1-.2.2-.4.4-.4.7v2.1H14.2v-1.4c0-.3-.2-.6-.4-.8-.7-.6-1.3-1.3-1.8-2.2-.6-1-1-2.2-1.2-3.4 0-.2-.1-.4-.2-.6l-4.8-5.7c-.3-.3-.5-.7-.5-1.2 0-.4.2-.9.5-1.2.7-.6 1.7-.6 2.4 0l2.9 2.9v3l1.9-1V7.9c.1-.7.7-1.3 1.5-1.2.7 0 1.4.5 1.4 1.2v11.5l2 .4v-4.6c.1-.1.2-.1.3-.2.7 0 1.4.1 2.1.2v5.1l1.6.3v-5.2l1.2.3c.5.1 1 .3 1.5.5v5l1.6.3v-4.6c.9.4 1.7 1 2.4 1.7z"/>',
};

export const cursorHandClickIconName = 'cursor-hand-click';
export const cursorHandClickIcon: IconShapeTuple = [cursorHandClickIconName, renderIcon(icon)];
