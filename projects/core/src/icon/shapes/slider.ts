/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12 12.37a4 4 0 0 0-3-3.89V5a1 1 0 1 0-2 0v3.48a4 4 0 0 0 0 7.78V31a1 1 0 1 0 2 0V16.26a4 4 0 0 0 3-3.89m-4 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2.03Zm24 1.46a4 4 0 0 0-3-3.89V5a1 1 0 1 0-2 0v6.94a4 4 0 0 0 0 7.78V31a1 1 0 1 0 2 0V19.72a4 4 0 0 0 3-3.89m-4 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2.04Zm-6 6.67a4 4 0 0 0-3-3.89V5a1 1 0 1 0-2 0v15.61a4 4 0 0 0 0 7.78V31a1 1 0 1 0 2 0v-2.61a4 4 0 0 0 3-3.89m-4 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2.03Z"/>',

  solid:
    '<path d="M9 9.29V5a1 1 0 1 0-2 0v4.3a3.22 3.22 0 0 0 0 6.11V31a1 1 0 1 0 2 0V15.43a3.22 3.22 0 0 0 0-6.14m10 12.16V5a1 1 0 1 0-2 0v16.47a3.22 3.22 0 0 0 0 6.11V31a1 1 0 1 0 2 0v-3.4a3.22 3.22 0 0 0 0-6.14Zm10-8.7V5a1 1 0 1 0-2 0v7.76a3.22 3.22 0 0 0 0 6.11V31a1 1 0 1 0 2 0V18.89a3.22 3.22 0 0 0 0-6.14"/>',
};

export const sliderIconName = 'slider';
export const sliderIcon: IconShapeTuple = [sliderIconName, renderIcon(icon)];
