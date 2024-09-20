/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31 21H13a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-19-5a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2H13a1 1 0 0 0-1 1m15 11H13a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2M15.89 9a1 1 0 0 0-1-1H10V3.21a1 1 0 0 0-2 0V8H2.89a1 1 0 0 0 0 2H8v5.21a1 1 0 0 0 2 0V10h4.89a1 1 0 0 0 1-1"/>',
};

export const addTextIconName = 'add-text';
export const addTextIcon: IconShapeTuple = [addTextIconName, renderIcon(icon)];
