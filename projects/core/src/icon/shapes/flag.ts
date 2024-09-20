/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6 34a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v30a1 1 0 0 1-1 1M30.55 3.82a1 1 0 0 0-1 0 14.9 14.9 0 0 1-6.13 1.16 13.1 13.1 0 0 1-5.18-1.49 12.8 12.8 0 0 0-5-1.45A10.9 10.9 0 0 0 9 2.85v2.23A8.8 8.8 0 0 1 13.25 4a11.2 11.2 0 0 1 4.2 1.28 14.8 14.8 0 0 0 6 1.66A18.8 18.8 0 0 0 29 6.12v12.83a16.2 16.2 0 0 1-5.58.93 13.1 13.1 0 0 1-5.18-1.49 12.8 12.8 0 0 0-5-1.45 10.9 10.9 0 0 0-4.24.85V20a8.8 8.8 0 0 1 4.25-1.08 11.2 11.2 0 0 1 4.2 1.28 14.8 14.8 0 0 0 6 1.66 16.8 16.8 0 0 0 7-1.37 1 1 0 0 0 .55-.89V4.67a1 1 0 0 0-.45-.85"/>',
  solid:
    '<path d="M5.92 2a1 1 0 0 0-1 1v30a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1M30.5 3.82a1 1 0 0 0-1 0 14.9 14.9 0 0 1-6.13 1.16 13.1 13.1 0 0 1-5.18-1.49A12.8 12.8 0 0 0 13.2 2a10.9 10.9 0 0 0-4.2.85V20a8.8 8.8 0 0 1 4.25-1.08 11.2 11.2 0 0 1 4.2 1.28 14.8 14.8 0 0 0 6 1.66 16.8 16.8 0 0 0 7-1.37 1 1 0 0 0 .55-.89V4.67a1 1 0 0 0-.5-.85"/>',
};

export const flagIconName = 'flag';
export const flagIcon: IconShapeTuple = [flagIconName, renderIcon(icon)];
