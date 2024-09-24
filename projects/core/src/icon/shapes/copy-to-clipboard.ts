/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M22.6 4h-1.05a3.89 3.89 0 0 0-7.31 0h-.84A2.41 2.41 0 0 0 11 6.4V10h14V6.4A2.41 2.41 0 0 0 22.6 4m.4 4H13V6.25a.25.25 0 0 1 .25-.25h2.69l.12-1.11a1.24 1.24 0 0 1 .55-.89 2 2 0 0 1 3.15 1.18l.09.84h2.9a.25.25 0 0 1 .25.25Zm10.25 10.06H21.33l2.84-2.83a1 1 0 1 0-1.42-1.42l-5.25 5.25 5.25 5.25a1 1 0 0 0 .71.29 1 1 0 0 0 .71-1.7l-2.84-2.84h11.92a1 1 0 0 0 0-2"/><path d="M29 16h2V6.68A1.66 1.66 0 0 0 29.35 5h-2.27v2H29Zm0 15H7V7h2V5H6.64A1.66 1.66 0 0 0 5 6.67v24.65A1.66 1.66 0 0 0 6.65 33h22.71A1.66 1.66 0 0 0 31 31.33v-9.27h-2Z"/>',
};

export const copyToClipboardIconName = 'copy-to-clipboard';
export const copyToClipboardIcon: IconShapeTuple = [copyToClipboardIconName, renderIcon(icon)];
