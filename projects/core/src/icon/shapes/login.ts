/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M13 4h17c1.1 0 2 .9 2 2v24c0 1.1-.9 2-2 2H13c-1.1 0-2-.9-2-2v-7.99h2V30h17V6H11c0-1.1.9-2 2-2m2.8 15.45c-.09-.37.04-.75.32-.99L19.5 15H5c-.55 0-1-.45-1-1s.45-1 1-1h14.5l-3.37-3.3c-.34-.4-.32-.99.05-1.36s.96-.39 1.36-.05l5.78 5.79-5.79 5.79a.98.98 0 0 1-.99.32 1 1 0 0 1-.74-.74" clip-rule="evenodd"/>',
  solid:
    '<path d="M30 4H13c-1.1 0-2 .9-2 2v6.95h8.5l-3.37-3.3c-.34-.4-.32-.99.05-1.36s.96-.39 1.36-.05l5.78 5.79-5.79 5.79a.98.98 0 0 1-.99.32c-.36-.09-.65-.37-.74-.74s.04-.75.32-.99l3.38-3.46H11V13H5c-.55 0-1 .45-1 1s.45 1 1 1h6v15c0 1.1.9 2 2 2h17c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2"/>',
};

export const loginIconName = 'login';
export const loginIcon: IconShapeTuple = [loginIconName, renderIcon(icon)];
