/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M32 8h-7.3l-1.06-2.72A2 2 0 0 0 21.78 4h-7.56a2 2 0 0 0-1.87 1.28L11.3 8H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 19a9 9 0 1 0 18 0 9 9 0 0 0-18 0m-.43-6.97a.8.8 0 0 1 0 1.6h-2.4a.8.8 0 0 1 0-1.6zM15.58 24a5.57 5.57 0 0 1-3.24-5 5.56 5.56 0 0 1 9.06-4.36l-.86 1.38a4 4 0 1 0-4.11 6.61zM18 26.4a7.4 7.4 0 0 0 7.4-7.4 7.41 7.41 0 0 0-7.4-7.4 7.4 7.4 0 0 0 0 14.8M4 30h28V10h-8.67l-1.55-4h-7.56l-1.55 4H4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M32 8h-7.3l-1.06-2.72A2 2 0 0 0 21.78 4h-7.56a2 2 0 0 0-1.87 1.28L11.3 8H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 19a9 9 0 1 0 18 0 9 9 0 0 0-18 0m-.43-6.97a.8.8 0 0 1 0 1.6h-2.4a.8.8 0 0 1 0-1.6zM15.58 24a5.57 5.57 0 0 1-3.24-5 5.56 5.56 0 0 1 9.06-4.36l-.86 1.38a4 4 0 1 0-4.11 6.61zM18 26.4a7.4 7.4 0 0 0 7.4-7.4 7.41 7.41 0 0 0-7.4-7.4 7.4 7.4 0 0 0 0 14.8M4 30h28V10h-8.67l-1.55-4h-7.56l-1.55 4H4z" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M24.7 8H32a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h7.3l1.05-2.72A2 2 0 0 1 14.22 4h7.56a2 2 0 0 1 1.86 1.28zm-9.48 17.47a7.07 7.07 0 0 1-4.11-6.41 7.06 7.06 0 0 1 11.51-5.48l-1.09 1.76a5 5 0 1 0-5.22 8.39zM6.17 13.63a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 0 1.6zM9 19a9 9 0 1 0 18 0 9 9 0 0 0-18 0" clip-rule="evenodd"/><path fill-rule="evenodd" d="M24.7 8H32a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h7.3l1.05-2.72A2 2 0 0 1 14.22 4h7.56a2 2 0 0 1 1.86 1.28zm-9.48 17.47a7.07 7.07 0 0 1-4.11-6.41 7.06 7.06 0 0 1 11.51-5.48l-1.09 1.76a5 5 0 1 0-5.22 8.39zM6.17 13.63a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 0 1.6zM9 19a9 9 0 1 0 18 0 9 9 0 0 0-18 0" clip-rule="evenodd"/>',
};

export const cameraIconName = 'camera';
export const cameraIcon: IconShapeTuple = [cameraIconName, renderIcon(icon)];
