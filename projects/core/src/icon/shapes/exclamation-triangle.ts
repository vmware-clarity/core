/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 21.32a1.3 1.3 0 0 0 1.3-1.3V14a1.3 1.3 0 1 0-2.6 0v6a1.3 1.3 0 0 0 1.3 1.32"/><circle cx="17.95" cy="24.27" r="1.5"/><path d="M30.33 25.54 20.59 7.6a3 3 0 0 0-5.27 0L5.57 25.54A3 3 0 0 0 8.21 30h19.48a3 3 0 0 0 2.64-4.43Zm-1.78 1.94a1 1 0 0 1-.86.49H8.21a1 1 0 0 1-.88-1.48l9.74-17.94a1 1 0 0 1 1.76 0l9.74 17.94a1 1 0 0 1-.02.99"/>',
  solid:
    '<path d="M30.33 25.54 20.59 7.6a3 3 0 0 0-5.27 0L5.57 25.54A3 3 0 0 0 8.21 30h19.48a3 3 0 0 0 2.64-4.43Zm-13.87-12.8a1.49 1.49 0 0 1 3 0v6.89a1.49 1.49 0 1 1-3 0ZM18 26.25a1.72 1.72 0 1 1 1.72-1.72A1.72 1.72 0 0 1 18 26.25"/>',
};

export const exclamationTriangleIconName = 'exclamation-triangle';
export const exclamationTriangleIcon: IconShapeTuple = [exclamationTriangleIconName, renderIcon(icon)];
