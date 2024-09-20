/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32.88 19.92h-30a1 1 0 1 1 0-2h30a1 1 0 0 1 0 2"/><path d="M7.27 15.86a13 13 0 0 1 1.29-.52 5.7 5.7 0 0 1 1.83-.34 3.18 3.18 0 0 1 2.75 1.11 4.44 4.44 0 0 1 .86 2.74v.49a13.8 13.8 0 0 0-4.29-.74 6.2 6.2 0 0 0-2.59.54 5 5 0 0 0-1.31.86h10.07v-1.15a5.67 5.67 0 0 0-1.37-4 5.16 5.16 0 0 0-4-1.49 10 10 0 0 0-3.91.88.87.87 0 0 0-.44 1.18.84.84 0 0 0 1.11.44M21 20a5.9 5.9 0 0 1 .54-2.31 4.35 4.35 0 0 1 1.58-1.83 4.27 4.27 0 0 1 4.59 0 4.47 4.47 0 0 1 1.57 1.83 6.1 6.1 0 0 1 .57 2.31h2a7.7 7.7 0 0 0-.78-3.19 6 6 0 0 0-2.18-2.45 5.74 5.74 0 0 0-3.1-.88 5.4 5.4 0 0 0-2.8.73 5.55 5.55 0 0 0-2 2.05V10a.87.87 0 0 0-.86-.86H20a.87.87 0 0 0-.86.86v10Zm8.67 2a5.6 5.6 0 0 1-.36 1.07 4.47 4.47 0 0 1-1.57 1.85 4.32 4.32 0 0 1-4.59 0 4.35 4.35 0 0 1-1.58-1.85A5.6 5.6 0 0 1 21.2 22h-2.11v4.13A.87.87 0 0 0 20 27h.2a.87.87 0 0 0 .86-.86v-1.63a5.6 5.6 0 0 0 2 2.06 5.5 5.5 0 0 0 2.8.72 5.66 5.66 0 0 0 3.1-.88A5.9 5.9 0 0 0 31.09 24a7.1 7.1 0 0 0 .64-2ZM14 22v.76a3.34 3.34 0 0 1-1.62 2 5.34 5.34 0 0 1-2.69.72 3.78 3.78 0 0 1-2.36-.7 2.24 2.24 0 0 1-.94-1.9 2.3 2.3 0 0 1 .2-.91H4.62a4 4 0 0 0-.13 1 3.83 3.83 0 0 0 1.35 3.06 5.15 5.15 0 0 0 3.47 1.17 6 6 0 0 0 2.69-.63 4.6 4.6 0 0 0 2-1.74V26a.86.86 0 0 0 .86.86H15a.86.86 0 0 0 .86-.86v-4Z"/>',
};

export const strikethroughIconName = 'strikethrough';
export const strikethroughIcon: IconShapeTuple = [strikethroughIconName, renderIcon(icon)];
