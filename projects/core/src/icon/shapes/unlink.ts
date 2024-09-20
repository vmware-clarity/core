/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5 5 3.59 6.41l9 9-4.49 4.38a5.91 5.91 0 0 0 0 8.39 6 6 0 0 0 8.44 0l4.46-4.4 8.63 8.63L31 31Zm10.13 21.76a4 4 0 0 1-5.62 0 3.92 3.92 0 0 1 0-5.55L14 16.79l5.58 5.58Zm6.4-17.54a4 4 0 0 1 5.62 0 3.92 3.92 0 0 1 0 5.55l-4.79 4.76L23.78 21l4.79-4.76a5.92 5.92 0 0 0 0-8.39 6 6 0 0 0-8.44 0l-4.76 4.74L16.78 14Z"/>',
};

export const unlinkIconName = 'unlink';
export const unlinkIcon: IconShapeTuple = [unlinkIconName, renderIcon(icon)];
