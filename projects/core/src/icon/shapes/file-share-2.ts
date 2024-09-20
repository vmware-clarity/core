/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M25 4H7.83A1.89 1.89 0 0 0 6 5.91v24.18A1.89 1.89 0 0 0 7.83 32h20.34A1.87 1.87 0 0 0 30 30.09V9Zm-1 1.78L28.2 10H24ZM8 30V6h14v6h6v18Z"/><path d="M22 21.81a2.1 2.1 0 0 0-1.44.62l-5.72-2.66v-.44l5.66-2.65a2.08 2.08 0 1 0 .06-2.94 2.14 2.14 0 0 0-.64 1.48v.23l-5.64 2.66a2.08 2.08 0 1 0-.08 2.95l.08-.08 5.67 2.66v.3a2.09 2.09 0 1 0 2.05-2.1Z"/>',
  solid:
    '<path d="M25 4.06H7.83A1.89 1.89 0 0 0 6 6v24.15a1.89 1.89 0 0 0 1.83 1.91h20.34A1.87 1.87 0 0 0 30 30.15V9ZM22 26a2.09 2.09 0 0 1-2.1-2.08v-.3L14.27 21l-.08.08a2.08 2.08 0 1 1 .08-2.95l5.64-2.66v-.23a2.14 2.14 0 0 1 .64-1.48 2.08 2.08 0 1 1-.06 2.94l-5.66 2.65v.44l5.72 2.66a2.1 2.1 0 0 1 1.45-.64A2.09 2.09 0 0 1 22 26m2-16V5.84l4.2 4.22Z"/>',
};

export const fileShare2IconName = 'file-share-2';
export const fileShare2Icon: IconShapeTuple = [fileShare2IconName, renderIcon(icon)];
