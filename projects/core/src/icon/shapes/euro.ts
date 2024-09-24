/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.48 28.49a1 1 0 0 0-1.38-.32A12 12 0 0 1 12.45 22h11.71a1 1 0 0 0 0-2H11.93a11.2 11.2 0 0 1 0-4h12.23a1 1 0 0 0 0-2H12.45a12 12 0 0 1 17.61-6.2 1 1 0 0 0 1.06-1.7A14 14 0 0 0 10.34 14h-6.8a1 1 0 1 0 0 2h6.37a14 14 0 0 0-.16 2 14 14 0 0 0 .16 2H3.54a1 1 0 1 0 0 2h6.8a14 14 0 0 0 20.83 7.87 1 1 0 0 0 .31-1.38"/>',
  solid:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m7.42 25.16A10.88 10.88 0 0 1 9.23 21H5.84a1 1 0 0 1 0-2h3c0-.35-.05-.71-.05-1.07V17h-3a1 1 0 0 1 0-2h3.4a10.86 10.86 0 0 1 16.19-6.31 1.25 1.25 0 0 1-1.32 2.12A8.36 8.36 0 0 0 11.82 15h9.36a1 1 0 0 1 0 2h-9.85a7.7 7.7 0 0 0 0 2h9.82a1 1 0 0 1 0 2h-9.28a8.36 8.36 0 0 0 12.22 4 1.25 1.25 0 1 1 1.33 2.12Z"/>',
};

export const euroIconName = 'euro';
export const euroIcon: IconShapeTuple = [euroIconName, renderIcon(icon)];
