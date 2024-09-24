/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12 19v8.8l4 2.05V18.27a2 2 0 0 0-.45-1.27L8.18 8h19.56l-7.29 8.93a2 2 0 0 0-.45 1.26v13.69l4 2v-15l9.51-11.62A2 2 0 0 0 32 4H4a2 2 0 0 0-1.59 3.27Z"/>',
  solid: '<path d="M32.13 4H3.92a2 2 0 0 0-1.39 3.44L14 18.54v9.52l8 4.08V18.58L33.52 7.44A2 2 0 0 0 32.13 4"/>',
};

export const filterGridMiniIconName = 'filter-grid-mini';
export const filterGridMiniIcon: IconShapeTuple = [filterGridMiniIconName, renderIcon(icon)];
