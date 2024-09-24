/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M18 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 18 2m0 5.2C12.035 7.2 7.2 12.035 7.2 18S12.035 28.8 18 28.8 28.8 23.965 28.8 18C28.794 12.038 23.962 7.206 18 7.2M12.31 18a5.69 5.69 0 1 1 11.38 0 5.69 5.69 0 0 1-11.38 0m1.91 1.553A4.09 4.09 0 0 0 18 22.08v.01A4.09 4.09 0 0 0 22.09 18a4.09 4.09 0 1 0-7.87 1.553M8.8 18a9.2 9.2 0 0 0 9.2 9.2 9.21 9.21 0 0 0 9.2-9.2 9.2 9.2 0 0 0-18.4 0M4 18c0 7.732 6.268 14 14 14a14 14 0 0 0 14-14c0-7.732-6.268-14-14-14S4 10.268 4 18" clip-rule="evenodd"/>',
  solid:
    '<path d="M22.09 18a4.09 4.09 0 1 1-8.18 0 4.09 4.09 0 0 1 8.18 0"/><path fill-rule="evenodd" d="M7.83 18c0-5.617 4.553-10.17 10.17-10.17 5.615.006 10.165 4.556 10.17 10.17 0 5.617-4.553 10.17-10.17 10.17S7.83 23.617 7.83 18M18 23.83A5.88 5.88 0 1 1 23.88 18 5.88 5.88 0 0 1 18 23.88z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M18 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 18 2m0 27.83c-6.533 0-11.83-5.296-11.83-11.83S11.467 6.17 18 6.17 29.83 11.467 29.83 18c-.011 6.529-5.301 11.819-11.83 11.83" clip-rule="evenodd"/>',
};

export const targetIconName = 'target';
export const targetIcon: IconShapeTuple = [targetIconName, renderIcon(icon)];
