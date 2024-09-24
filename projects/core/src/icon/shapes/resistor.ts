/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29.43 26.34A1.47 1.47 0 0 1 28 25.22l-3.14-12.07-3.12 12.07a1.49 1.49 0 0 1-1.45 1.12 1.49 1.49 0 0 1-1.46-1.12l-3.12-12.07-3.11 12.07a1.51 1.51 0 0 1-2.91 0L6.57 13.15l-1.35 5.22H2a1 1 0 0 1 0-2h1.67l1.45-5.59a1.48 1.48 0 0 1 1.45-1.12A1.47 1.47 0 0 1 8 10.78l3.12 12.07 3.12-12.07a1.49 1.49 0 0 1 1.45-1.12 1.49 1.49 0 0 1 1.46 1.12l3.12 12.07 3.12-12.07a1.5 1.5 0 0 1 2.9 0l3.12 12.07 1.35-5.22H34a1 1 0 0 1 0 2h-1.67l-1.45 5.59a1.48 1.48 0 0 1-1.45 1.12"/>',
};

export const resistorIconName = 'resistor';
export const resistorIcon: IconShapeTuple = [resistorIconName, renderIcon(icon)];
