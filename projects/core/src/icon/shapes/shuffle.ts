/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23.533 10.006h6.838l-2.46 2.462a.997.997 0 0 0 .71 1.7c.26 0 .51-.1.71-.29L34 8.997l-4.678-4.703a.997.997 0 1 0-1.41 1.41l2.29 2.292h-7.738l-4.26 6.384 1.2 1.801 4.12-6.194zm-13.066 16.01H3c-.55 0-1 .45-1 1 0 .551.45 1.002 1 1.002h8.537l4.259-6.395-1.2-1.8-4.129 6.203zm17.445-3.882a.997.997 0 0 0 0 1.41l2.46 2.462h-6.839l-5.328-8.005-1.2-1.81-5.458-8.196H3c-.55 0-1 .45-1 1 0 .551.45 1.001 1 1.001h7.457l5.329 8.005 1.2 1.801 5.458 8.206h7.737l-2.29 2.29a.997.997 0 0 0 .71 1.702c.26 0 .51-.1.71-.29l4.669-4.713-4.668-4.883a.995.995 0 0 0-1.41 0z"/>',
};

export const shuffleIconName = 'shuffle';
export const shuffleIcon: IconShapeTuple = [shuffleIconName, renderIcon(icon)];
