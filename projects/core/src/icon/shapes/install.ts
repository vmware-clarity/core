/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.92 8h-4.37a1 1 0 0 0 0 2H31v20H5V10h4.38a1 1 0 0 0 0-2h-4.3A2 2 0 0 0 3 10v20a2 2 0 0 0 2.08 2h25.84A2 2 0 0 0 33 30V10a2 2 0 0 0-2.08-2"/><path d="m10.3 18.87 7 6.89a1 1 0 0 0 1.4 0l7-6.89a1 1 0 0 0-1.4-1.43L19 22.65V4a1 1 0 0 0-2 0v18.65l-5.3-5.21a1 1 0 0 0-1.4 1.43"/>',

  outlineAlerted:
    '<path d="m10.3 18.87 7 6.89a1 1 0 0 0 1.4 0l7-6.89a1 1 0 0 0-1.4-1.43L19 22.65V4a1 1 0 0 0-2 0v18.65l-5.3-5.21a1 1 0 0 0-1.4 1.43"/><path d="M31 15.4V30H5V10h4.38a1 1 0 0 0 0-2h-4.3A2 2 0 0 0 3 10v20a2 2 0 0 0 2.08 2h25.84A2 2 0 0 0 33 30V15.4Z"/>',

  outlineBadged:
    '<path d="m10.3 18.87 7 6.89a1 1 0 0 0 1.4 0l7-6.89a1 1 0 0 0-1.4-1.43L19 22.65V4a1 1 0 0 0-2 0v18.65l-5.3-5.21a1 1 0 0 0-1.4 1.43"/><path d="M31 13.43V30H5V10h4.38a1 1 0 0 0 0-2h-4.3A2 2 0 0 0 3 10v20a2 2 0 0 0 2.08 2h25.84A2 2 0 0 0 33 30V12.87a7.5 7.5 0 0 1-2 .56"/>',
};

export const installIconName = 'install';
export const installIcon: IconShapeTuple = [installIconName, renderIcon(icon)];
