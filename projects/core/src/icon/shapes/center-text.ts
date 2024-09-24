/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.88 8H5.12a1.1 1.1 0 0 0 0 2.2h25.76a1.1 1.1 0 1 0 0-2.2m-5.38 8.2a1.1 1.1 0 1 0 0-2.2h-15a1.1 1.1 0 1 0 0 2.2Zm4.75 3.8H5.75a1.1 1.1 0 0 0 0 2.2h24.5a1.1 1.1 0 0 0 0-2.2m-5.37 6H11.12a1.1 1.1 0 1 0 0 2.2h13.76a1.1 1.1 0 1 0 0-2.2"/>',
};

export const centerTextIconName = 'center-text';
export const centerTextIcon: IconShapeTuple = [centerTextIconName, renderIcon(icon)];
