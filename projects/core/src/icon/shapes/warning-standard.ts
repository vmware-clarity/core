/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 22.993c.55 0 1-.45 1-1V10.999c0-.55-.45-1-1-1s-1 .45-1 1v10.996c0 .55.45 1 1 1m15.56 4.219L20.78 5.579A3.19 3.19 0 0 0 18 4c-1.16 0-2.2.59-2.78 1.58L2.44 27.211c-.59 1-.59 2.189-.01 3.189A3.2 3.2 0 0 0 5.22 32h25.55c1.17 0 2.21-.6 2.79-1.6s.58-2.189-.01-3.188zM31.81 29.4c-.1.18-.41.59-1.03.59H5.23c-.62 0-.93-.41-1.03-.59s-.31-.65 0-1.17L16.98 6.59c.31-.52.82-.58 1.02-.58s.71.06 1.02.58l12.77 21.632c.31.53.11 1 0 1.17zm-13.8-4.398c-.73 0-1.33.6-1.33 1.329 0 .73.6 1.33 1.33 1.33s1.33-.6 1.33-1.33-.6-1.33-1.33-1.33"/>',
  solid:
    '<path d="M33.56 27.22 20.78 5.58A3.19 3.19 0 0 0 18 4c-1.16 0-2.2.59-2.78 1.58L2.44 27.22c-.59 1-.59 2.19 0 3.19a3.2 3.2 0 0 0 2.79 1.6h25.55c1.17 0 2.21-.6 2.79-1.6s.58-2.19-.01-3.19M16.9 11c0-.61.49-1.1 1.1-1.1s1.1.49 1.1 1.1v11c0 .61-.49 1.1-1.1 1.1s-1.1-.49-1.1-1.1zM18 27.76a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86"/>',
};

export const warningStandardIconName = 'warning-standard';
export const warningStandardIcon: IconShapeTuple = [warningStandardIconName, renderIcon(icon)];
