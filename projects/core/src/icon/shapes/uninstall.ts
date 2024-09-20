/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M11.29 26.72a1 1 0 0 0 1.41 0l5.3-5.23 5.3 5.23a1 1 0 0 0 1.4-1.42l-5.28-5.21 5.28-5.21a1 1 0 0 0-1.41-1.42L18 18.68l-5.3-5.23a1 1 0 0 0-1.41 1.42l5.28 5.21-5.27 5.22a1 1 0 0 0-.01 1.42"/><path d="M30.92 8h-4.37a1 1 0 0 0 0 2H31v20H5V10h4.38a1 1 0 0 0 0-2h-4.3A2 2 0 0 0 3 10v20a2 2 0 0 0 2.08 2h25.84A2 2 0 0 0 33 30V10a2 2 0 0 0-2.08-2"/>',

  outlineAlerted:
    '<path d="M11.29 26.72a1 1 0 0 0 1.41 0l5.3-5.23 5.3 5.23a1 1 0 0 0 1.4-1.42l-5.28-5.21 4.75-4.69h-1.94a3.7 3.7 0 0 1-.81-.1L18 18.68l-5.3-5.23a1 1 0 0 0-1.41 1.42l5.28 5.21-5.27 5.22a1 1 0 0 0-.01 1.42"/><path d="M31 15.4V30H5V10h4.38a1 1 0 0 0 0-2h-4.3A2 2 0 0 0 3 10v20a2 2 0 0 0 2.08 2h25.84A2 2 0 0 0 33 30V15.4Z"/>',

  outlineBadged:
    '<path d="M11.29 26.72a1 1 0 0 0 1.41 0l5.3-5.23 5.3 5.23a1 1 0 0 0 1.4-1.42l-5.28-5.21 5.28-5.21a1 1 0 0 0-1.41-1.42L18 18.68l-5.3-5.23a1 1 0 0 0-1.41 1.42l5.28 5.21-5.27 5.22a1 1 0 0 0-.01 1.42"/><path d="M31 13.43V30H5V10h4.38a1 1 0 0 0 0-2h-4.3A2 2 0 0 0 3 10v20a2 2 0 0 0 2.08 2h25.84A2 2 0 0 0 33 30V12.87a7.5 7.5 0 0 1-2 .56"/>',
};

export const uninstallIconName = 'uninstall';
export const uninstallIcon: IconShapeTuple = [uninstallIconName, renderIcon(icon)];
