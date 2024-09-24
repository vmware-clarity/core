/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27.65 15.634 17.995 6 8.34 15.634a1.004 1.004 0 0 0 .4 1.779 1 1 0 0 0 1.01-.385l7.246-7.208v19.178a1.001 1.001 0 1 0 1.999 0V9.82l7.246 7.208a1 1 0 0 0 1.414-.005 1.005 1.005 0 0 0-.005-1.419z"/>',
};

export const arrowIconName = 'arrow';
export const arrowIcon: IconShapeTuple = [arrowIconName, renderIcon(icon)];
