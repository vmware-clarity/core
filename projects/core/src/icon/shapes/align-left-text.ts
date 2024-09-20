/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M20.25 26H6v2.2h14.25a1.1 1.1 0 0 0 0-2.2M28 20H6v2.2h22a1.1 1.1 0 0 0 0-2.2m-5.4-4.9a1.1 1.1 0 0 0-1.1-1.1H6v2.2h15.5a1.1 1.1 0 0 0 1.1-1.1M29.25 8H6v2.2h23.25a1.1 1.1 0 1 0 0-2.2"/>',
};

export const alignLeftTextIconName = 'align-left-text';
export const alignLeftTextIcon: IconShapeTuple = [alignLeftTextIconName, renderIcon(icon)];
