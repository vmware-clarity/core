/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M20.57 20A8.23 8.23 0 0 0 29 12a8.23 8.23 0 0 0-8.43-8H12a1 1 0 0 0-1 1v13H9a1 1 0 0 0 0 2h2v2H9a1 1 0 0 0 0 2h2v7a1 1 0 0 0 2 0v-7h9a1 1 0 0 0 0-2h-9v-2ZM13 6h7.57A6.24 6.24 0 0 1 27 12a6.23 6.23 0 0 1-6.43 6H13Z"/>',
  solid:
    '<path d="M20.75 9.25H15v8.81h5.79a4.66 4.66 0 0 0 4.86-4.4 4.65 4.65 0 0 0-4.9-4.41"/><path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m2.75 18.56H15V22h8.29a1 1 0 0 1 0 2H15v5a1.25 1.25 0 0 1-2.5 0v-5h-1.25a1 1 0 0 1 0-2h1.21v-1.44h-1.21a1.25 1.25 0 0 1 0-2.5h1.21V8a1.25 1.25 0 0 1 1.25-1.25h7a7.14 7.14 0 0 1 7.36 6.9 7.15 7.15 0 0 1-7.32 6.91"/>',
};

export const rubleIconName = 'ruble';
export const rubleIcon: IconShapeTuple = [rubleIconName, renderIcon(icon)];
