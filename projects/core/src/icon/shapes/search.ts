/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M15.016 2.002C7.827 2.002 2 7.822 2 15.002s5.827 13 13.016 13 13.016-5.82 13.016-13-5.827-13-13.016-13m0 2.05a10.96 10.96 0 0 1 10.136 6.753 10.94 10.94 0 0 1-2.37 11.936 10.97 10.97 0 0 1-11.95 2.379 10.95 10.95 0 0 1-6.77-10.118C4.09 8.97 8.977 4.085 15.017 4.052m11.314 20.82 7.38 7.42a1 1 0 0 1-.456 1.673 1 1 0 0 1-.967-.263l-7.379-7.42z" clip-rule="evenodd"/>',
};

export const searchIconName = 'search';
export const searchIcon: IconShapeTuple = [searchIconName, renderIcon(icon)];
