/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 4h-6c-.55 0-1 .45-1 1v26c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1m-1 26h-4V6h4zm-8.46-12.84-20-13c-.3-.2-.7-.21-1.02-.04S2 4.63 2 5v26c0 .37.2.7.52.88a1 1 0 0 0 1.02-.04l20-13a.998.998 0 0 0 0-1.68M4 29.16V6.84L21.17 18z"/>',
  solid:
    '<path d="M33 4h-6c-.55 0-1 .45-1 1v26c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1m-9.46 13.16-20-13c-.3-.2-.7-.21-1.02-.04S2 4.63 2 5v26c0 .37.2.7.52.88a1 1 0 0 0 1.02-.04l20-13a.998.998 0 0 0 0-1.68"/>',
};

export const stepForwardIconName = 'step-forward';
export const stepForwardIcon: IconShapeTuple = [stepForwardIconName, renderIcon(icon)];
