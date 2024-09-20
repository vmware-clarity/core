/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 8H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 18H4V10h28Z"/><path d="M7 13h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zM7 17h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm0 5h1.94v2H27zM7 22h2v2H7zm4.13 0h13.75v2H11.13z"/>',
  solid:
    '<path d="M32 8H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m-13 5h2v2h-2Zm0 4h2v2h-2Zm-4-4h2v2h-2Zm0 4h2v2h-2Zm-4-4h2v2h-2ZM9 24H7v-2h2Zm0-5H7v-2h2Zm0-4H7v-2h2Zm2 2h2v2h-2Zm13.88 7H11.13v-2h13.75Zm.12-5h-2v-2h2Zm0-4h-2v-2h2Zm3.94 9H27v-2h1.94Zm.06-5h-2v-2h2Zm0-4h-2v-2h2Z"/>',
};

export const keyboardIconName = 'keyboard';
export const keyboardIcon: IconShapeTuple = [keyboardIconName, renderIcon(icon)];
