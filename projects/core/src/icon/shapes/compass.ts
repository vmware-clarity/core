/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M20.82 15.31 10.46 9c-.46-.26-1.11.37-.86.84l6.15 10.56 10.56 6.15a.66.66 0 0 0 .84-.86Zm-4 4 3-3 4.55 7.44Z"/><path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m1 29.95v-2.42h-2v2.42A14 14 0 0 1 4.05 19h2.42v-2H4.05A14 14 0 0 1 17 4.05v2.42h2V4.05A14 14 0 0 1 31.95 17h-2.42v2h2.42A14 14 0 0 1 19 31.95"/>',
  solid:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2M6.47 19H4.05c0-.33-.05-.66-.05-1s0-.67.05-1h2.42ZM17 4.05c.33 0 .66-.05 1-.05s.67 0 1 .05v2.42h-2Zm2 27.9c-.33 0-.66.05-1 .05s-.67 0-1-.05v-2.42h2Zm8-5.58a.59.59 0 0 1-.69.16l-10.56-6.15L9.6 9.82c-.25-.47.39-1.1.86-.84l10.37 6.33 6.33 10.37a.59.59 0 0 1-.16.69M29.53 19v-2h2.42c0 .33.05.66.05 1s0 .67-.05 1Z"/><path d="m16.77 19.35 7.58 4.42-4.55-7.44z"/>',
};

export const compassIconName = 'compass';
export const compassIcon: IconShapeTuple = [compassIconName, renderIcon(icon)];
