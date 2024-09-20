/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5.46 7.41v4.15h1.19V6.05H5.7L4.05 7.16l.47.84zm.11 7.41a.76.76 0 0 1 .83.73c0 .38-.21.74-.87 1.27l-2 1.57v1h4.14v-1.11H5.33l1-.77c1-.7 1.28-1.27 1.28-2a1.83 1.83 0 0 0-2-1.76 2.63 2.63 0 0 0-2.14 1.08l.76.73a1.75 1.75 0 0 1 1.34-.74m.99 9.82a1.32 1.32 0 0 0 1-1.27c0-.87-.78-1.51-2-1.51a2.61 2.61 0 0 0-2.1 1l.69.72a1.78 1.78 0 0 1 1.3-.64c.54 0 .92.26.92.66s-.36.62-1 .62h-.58v1h.64c.74 0 1.07.21 1.07.63s-.35.68-1 .68a2 2 0 0 1-1.46-.65l-.7.78a2.85 2.85 0 0 0 2.21.93c1.29 0 2.13-.69 2.13-1.64a1.33 1.33 0 0 0-1.12-1.31M32.42 9a1 1 0 0 0-1-1H10v2h21.42a1 1 0 0 0 1-1m-1 7H10v2h21.42a1 1 0 0 0 0-2m0 8H10v2h21.42a1 1 0 0 0 0-2"/>',
};

export const numberListIconName = 'number-list';
export const numberListIcon: IconShapeTuple = [numberListIconName, renderIcon(icon)];
