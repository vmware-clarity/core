/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.538 17.98a25.44 25.44 0 0 0-11.594-3.84v-.95a5.98 5.98 0 0 0 3.014-5.18c0-3.31-2.702-6-6.028-6s-6.027 2.69-6.027 6a5.96 5.96 0 0 0 3.013 5.18v3.87l-2.832-2.11c-1.176-1.11-3.045-1.08-4.2.06A2.97 2.97 0 0 0 5 17.13c0 .8.311 1.56.884 2.12l5.114 5.09c.351 2.66 1.768 5.04 3.928 6.66v2.01c0 .55.452 1 1.004 1h10.047c.552 0 1.005-.45 1.005-1v-2a10 10 0 0 0 4.018-8v-4.18c0-.34-.17-.66-.462-.84zM11.912 8c0-2.21 1.798-4 4.018-4s4.019 1.79 4.019 4c0 .99-.372 1.93-1.005 2.65V9c0-1.65-1.356-3-3.014-3s-3.014 1.35-3.014 3v1.64A3.98 3.98 0 0 1 11.913 8M28.99 23a7.98 7.98 0 0 1-3.577 6.65 1 1 0 0 0-.442.83V32h-8.037v-1.53c0-.33-.17-.64-.442-.83-2.02-1.35-3.305-3.49-3.536-5.87a.95.95 0 0 0-.292-.61L7.3 17.82a1 1 0 0 1-.292-.71c0-.27.1-.52.292-.71a1.004 1.004 0 0 1 1.416 0c.04.04.08.07.12.1l4.07 2.99v1.5l2.009-1.33V9a1.005 1.005 0 0 1 2.009 0v10.25l2.01.5v-3.6c.672.06 1.346.14 2.009.25v3.85l2.009.5v-3.9c.683.18 1.346.38 2.01.62v3.78l2.008.5v-3.44c.684.32 1.357.67 2.01 1.06v3.62z"/>',
};

export const cursorHandClickIconName = 'cursor-hand-click';
export const cursorHandClickIcon: IconShapeTuple = [cursorHandClickIconName, renderIcon(icon)];
