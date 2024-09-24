/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M18 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 18 2m9.15 13A1.85 1.85 0 0 1 29 16.85v2.3A1.85 1.85 0 0 1 27.15 21H8.85A1.85 1.85 0 0 1 7 19.14v-2.29A1.85 1.85 0 0 1 8.85 15zm0 4.4a.25.25 0 0 0 .25-.25v-2.3a.25.25 0 0 0-.25-.25H8.85a.25.25 0 0 0-.25.25v2.3c0 .138.112.25.25.25zM4 18c0 7.732 6.268 14 14 14a14 14 0 0 0 14-14c0-7.732-6.268-14-14-14S4 10.268 4 18" clip-rule="evenodd"/>',

  solid:
    '<path fill-rule="evenodd" d="M2 18C2 9.163 9.163 2 18 2a16 16 0 0 1 16 16c0 8.837-7.163 16-16 16S2 26.837 2 18m4.249 1.751A.85.85 0 0 0 6.85 20h22.3a.85.85 0 0 0 .85-.86v-2.29a.85.85 0 0 0-.85-.85H6.85a.85.85 0 0 0-.85.85v2.3c0 .225.09.442.249.601" clip-rule="evenodd"/>',
};

export const noAccessIconName = 'no-access';
export const noAccessIcon: IconShapeTuple = [noAccessIconName, renderIcon(icon)];
