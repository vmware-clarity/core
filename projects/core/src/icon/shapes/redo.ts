/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.943 4.218a1 1 0 0 0-1.411.005.99.99 0 0 0 .005 1.406l5.544 5.455H16.118c-5.143-.107-9.669 3.361-10.885 8.341-1.217 4.98 1.203 10.133 5.82 12.393a1.02 1.02 0 0 0 1.37-.442c.257-.5.058-1.11-.443-1.366a8.94 8.94 0 0 1-4.986-7.948c.044-4.97 4.115-8.97 9.104-8.942h12.963l-5.524 5.445a.99.99 0 0 0 .176 1.218 1 1 0 0 0 1.23.113l7.977-7.859z"/>',
};

export const redoIconName = 'redo';
export const redoIcon: IconShapeTuple = [redoIconName, renderIcon(icon)];
