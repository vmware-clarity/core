/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.95 16.124c-.12-.36-.43-.61-.8-.67l-9.84-1.5-4.4-9.386c-.17-.35-.52-.58-.91-.58a1 1 0 0 0-.91.58l-4.41 9.387-9.83 1.5c-.37.06-.68.32-.8.67-.12.349-.03.749.23 1.019l7.15 7.327-1.69 10.356c-.06.38.1.76.41.98s.73.24 1.06.06L18 31.009l8.79 4.858c.15.08.32.12.48.12.2 0 .4-.06.58-.18.31-.22.47-.6.41-.98l-1.69-10.356 7.15-7.327c.26-.27.35-.66.23-1.02M18 28.85q-.255 0-.48.12l-7.47 4.128 1.44-8.817c.05-.31-.05-.63-.27-.86l-6.14-6.287 8.44-1.29c.33-.05.61-.26.75-.56L18 7.337z"/>',
  solid:
    '<path d="M33.95 14.136c-.12-.36-.43-.61-.8-.67l-9.84-1.5-4.4-9.386C18.74 2.23 18.39 2 18 2a1 1 0 0 0-.91.58l-4.41 9.386-9.83 1.5c-.37.06-.68.32-.8.67s-.03.75.23 1.02l7.15 7.327-1.69 10.356c-.06.38.1.76.41.98s.73.24 1.06.06L18 29.02l8.79 4.859c.15.08.32.12.48.12.2 0 .4-.06.58-.18.31-.22.47-.6.41-.98l-1.69-10.356 7.15-7.328c.26-.27.35-.66.23-1.02m-9.16 7.307c-.22.23-.32.55-.27.86l1.44 8.816-7.47-4.128c-.15-.08-.32-.12-.48-.12V5.35l3.73 7.947c.14.3.42.51.75.56l8.44 1.29-6.14 6.287z"/>',
};

export const halfStarIconName = 'half-star';
export const halfStarIcon: IconShapeTuple = [halfStarIconName, renderIcon(icon)];
