/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m13.4 21 6.35-8.13c.13-.16.21-.36.23-.57s-.01-.42-.1-.61-.23-.35-.41-.46-.38-.17-.58-.17c-.17 0-.33.04-.48.11s-.28.18-.38.31l-6.01 7.74L6 11.48a1.1 1.1 0 0 0-.9-.48c-.21 0-.41.06-.58.17-.18.11-.32.27-.41.46s-.13.4-.1.61.1.41.23.57L10.6 21l-6.35 8.13c-.13.16-.21.36-.23.57s.01.42.1.61.23.35.41.46.38.17.58.17c.17 0 .33-.04.48-.11s.28-.18.38-.31l5.98-7.7 6.09 7.76c.1.13.23.24.38.31s.31.11.48.11c.21 0 .41-.06.58-.17.18-.11.32-.27.41-.46s.13-.4.1-.61-.1-.41-.23-.57zm12.38-4.44 3.24-2.89c.87-.72 1.62-1.57 2.24-2.53.44-.72.68-1.56.68-2.41a3.57 3.57 0 0 0-2-3.27c-.62-.31-1.31-.47-2-.46a5.07 5.07 0 0 0-4.36 2.44l1 .83c.4-.58.9-1.07 1.48-1.46a3.2 3.2 0 0 1 1.83-.51c.44 0 .87.1 1.26.29.4.19.75.49 1 .86.24.39.36.84.35 1.31 0 .72-.23 1.42-.63 2-.53.79-1.16 1.5-1.88 2.11l-4.49 3.91v1.23H32v-1.44h-6.22z"/>',
};

export const superscriptIconName = 'superscript';
export const superscriptIcon: IconShapeTuple = [superscriptIconName, renderIcon(icon)];
