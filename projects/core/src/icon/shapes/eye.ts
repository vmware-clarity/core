/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M17.998 11c-3.86 0-7 3.14-7 7s3.14 7 7 7 6.999-3.14 6.999-7-3.14-7-7-7m0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 4.999 2.24 4.999 5-2.24 5-5 5m15.917-5.39C31.185 11.17 24.937 7 17.998 7 11.058 7 4.81 11.17 2.08 17.61c-.11.25-.11.53 0 .78C4.81 24.84 11.059 29 17.998 29c6.938 0 13.188-4.17 15.917-10.61.11-.25.11-.53 0-.78M17.998 27c-6 0-11.409-3.52-13.908-9 2.5-5.48 7.909-9 13.908-9s11.408 3.52 13.907 9c-2.5 5.48-7.908 9-13.907 9"/>',
  solid:
    '<path d="M17.998 11c-3.86 0-7 3.14-7 7s3.14 7 7 7 6.999-3.14 6.999-7-3.14-7-7-7m15.917 6.61C31.185 11.17 24.937 7 17.998 7 11.058 7 4.81 11.17 2.08 17.61c-.11.25-.11.53 0 .78C4.81 24.84 11.059 29 17.998 29c6.938 0 13.188-4.17 15.917-10.61.11-.25.11-.53 0-.78M17.998 27c-6 0-11.409-3.52-13.908-9 2.5-5.48 7.909-9 13.908-9s11.408 3.52 13.907 9c-2.5 5.48-7.908 9-13.907 9"/>',
};

export const eyeIconName = 'eye';
export const eyeIcon: IconShapeTuple = [eyeIconName, renderIcon(icon)];
