/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M2 8h2v2H2zm5 2h24a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m-5 4h2v2H2zm29 0H7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2M2 20h2v2H2zm29 0H7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2M2 26h2v2H2zm29 0H7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2"/>',
};

export const viewListIconName = 'view-list';
export const viewListIcon: IconShapeTuple = [viewListIconName, renderIcon(icon)];
