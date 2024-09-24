/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M32 8H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m-5 5h2v2h-2zm0 4h2v2h-2zM7 22h2v2H7zm4.13 0h13.75v2H11.13zm17.81 0H27v2h1.94zM25 17h-2v2h2zm-6 0h2v2h-2zm-2 0h-2v2h2zm-6 0h2v2h-2zm-2 0H7v2h2zm16-4h-2v2h2zm-6 0h2v2h-2zm-2 0h-2v2h2zm-6 0h2v2h-2zm-2 0H7v2h2zM4 26h28V10H4z" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M4 8h28a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2m17 5h-2v2h2zm-2 4h2v2h-2zm-2-4h-2v2h2zm-2 4h2v2h-2zm-2-4h-2v2h2zM9 24H7v-2h2zm-2-5h2v-2H7zm2-4H7v-2h2zm4 2h-2v2h2zm11.88 7H11.13v-2h13.75zM23 19h2v-2h-2zm2-4h-2v-2h2zm2 9h1.94v-2H27zm2-5h-2v-2h2zm-2-4h2v-2h-2z" clip-rule="evenodd"/>',
};

export const keyboardIconName = 'keyboard';
export const keyboardIcon: IconShapeTuple = [keyboardIconName, renderIcon(icon)];
