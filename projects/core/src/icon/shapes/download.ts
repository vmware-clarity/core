/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2m-13-1.52 10.61-10.61a1 1 0 0 0-1.41-1.41L19 25.65V5a1 1 0 0 0-2 0v20.65l-8.19-8.19a1 1 0 1 0-1.41 1.41Z"/>',
  outlineAlerted:
    '<path d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2m-13-1.52 10.61-10.61a1 1 0 0 0-1.41-1.41L19 25.65V5a1 1 0 0 0-2 0v20.65l-8.19-8.19a1 1 0 1 0-1.41 1.41Z"/>',
  outlineBadged:
    '<path d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2m-13-1.52 10.61-10.61a1 1 0 0 0-1.41-1.41L19 25.65V5a1 1 0 0 0-2 0v20.65l-8.19-8.19a1 1 0 1 0-1.41 1.41Z"/>',
};

export const downloadIconName = 'download';
export const downloadIcon: IconShapeTuple = [downloadIconName, renderIcon(icon)];
