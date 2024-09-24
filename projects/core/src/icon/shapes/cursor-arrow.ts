/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M13.711 31.35c.147.392.522.651.942.65h.02c.43-.012.806-.298.931-.71l2.605-8.454 8.343 8.334c.19.187.445.291.711.29.266.001.522-.103.711-.29l3.266-3.262a1 1 0 0 0 0-1.41l-8.314-8.304 8.374-2.571a1 1 0 0 0 .05-1.891L5.307 4.048a1.002 1.002 0 0 0-1.252 1.28zm4.748-11.065a1 1 0 0 0-.711-.29l-.25.01c-.34.086-.61.345-.712.68l-2.224 7.203L6.66 6.678l21.214 7.894-7.141 2.201a1 1 0 0 0-.411 1.661l8.774 8.764-1.833 1.88z" clip-rule="evenodd"/>',
  solid:
    '<path d="M31.228 13.718 5.39 4.066a1.028 1.028 0 0 0-1.327 1.32l9.679 25.945a1.028 1.028 0 0 0 1.944-.052l2.767-9.023 9.38 9.178c.402.4 1.05.4 1.45 0l2.418-2.424a1.033 1.033 0 0 0 0-1.454l-9.35-9.136 8.877-2.753a1.031 1.031 0 0 0 0-1.95"/>',
};

export const cursorArrowIconName = 'cursor-arrow';
export const cursorArrowIcon: IconShapeTuple = [cursorArrowIconName, renderIcon(icon)];
