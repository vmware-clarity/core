/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 4a14 14 0 1 0 14 14A14 14 0 0 0 18 4m0 24a10 10 0 1 1 10-10 10 10 0 0 1-10 10"/><path d="m21.66 14.72-5.16 5.16-2.79-2.79a1.61 1.61 0 0 0-2.27 2.27l5.06 5.05L23.92 17a1.6 1.6 0 0 0 0-2.26 1.62 1.62 0 0 0-2.26-.02"/>',
  solid:
    '<path d="M18 4a14 14 0 1 0 14 14A14 14 0 0 0 18 4m8.27 12.51-9.37 9.43-6.34-6.55a2 2 0 1 1 2.88-2.78l3.5 3.62 6.49-6.54a2 2 0 1 1 2.84 2.82"/>',
};

export const checkCircleMiniIconName = 'check-circle-mini';
export const checkCircleMiniIcon: IconShapeTuple = [checkCircleMiniIconName, renderIcon(icon)];
