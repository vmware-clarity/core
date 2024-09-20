/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14.65 27.1a1.1 1.1 0 0 0 1.1 1.1H30V26H15.75a1.1 1.1 0 0 0-1.1 1.1m-7.75-6A1.1 1.1 0 0 0 8 22.2h22V20H8a1.1 1.1 0 0 0-1.1 1.1m6.5-6a1.1 1.1 0 0 0 1.1 1.1H30V14H14.5a1.1 1.1 0 0 0-1.1 1.1M6.75 8a1.1 1.1 0 1 0 0 2.2H30V8Z"/>',
};

export const alignRightTextIconName = 'align-right-text';
export const alignRightTextIcon: IconShapeTuple = [alignRightTextIconName, renderIcon(icon)];
