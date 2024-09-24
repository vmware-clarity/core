/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M18 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 18 2m0 30c-7.732 0-14-6.268-14-14S10.268 4 18 4s14 6.268 14 14a14 14 0 0 1-14 14m8.59-19.9A1 1 0 1 1 28 13.52L15.49 26 8 18.53a1.015 1.015 0 1 1 1.49-1.38l6 6z" clip-rule="evenodd"/>',
  solid:
    '<path d="M29.31 6.69C26.31 3.69 22.24 2 18 2 9.16 2 2 9.16 2 18s7.16 16 16 16 16-7.16 16-16c0-4.24-1.69-8.31-4.69-11.31m-1.17 6.95L15.63 26.12l-.14.14-.14-.14-7.5-7.48a1.216 1.216 0 0 1 .9-2.04c.34 0 .66.14.89.38l5.86 5.86 10.96-10.91c.23-.23.53-.35.85-.35s.62.12.85.35c.23.22.35.53.35.85s-.13.63-.35.85z"/>',
};

export const successStandardIconName = 'success-standard';
export const successStandardIcon: IconShapeTuple = [successStandardIconName, renderIcon(icon)];
