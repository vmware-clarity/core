/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M16.87 8.12H5.8l1.98 2.033a1.037 1.037 0 0 1 0 1.44.985.985 0 0 1-1.41 0L2 7.099l4.37-4.433a.985.985 0 0 1 1.41 0 1.03 1.03 0 0 1 0 1.45L5.87 6.077h11zm12.74 17.037a.985.985 0 0 0-1.41 0 1.03 1.03 0 0 0 0 1.45l1.9 1.94H19v2.043h11.2l-2 2.043a1.037 1.037 0 0 0 0 1.44.99.99 0 0 0 1.41 0L34 29.62zm-18.64 3.39H9v2.043h1.97zm6.03 0h-4v2.043h4zm8.01-22.47h1.97V8.12h-1.97zm-2.01 0h-4V8.12h4zm4 16.342v-8.17c0-1.129-.895-2.043-2-2.043H11c-1.105 0-2 .914-2 2.042v8.171c0 1.128.895 2.043 2 2.043h14c1.105 0 2-.915 2-2.043m-2-8.17H11v8.17h14z" clip-rule="evenodd"/>',
};

export const nvmeIconName = 'nvme';
export const nvmeIcon: IconShapeTuple = [nvmeIconName, renderIcon(icon)];
