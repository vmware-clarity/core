/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 17a7.46 7.46 0 1 0-7.45-7.46A7.46 7.46 0 0 0 18 17m0-12.93a5.46 5.46 0 1 1-5.45 5.45A5.46 5.46 0 0 1 18 4.07M6 31.89v-6.12a16.13 16.13 0 0 1 12-5 16.6 16.6 0 0 1 8.71 2.33l1.35-1.51A18.53 18.53 0 0 0 18 18.74 17.7 17.7 0 0 0 4.21 24.8a1 1 0 0 0-.21.6v6.49A2.06 2.06 0 0 0 6 34h12.39l-1.9-2Zm24 0V32h-3.15l-1.8 2H30a2.06 2.06 0 0 0 2-2.07V26.2l-2 2.23Z"/><path d="M34.76 18.62a1 1 0 0 0-1.41.08l-11.62 13-5.2-5.59a1 1 0 0 0-1.41-.11 1 1 0 0 0-.06 1.42l6.69 7.2L34.84 20a1 1 0 0 0-.08-1.38"/>',
  solid:
    '<circle cx="17.99" cy="10.36" r="6.81"/><path d="M12 26.65a2.8 2.8 0 0 1 4.85-1.8L20.71 29l6.84-7.63A16.8 16.8 0 0 0 18 18.55 16.13 16.13 0 0 0 5.5 24a1 1 0 0 0-.2.61V30a2 2 0 0 0 1.94 2h8.57l-3.07-3.3a2.8 2.8 0 0 1-.74-2.05M28.76 32a2 2 0 0 0 1.94-2v-3.76L25.57 32Z"/><path d="M33.77 18.62a1 1 0 0 0-1.42.08l-11.62 13-5.2-5.59a1 1 0 0 0-1.41-.11 1 1 0 0 0 0 1.42l6.68 7.2L33.84 20a1 1 0 0 0-.07-1.38"/>',
};

export const assignUserIconName = 'assign-user';
export const assignUserIcon: IconShapeTuple = [assignUserIconName, renderIcon(icon)];
