/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 8h-7.3l-1.06-2.72A2 2 0 0 0 21.78 4h-7.56a2 2 0 0 0-1.87 1.28L11.3 8H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 22H4V10h8.67l1.55-4h7.56l1.55 4H32Z"/><path d="M9 19a9 9 0 1 0 9-9 9 9 0 0 0-9 9m16.4 0a7.4 7.4 0 1 1-7.4-7.4 7.41 7.41 0 0 1 7.4 7.4M9.37 12.83a.8.8 0 0 0-.8-.8h-2.4a.8.8 0 0 0 0 1.6h2.4a.8.8 0 0 0 .8-.8"/><path d="M12.34 19a5.57 5.57 0 0 0 3.24 5l.85-1.37a4 4 0 1 1 4.11-6.61l.86-1.38A5.56 5.56 0 0 0 12.34 19"/>',
  solid:
    '<path d="M32 8h-7.3l-1.06-2.72A2 2 0 0 0 21.78 4h-7.56a2 2 0 0 0-1.87 1.28L11.3 8H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M6.17 13.63a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 0 1.6ZM18 28a9 9 0 1 1 9-9 9 9 0 0 1-9 9"/><path d="M11.11 19.06a7.07 7.07 0 0 0 4.11 6.41l1.09-1.74a5 5 0 1 1 5.22-8.39l1.09-1.76a7.06 7.06 0 0 0-11.51 5.48"/>',
};

export const cameraIconName = 'camera';
export const cameraIcon: IconShapeTuple = [cameraIconName, renderIcon(icon)];
