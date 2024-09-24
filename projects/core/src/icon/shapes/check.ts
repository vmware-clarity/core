/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M13.759 28.5 3.291 17.898a1.03 1.03 0 0 1 .053-1.38.994.994 0 0 1 1.362-.054l9.033 9.157L31.393 7.745a.994.994 0 0 1 1.363.053c.37.376.393.978.052 1.381z"/>',
};

export const checkIconName = 'check';
export const checkIcon: IconShapeTuple = [checkIconName, renderIcon(icon)];
