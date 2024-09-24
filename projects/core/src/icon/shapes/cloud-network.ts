/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29 30H19v-2h-2v2H7c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1m-16.45-4.02c.07.01.13.02.2.02H25c3.86 0 7-3.14 7-7 0-2.8-1.68-5.3-4.19-6.4.12-.52.19-1.06.19-1.6 0-3.86-3.14-7-7-7-2.77 0-5.28 1.67-6.39 4.15C14.07 8.05 13.53 8 13 8c-4.96 0-9 4.04-9 9s3.74 8.74 8.55 8.98M13 10c.65 0 1.31.1 1.96.28a.994.994 0 0 0 1.24-.68C16.82 7.48 18.79 6 21 6c2.76 0 5 2.24 5 5 0 .63-.12 1.25-.36 1.84-.11.26-.09.56.03.82.13.26.36.44.63.52 2.17.59 3.69 2.57 3.69 4.82 0 2.76-2.24 5-5 5H12.9s-.08-.01-.13-.01A6.967 6.967 0 0 1 5.99 17c0-3.8 3.14-7 7-7z"/>',
};

export const cloudNetworkIconName = 'cloud-network';
export const cloudNetworkIcon: IconShapeTuple = [cloudNetworkIconName, renderIcon(icon)];
