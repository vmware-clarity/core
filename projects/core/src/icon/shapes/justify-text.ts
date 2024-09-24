/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6 10.2h25.75a1.1 1.1 0 1 0 0-2.2H6a1.1 1.1 0 1 0 0 2.2M31.75 14H6a1.1 1.1 0 1 0 0 2.2h25.75a1.1 1.1 0 1 0 0-2.2m-.63 6H6.62a1.1 1.1 0 1 0 0 2.2h24.5a1.1 1.1 0 1 0 0-2.2m-.67 5.83H6.6a1.1 1.1 0 0 0 0 2.2h23.85a1.1 1.1 0 0 0 0-2.2"/>',
};

export const justifyTextIconName = 'justify-text';
export const justifyTextIcon: IconShapeTuple = [justifyTextIconName, renderIcon(icon)];
