/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.22.22 0 0 1 .08.24l-2.43 8.61A2.23 2.23 0 0 0 9.49 34a2.2 2.2 0 0 0 1.24-.38l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.22 2.22 0 0 0 3.38-2.45l-2.45-8.64a.23.23 0 0 1 .08-.24Zm-15.67 9.84a2.2 2.2 0 0 0-1.24.38l-7.47 5a.22.22 0 0 1-.34-.25l2.45-8.64a2.21 2.21 0 0 0-.73-2.35l-7.1-5.55a.22.22 0 0 1 .13-.4l9-.34A2.22 2.22 0 0 0 15 13l3.1-8.43a.2.2 0 0 1 .21-.15Z"/>',
  solid:
    '<path d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0 2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Zm-9.1 6.33 2.45 8.64A.22.22 0 0 1 27 32l-7.46-5a2.2 2.2 0 0 0-1.24-.38V4.44a.2.2 0 0 1 .21.15L21.62 13a2.22 2.22 0 0 0 2 1.46l9 .34a.22.22 0 0 1 .13.4l-7.06 5.55a2.21 2.21 0 0 0-.79 2.36"/>',
};

export const halfStarIconName = 'half-star';
export const halfStarIcon: IconShapeTuple = [halfStarIconName, renderIcon(icon)];
