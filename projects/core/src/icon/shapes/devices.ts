/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 13h-8a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V15a2 2 0 0 0-2-2m0 2v11h-8V15Zm-8 15v-2.4h8V30Z"/><path d="M20 22H4V6h24v5h2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16Zm0 4H9a1 1 0 0 0 0 2h11Z"/>',
  solid:
    '<path d="M32 13h-8a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V15a2 2 0 0 0-2-2m0 2v13h-8V15Z"/><path d="M28 4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v2H9.32A1.2 1.2 0 0 0 8 27a1.2 1.2 0 0 0 1.32 1h10.6v-.37H20V22H4V6h24v5h2V6a2 2 0 0 0-2-2"/>',
};

export const devicesIconName = 'devices';
export const devicesIcon: IconShapeTuple = [devicesIconName, renderIcon(icon)];
