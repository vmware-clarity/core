/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M16.994 4C9.827 4 4 9.832 4 17.005c0 7.172 5.827 13.004 12.994 13.004s12.994-5.832 12.994-13.004C29.988 9.832 24.161 4 16.994 4m0 24.009C10.927 28.009 6 23.077 6 17.005S10.927 6 16.994 6 27.99 10.932 27.99 17.005s-4.928 11.004-10.995 11.004m5.997-12.005H10.997c-.55 0-1 .45-1 1s.45 1.001 1 1.001H22.99c.55 0 1-.45 1-1s-.45-1-1-1M31.699 30.3l-3.429-3.43q-.66.75-1.41 1.41l3.43 3.43c.2.201.45.291.709.291.26 0 .51-.1.71-.29a.997.997 0 0 0 0-1.41z"/>',
};

export const zoomOutIconName = 'zoom-out';
export const zoomOutIcon: IconShapeTuple = [zoomOutIconName, renderIcon(icon)];
