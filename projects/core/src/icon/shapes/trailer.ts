/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M15 19.2c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8-2.6-5.8-5.8-5.8m0 10c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2"/><path d="M14 24h2v2h-2z"/><path d="M33 9H2v13.1C2 24.3 3.7 26 5.9 26H7v-2H5.9c-1 0-1.8-.8-1.9-1.9V15h22v7.1c0 1-.8 1.8-1.9 1.9H23v2h1.1c2.1 0 3.8-1.7 3.8-3.9V11h5c.6 0 1-.4 1-1s-.3-1-.9-1m-7 4H4v-2h22z"/>',
  solid:
    '<path d="M33 9H2v13.1C2 24.3 3.7 26 5.9 26H7v-2H5.9c-1 0-1.8-.8-1.9-1.9V15h22v7.1c0 1-.8 1.8-1.9 1.9H23v2h1.1c2.1 0 3.8-1.7 3.8-3.9V11h5c.6 0 1-.4 1-1s-.3-1-.9-1"/><path d="M15 19.2c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8-2.6-5.8-5.8-5.8m1 6.8h-2v-2h2z"/>',
};

export const trailerIconName = 'trailer';
export const trailerIcon: IconShapeTuple = [trailerIconName, renderIcon(icon)];
