/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m4.4 28 7.598-21.94 3.489 10.07c.5-.08 1-.13 1.51-.13.19 0 .38.02.57.03l-4.62-13.36c-.14-.4-.52-.67-.95-.67s-.81.27-.95.67l-8.997 26c-.11.31-.06.64.13.91s.49.42.81.42h4.839c-.28-.64-.5-1.3-.64-2h-2.8zm12.596-10c-4.408 0-7.998 3.59-7.998 8s3.59 8 7.998 8c4.41 0 7.999-3.59 7.999-8s-3.59-8-7.999-8m0 14a6.004 6.004 0 0 1-5.998-6c0-3.31 2.69-6 5.998-6 3.31 0 5.999 2.69 5.999 6s-2.69 6-5.999 6m14.997-20h-9.998c-1.1 0-2 .9-2 2v2.46c.71.22 1.37.53 2 .89V14h9.998v10h-5.199c.13.65.2 1.32.2 2h4.999c1.1 0 2-.9 2-2V14c0-1.1-.9-2-2-2"/>',
  solid:
    '<path d="M16.996 16c.19 0 .38.02.57.03L12.947 2.67c-.14-.4-.52-.67-.95-.67s-.81.27-.95.67l-8.997 26c-.11.31-.06.64.13.91s.49.42.81.42h4.839a9.9 9.9 0 0 1-.84-4c0-5.51 4.489-10 9.997-10zm0 2c-4.408 0-7.998 3.59-7.998 8s3.59 8 7.998 8c4.41 0 7.999-3.59 7.999-8s-3.59-8-7.999-8m14.997-6h-9.998c-1.1 0-2 .9-2 2v2.46c4.05 1.28 7 5.07 7 9.54h4.998c1.1 0 2-.9 2-2V14c0-1.1-.9-2-2-2"/>',
};

export const objectsIconName = 'objects';
export const objectsIcon: IconShapeTuple = [objectsIconName, renderIcon(icon)];
