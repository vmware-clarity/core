/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23.41 25.11a1 1 0 0 1-.54-1.85 6.21 6.21 0 0 0-.19-10.65 1 1 0 1 1 1-1.73A8.21 8.21 0 0 1 23.94 25a1 1 0 0 1-.53.11M18 32a2 2 0 0 1-1.42-.59L9.14 24H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h5.22l7.33-7.41A2 2 0 0 1 20 6v24a2 2 0 0 1-1.24 1.85A2 2 0 0 1 18 32M4 14v8h5.56a1 1 0 0 1 .71.28L18 30V6l-7.65 7.68a1 1 0 0 1-.71.3Zm14-8"/>',
  solid:
    '<path d="M23.41 25.11a1 1 0 0 1-.54-1.85 6.21 6.21 0 0 0-.19-10.65 1 1 0 1 1 1-1.73A8.21 8.21 0 0 1 23.94 25a1 1 0 0 1-.53.11M18.34 3.87 9 12H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.83l9.51 8.3a1 1 0 0 0 1.66-.75V4.62a1 1 0 0 0-1.66-.75"/>',
};

export const volumeDownIconName = 'volume-down';
export const volumeDownIcon: IconShapeTuple = [volumeDownIconName, renderIcon(icon)];
