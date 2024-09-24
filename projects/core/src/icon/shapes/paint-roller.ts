/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M29 10.75v-6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h21c1.1 0 2-.9 2-2m-23-6h21v6H6zm25 2h-1v6.29l-13.3 4.25c-.43.14-.72.55-.7 1v1.46h-2v13c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-13h-2v-.73l13.3-4.27c.43-.14.72-.55.7-1v-6c0-.55-.45-1-1-1m-13 26h-2v-11h2z" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M29 10.75v-6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h21c1.1 0 2-.9 2-2m2-4h-1v6.29l-13.3 4.25c-.43.14-.72.55-.7 1v1.46h-2v13c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-13h-2v-.73l13.3-4.27c.43-.14.72-.55.7-1v-6c0-.55-.45-1-1-1" clip-rule="evenodd"/>',
};

export const paintRollerIconName = 'paint-roller';
export const paintRollerIcon: IconShapeTuple = [paintRollerIconName, renderIcon(icon)];
