/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M22 13c0 .55.45 1 1 1h11V3c0-.55-.45-1-1-1s-1 .45-1 1v7.25C29.21 5.23 23.86 2 18 2 9.18 2 2 9.18 2 18s7.18 16 16 16c6.82 0 12.9-4.33 15.13-10.78.18-.52-.1-1.09-.62-1.27s-1.09.1-1.27.62A14.015 14.015 0 0 1 18 32c-7.72 0-14-6.28-14-14S10.28 4 18 4c5.42 0 10.35 3.17 12.65 8H23c-.55 0-1 .45-1 1"/>',
};

export const refreshIconName = 'refresh';
export const refreshIcon: IconShapeTuple = [refreshIconName, renderIcon(icon)];
