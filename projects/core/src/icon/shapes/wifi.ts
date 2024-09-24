/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.55 8.2a28.1 28.1 0 0 0-31.11.08 1 1 0 1 0 1.12 1.66 26.11 26.11 0 0 1 28.89-.07 1 1 0 0 0 1.1-1.67m-15.5 2.52A20.74 20.74 0 0 0 6.23 14.4 1 1 0 0 0 7.36 16a18.85 18.85 0 0 1 21.28 0 1 1 0 0 0 1.12-1.65 20.75 20.75 0 0 0-11.71-3.63m0 7.18a13.5 13.5 0 0 0-8 2.64 1 1 0 0 0 1.18 1.61 11.56 11.56 0 0 1 13.62-.08A1 1 0 1 0 26 20.46a13.52 13.52 0 0 0-7.95-2.56M18 24.42a4 4 0 1 0 4 4 4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2"/>',
  solid:
    '<circle cx="18" cy="29.54" r="3"/><path d="M32.76 9.38a27.87 27.87 0 0 0-29.57 0 1.51 1.51 0 0 0-.48 2.11l.11.17a1.49 1.49 0 0 0 2 .46 24.68 24.68 0 0 1 26.26 0 1.49 1.49 0 0 0 2-.46l.11-.17a1.51 1.51 0 0 0-.43-2.11"/><path d="M28.82 15.44a20.59 20.59 0 0 0-21.7 0 1.51 1.51 0 0 0-.46 2.1l.11.17a1.49 1.49 0 0 0 2 .46 17.4 17.4 0 0 1 18.36 0 1.49 1.49 0 0 0 2-.46l.11-.17a1.51 1.51 0 0 0-.42-2.1m-3.94 6.05a13.41 13.41 0 0 0-13.82 0 1.5 1.5 0 0 0-.46 2.09l.1.16a1.52 1.52 0 0 0 2.06.44 10.27 10.27 0 0 1 10.42 0 1.52 1.52 0 0 0 2.06-.45l.1-.16a1.49 1.49 0 0 0-.46-2.08"/>',
};

export const wifiIconName = 'wifi';
export const wifiIcon: IconShapeTuple = [wifiIconName, renderIcon(icon)];
