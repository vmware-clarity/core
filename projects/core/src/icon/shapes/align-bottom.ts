/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34 30H2a1 1 0 0 0 0 2h32a1 1 0 0 0 0-2M16 5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v23h10Zm-2 21H8V6h6Zm16-13a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v15h10Zm-2 13h-6V14h6Z"/>',
};

export const alignBottomIconName = 'align-bottom';
export const alignBottomIcon: IconShapeTuple = [alignBottomIconName, renderIcon(icon)];
