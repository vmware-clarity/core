/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24 33H12a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"/><path d="M17 9h2v22.5h-2zm11-2H8a1 1 0 0 1 0-2h20a1 1 0 0 1 0 2m-1.07 17.79a7.23 7.23 0 0 1-5.81-2.89l-.6-.8 1.59-1.21.6.8a5.28 5.28 0 0 0 8.42 0l.6-.8 1.59 1.21-.6.8a7.23 7.23 0 0 1-5.79 2.89m3.58-5.54a.8.8 0 0 1-.73-.48l-2.85-6.57-2.85 6.57a.8.8 0 0 1-1.47-.64l3.59-8.26a.83.83 0 0 1 1.47 0l3.58 8.26a.8.8 0 0 1-.73 1.12ZM9.68 24.79a7.23 7.23 0 0 1-5.8-2.89l-.6-.8 1.58-1.2.6.8a5.28 5.28 0 0 0 8.42 0l.6-.8 1.59 1.21-.6.8a7.23 7.23 0 0 1-5.79 2.88m3.58-5.54a.8.8 0 0 1-.73-.48L9.68 12.2l-2.84 6.57a.8.8 0 0 1-1.47-.64l3.58-8.26a.83.83 0 0 1 1.47 0L14 18.13a.8.8 0 0 1-.73 1.12Z"/>',
};

export const balanceIconName = 'balance';
export const balanceIcon: IconShapeTuple = [balanceIconName, renderIcon(icon)];
