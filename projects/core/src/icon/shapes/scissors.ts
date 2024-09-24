/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m24.06 18.18 9.61-8.77a1 1 0 0 0-.09-1.55l-2.24-1.6a3.57 3.57 0 0 0-4.28.12L15.88 15.3l-3.26-2.52a5.45 5.45 0 1 0-1 1.77l2.62 2L10 20a5.48 5.48 0 1 0 1.59 1.29L28.3 7.94a1.57 1.57 0 0 1 1.88-.05l1.23.88-10.31 9.42 10.31 9.4-1.23.88a1.57 1.57 0 0 1-1.88-.05l-9.81-7.85L17 21.93l10.06 8a3.57 3.57 0 0 0 4.29.12l2.24-1.6a1 1 0 0 0 .09-1.55ZM7.45 14.54a3.46 3.46 0 1 1 3.45-3.46 3.46 3.46 0 0 1-3.45 3.46m0 13.72a3.46 3.46 0 1 1 3.45-3.46 3.46 3.46 0 0 1-3.45 3.46"/>',
  solid:
    '<path d="m33.81 8.13-2.18-1.65a1.92 1.92 0 0 0-2.36 0L10 22.06a5.46 5.46 0 1 0 2 1.81l3.9-3.12 13.37 10.77a1.92 1.92 0 0 0 2.36 0l2.18-1.64L20.94 19ZM7.45 29.75a2.86 2.86 0 1 1 2.86-2.86 2.87 2.87 0 0 1-2.86 2.86"/><path d="M14.3 15.24 12 13.38a5.46 5.46 0 1 0-2 1.81L12.16 17Zm-6.85-2a2.86 2.86 0 1 1 2.86-2.86 2.86 2.86 0 0 1-2.86 2.85Z"/>',
};

export const scissorsIconName = 'scissors';
export const scissorsIcon: IconShapeTuple = [scissorsIconName, renderIcon(icon)];
