/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26 32H10a6 6 0 0 1-6-6V10a6 6 0 0 1 6-6h16a6 6 0 0 1 6 6v16a6 6 0 0 1-6 6M10 6a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4Z"/><path d="M26.56 15H15.44A1.43 1.43 0 0 0 14 16.44v8.12A1.43 1.43 0 0 0 15.44 26h11.12A1.43 1.43 0 0 0 28 24.56v-8.12A1.43 1.43 0 0 0 26.56 15M26 24H16v-7h10Z"/><path d="M12.4 19H10v-7h10v1.4h2v-2a1.43 1.43 0 0 0-1.44-1.4H9.44A1.43 1.43 0 0 0 8 11.44v8.12A1.43 1.43 0 0 0 9.44 21h3Z"/>',
};

export const podIconName = 'pod';
export const podIcon: IconShapeTuple = [podIconName, renderIcon(icon)];
