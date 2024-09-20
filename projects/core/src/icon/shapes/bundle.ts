/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m32.43 8.35-13-6.21a1 1 0 0 0-.87 0l-15 7.24a1 1 0 0 0-.57.9v16.55a1 1 0 0 0 .6.92l13 6.19a1 1 0 0 0 .87 0l15-7.24a1 1 0 0 0 .57-.9V9.25a1 1 0 0 0-.6-.9M19 4.15l10.93 5.22-5.05 2.44-10.67-5.35Zm-2 11.49L6 10.41l5.9-2.85 10.7 5.35ZM5 12.13l11 5.27v14.06L5 26.2Zm13 19.32V17.36l13-6.29v14.1Z"/>',
  solid:
    '<path d="m32.43 8.35-13-6.21a1 1 0 0 0-.87 0l-15 7.24a1 1 0 0 0-.57.9v16.55a1 1 0 0 0 .6.92l13 6.19a1 1 0 0 0 .87 0l15-7.24a1 1 0 0 0 .57-.9V9.25a1 1 0 0 0-.6-.9M19 4.15l10.93 5.22-5.05 2.44-10.67-5.35Zm-2 11.49L6 10.41l5.9-2.85 10.7 5.35Zm1 15.8V17.36l13-6.29v14.1Z"/>',
};

export const bundleIconName = 'bundle';
export const bundleIcon: IconShapeTuple = [bundleIconName, renderIcon(icon)];
