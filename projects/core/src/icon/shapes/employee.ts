/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M16.43 16.69a7 7 0 1 1 7-7 7 7 0 0 1-7 7m0-11.92a5 5 0 1 0 5 5 5 5 0 0 0-5-5M22 17.9a25.4 25.4 0 0 0-16.12 1.67 4.06 4.06 0 0 0-2.31 3.68v5.95a1 1 0 1 0 2 0v-5.95a2 2 0 0 1 1.16-1.86 22.9 22.9 0 0 1 9.7-2.11 23.6 23.6 0 0 1 5.57.66Zm.14 9.51h6.14v1.4h-6.14z"/><path d="M33.17 21.47H28v2h4.17v8.37H18v-8.37h6.3v.42a1 1 0 0 0 2 0V20a1 1 0 0 0-2 0v1.47H17a1 1 0 0 0-1 1v10.37a1 1 0 0 0 1 1h16.17a1 1 0 0 0 1-1V22.47a1 1 0 0 0-1-1"/>',
  solid:
    '<circle cx="16.86" cy="9.73" r="6.46"/><path d="M21 28h7v1.4h-7z"/><path d="M15 30v3a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1h-7v-1.47a1 1 0 0 0-2 0V22h-2v-3.58a32 32 0 0 0-5.14-.42 26 26 0 0 0-11 2.39 3.28 3.28 0 0 0-1.88 3V30Zm17 2H17v-8h7v.42a1 1 0 0 0 2 0V24h6Z"/>',
};

export const employeeIconName = 'employee';
export const employeeIcon: IconShapeTuple = [employeeIconName, renderIcon(icon)];
