/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27 22v-8a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2m-16-8h14v8H11Zm8-8h4v2h-4zm6.01 0h1.97v2h-1.97zM5.8 8h11.07V6h-11l1.91-1.92a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0L2 7l4.37 4.4a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41Zm23.81 16.68a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l1.9 1.9H19v2h11.2l-2 2a1 1 0 0 0 0 1.41 1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29L34 29.05ZM13 28h4v2h-4zm-4 0h1.97v2H9z"/>',
};

export const nvmeIconName = 'nvme';
export const nvmeIcon: IconShapeTuple = [nvmeIconName, renderIcon(icon)];
