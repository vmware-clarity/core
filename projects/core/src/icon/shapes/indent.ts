/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.06 9h-26a1 1 0 1 1 0-2h26a1 1 0 1 1 0 2m0 5h-17a1 1 0 0 1 0-2h17a1 1 0 1 1 0 2m0 5h-17a1 1 0 0 1 0-2h17a1 1 0 1 1 0 2m0 5h-17a1 1 0 0 1 0-2h17a1 1 0 1 1 0 2m0 5h-26a1 1 0 0 1 0-2h26a1 1 0 1 1 0 2m-25.5-6.46a1 1 0 0 1-.7-1.71L7.68 18l-2.82-2.83a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0L10.51 18l-4.24 4.24a1 1 0 0 1-.71.3"/>',
};

export const indentIconName = 'indent';
export const indentIcon: IconShapeTuple = [indentIconName, renderIcon(icon)];
