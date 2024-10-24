/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M30 4H22C20.8954 4 20 4.89543 20 6V14C20 15.1046 20.8954 16 22 16H30C31.1046 16 32 15.1046 32 14V6C32 4.89543 31.1046 4 30 4ZM14 20H6C4.89543 20 4 20.8954 4 22V30C4 31.1046 4.89543 32 6 32H14C15.1046 32 16 31.1046 16 30V22C16 20.8954 15.1046 20 14 20ZM22 20H30C31.1046 20 32 20.8954 32 22V30C32 31.1046 31.1046 32 30 32H22C20.8954 32 20 31.1046 20 30V22C20 20.8954 20.8954 20 22 20ZM22 22V30H30V22H22ZM6 22V30H14V22H6ZM22 6V14H30V6H22ZM14 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H14C15.1046 16 16 15.1046 16 14V6C16 4.89543 15.1046 4 14 4ZM6 6V14H14V6H6Z"/>',
  solid:
    '<path d="M20 6C20 4.89543 20.8954 4 22 4H30C31.1046 4 32 4.89543 32 6V14C32 15.1046 31.1046 16 30 16H22C20.8954 16 20 15.1046 20 14V6Z"/><path d="M6 20C4.89543 20 4 20.8954 4 22V30C4 31.1046 4.89543 32 6 32H14C15.1046 32 16 31.1046 16 30V22C16 20.8954 15.1046 20 14 20H6Z"/><path d="M22 20C20.8954 20 20 20.8954 20 22V30C20 31.1046 20.8954 32 22 32H30C31.1046 32 32 31.1046 32 30V22C32 20.8954 31.1046 20 30 20H22Z"/><path d="M6 4C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H14C15.1046 16 16 15.1046 16 14V6C16 4.89543 15.1046 4 14 4H6Z"/>',
};

export const gridViewIconName = 'grid-view';
export const gridViewIcon: IconShapeTuple = [gridViewIconName, renderIcon(icon)];
