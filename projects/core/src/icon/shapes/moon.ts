/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18.11 32C10.33 32 4 25.72 4 17.99S10.03 4.2 17.73 4c.42-.01.79.23.95.61s.07.82-.22 1.11c-1.77 1.73-2.75 4.04-2.75 6.49 0 5.03 4.12 9.12 9.2 9.12 1.99 0 3.89-.63 5.5-1.82.33-.24.78-.26 1.12-.05.35.22.53.62.46 1.03C30.78 27.16 24.94 32 18.11 32M15.43 6.29C9.99 7.48 6 12.24 6 17.99 6 24.61 11.43 30 18.11 30c5.05 0 9.47-3.08 11.26-7.6-1.4.61-2.91.92-4.46.92-6.17 0-11.2-4.99-11.2-11.12 0-2.13.6-4.17 1.72-5.92z"/>',
  solid:
    '<path d="M18.11 32C10.33 32 4 25.72 4 17.99S10.03 4.2 17.73 4c.42-.01.79.23.95.61s.07.82-.22 1.11c-1.77 1.73-2.75 4.04-2.75 6.49 0 5.03 4.12 9.12 9.2 9.12 1.99 0 3.89-.63 5.5-1.82.33-.24.78-.26 1.12-.05.35.22.53.62.46 1.03C30.78 27.16 24.94 32 18.11 32"/>',
};

export const moonIconName = 'moon';
export const moonIcon: IconShapeTuple = [moonIconName, renderIcon(icon)];
