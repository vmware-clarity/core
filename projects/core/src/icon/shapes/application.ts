/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5 7h2v2H5zm4 0h2v2H9zm4 0h2v2h-2z"/><path d="M32 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 6h28v4.2H4Zm0 24V11.8h28V30Z"/>',
  solid:
    '<path d="M32 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 6.2H4V6h28Z"/><path d="M5 7h2v2H5zm4 0h2v2H9zm4 0h2v2h-2z"/>',
};

export const applicationIconName = 'application';
export const applicationIcon: IconShapeTuple = [applicationIconName, renderIcon(icon)];
