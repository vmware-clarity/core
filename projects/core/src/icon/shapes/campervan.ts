/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10.94 24a4 4 0 1 0 0 8 4 4 0 1 0 0-8m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m-4.001-8h8.002v-8H6.94zm2-6h4.002v4H8.939zm16.005-8h-6.001v2h6.001zm4.012 6.44a6 6 0 0 0 1.99-4.44c0-3.31-2.69-6-6.002-6h-6.001a6.03 6.03 0 0 0-5.662 4H5.938c-1.65 0-3 1.35-3 3v16c0 1.3.84 2.4 2 2.82V11c0-.55.45-1 1-1h8.923l.16-.8c.38-1.85 2.03-3.2 3.921-3.2h6.002a4 4 0 0 1 4.002 4c0 1.43-.75 2.72-2.011 3.45l-.96.55h-1.04v8h8.002v5c0 .55-.45 1-1 1h-1v2h1c1.65 0 3-1.35 3-3v-6.41l-5.991-6.16zM26.945 20v-4h.74l3.891 4zm-6.002 2h2v-8h-6.001v16h2V16h2.001zm4.001 2a4 4 0 1 0 0 8 4 4 0 1 0 0-8m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2.001.9 2.001 2-.9 2-2 2"/>',
  solid:
    '<path d="M6.939 22h8.002v-8H6.94zm4.001 2a4 4 0 1 0 0 8 4 4 0 1 0 0-8M24.944 8h-6.001v2h6.001zm-4 14h2v-8h-6.002v16h2V16h2.001zm8.012-7.56a6 6 0 0 0 1.99-4.44c0-3.31-2.69-6-6.002-6h-6.001a6.03 6.03 0 0 0-5.662 4H5.938c-1.65 0-3 1.35-3 3v16c0 1.3.84 2.4 2 2.82V11c0-.55.45-1 1-1h8.923l.16-.8c.38-1.85 2.03-3.2 3.921-3.2h6.002a4 4 0 0 1 4.002 4c0 1.43-.75 2.72-2.011 3.45l-.96.55h-1.04v8h8.002v5c0 .55-.45 1-1 1h-1v2h1c1.65 0 3-1.35 3-3v-6.41l-5.991-6.16zM24.944 24a4 4 0 1 0 0 8 4 4 0 1 0 0-8"/>',
};

export const campervanIconName = 'campervan';
export const campervanIcon: IconShapeTuple = [campervanIconName, renderIcon(icon)];
