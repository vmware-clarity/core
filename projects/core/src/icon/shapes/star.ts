/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27.258 33.99q-.255 0-.48-.12l-8.785-4.858-8.786 4.858c-.33.19-.75.16-1.06-.06s-.47-.6-.41-.98l1.69-10.356-7.147-7.318a1.002 1.002 0 0 1 .57-1.69l9.835-1.5 4.398-9.386c.17-.35.52-.58.91-.58s.74.22.91.58l4.407 9.387 9.836 1.5c.37.06.68.32.8.67s.03.749-.23 1.019l-7.147 7.328 1.689 10.356c.06.38-.1.76-.41.98-.17.12-.37.18-.58.18zm-9.265-7.118q.255 0 .48.12l7.466 4.129-1.44-8.817c-.05-.31.05-.63.27-.86l6.138-6.288-8.436-1.29a.99.99 0 0 1-.75-.56L17.993 5.36l-3.729 7.948c-.14.3-.42.51-.75.56L5.08 15.155l6.137 6.288c.22.23.32.55.27.86l-1.44 8.817 7.467-4.129c.15-.08.32-.12.48-.12"/>',
  solid:
    '<path d="M33.95 14.136c-.12-.36-.43-.61-.8-.67l-9.84-1.5-4.4-9.386C18.74 2.23 18.39 2 18 2a1 1 0 0 0-.91.58l-4.41 9.386-9.83 1.5c-.37.06-.68.32-.8.67s-.03.75.23 1.02l7.15 7.327-1.69 10.356c-.06.38.1.76.41.98s.73.24 1.06.06L18 29.02l8.79 4.859c.15.08.32.12.48.12.2 0 .4-.06.58-.18.31-.22.47-.6.41-.98l-1.69-10.356 7.15-7.328c.26-.27.35-.66.23-1.02"/>',
};

export const starIconName = 'star';
export const starIcon: IconShapeTuple = [starIconName, renderIcon(icon)];
