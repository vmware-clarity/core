/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m19 3 6.22 6.4-5.66 5.8L21 16.63l5.68-5.83a2 2 0 0 0 0-2.78l-6.2-6.32a2 2 0 0 0-1.63-.7A2 2 0 0 0 17 3v11.4l2 2ZM4.77 5 3.36 6.42 15.89 19l-6.83 7a1 1 0 0 0 .71 1.7 1 1 0 0 0 .72-.31L17 20.68v12.26a2.08 2.08 0 0 0 .71 1.63A2 2 0 0 0 19 35a2 2 0 0 0 1.42-.6l5.41-5.54 3.54 3.53 1.4-1.39ZM19 33.05v-11l5.41 5.41Z"/>',
  solid:
    '<path d="M19.31 5.17 23.7 9.7l-3.59 3.71 2.24 2.29 4.09-4.22a2.56 2.56 0 0 0 0-3.56l-6-6.14a2.51 2.51 0 0 0-2.77-.59 2.54 2.54 0 0 0-1.6 2.36v10l3.21 3.21ZM4.5 5 3.09 6.42l12.08 12.09-6.47 6.68a1.6 1.6 0 0 0 1.15 2.71 1.57 1.57 0 0 0 1.15-.49l5.11-5.27v10.31a2.54 2.54 0 0 0 1.6 2.36 2.4 2.4 0 0 0 .95.19 2.55 2.55 0 0 0 1.82-.77l5.12-5.29 3.49 3.48L30.5 31Zm15.31 25.83v-8.18l4 4Z"/>',
};

export const bluetoothOffIconName = 'bluetooth-off';
export const bluetoothOffIcon: IconShapeTuple = [bluetoothOffIconName, renderIcon(icon)];
