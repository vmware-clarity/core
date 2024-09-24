/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m13.399 15.746 6.348-8.127c.13-.16.21-.36.23-.57s-.01-.42-.1-.61-.23-.35-.41-.46a1.1 1.1 0 0 0-.58-.169c-.17 0-.33.04-.48.11s-.28.18-.38.31l-6.008 7.737-6.02-7.737a1.1 1.1 0 0 0-.9-.48c-.209 0-.409.06-.579.17-.18.11-.32.27-.41.46s-.13.4-.11.61.1.41.23.57l6.359 8.186-6.339 8.127c-.13.16-.21.36-.23.57s.01.42.1.61.23.35.41.46.38.17.58.17c.17 0 .33-.04.48-.11s.28-.18.38-.31l5.979-7.698 6.089 7.758c.1.13.23.24.38.31s.31.11.48.11c.21 0 .41-.06.58-.17.18-.11.32-.27.41-.46s.13-.4.1-.61-.1-.41-.23-.57zm12.377 14.555 3.24-2.89c.87-.72 1.62-1.569 2.24-2.528.44-.72.68-1.56.68-2.41a3.56 3.56 0 0 0-2-3.268c-.62-.32-1.31-.47-2-.46a5.07 5.07 0 0 0-4.36 2.44l1 .829c.4-.58.9-1.07 1.48-1.46a3.2 3.2 0 0 1 1.83-.51c.44 0 .87.1 1.26.29.4.19.75.49 1 .86.24.39.36.84.35 1.31 0 .72-.23 1.419-.63 1.999-.53.79-1.16 1.5-1.88 2.109l-4.49 3.909v1.229h8.5v-1.44h-6.22z"/>',
};

export const subscriptIconName = 'subscript';
export const subscriptIcon: IconShapeTuple = [subscriptIconName, renderIcon(icon)];
