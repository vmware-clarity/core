/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26.64 25.27 19 17.53V3l6.21 6.4-5.65 5.79L21 16.62l5.68-5.82a2 2 0 0 0 0-2.78l-6.2-6.32a2.08 2.08 0 0 0-1.63-.7A2 2 0 0 0 17 3v12.38l-6.95-7.11a1 1 0 0 0-1.43 1.39L16.79 18l-7.73 8a1 1 0 0 0 0 1.41 1 1 0 0 0 .7.29 1 1 0 0 0 .72-.31L17 20.68V33a2.07 2.07 0 0 0 .71 1.62A2 2 0 0 0 19 35a1.94 1.94 0 0 0 1.42-.6l6.23-6.38a2 2 0 0 0-.01-2.75M19 33.05V20.29l6.21 6.36Z"/>',
  solid:
    '<path d="m26.52 24.52-5.65-5.83-1.46-1.5v-12l4.38 4.51-3.6 3.71 2.24 2.29 4.09-4.22a2.54 2.54 0 0 0 0-3.56l-5.95-6.14a2.54 2.54 0 0 0-4.37 1.77v10.31l-5.53-5.7a1.6 1.6 0 1 0-2.3 2.23L15.75 18l-7 7.19a1.6 1.6 0 0 0 0 2.26 1.63 1.63 0 0 0 1.12.45 1.58 1.58 0 0 0 1.15-.49l5.11-5.27v10.31a2.53 2.53 0 0 0 1.59 2.36 2.4 2.4 0 0 0 .95.19 2.56 2.56 0 0 0 1.83-.77l5.95-6.15a2.54 2.54 0 0 0 .07-3.56m-7.12 6.31v-9.06l4.39 4.53Z"/>',
};

export const bluetoothIconName = 'bluetooth';
export const bluetoothIcon: IconShapeTuple = [bluetoothIconName, renderIcon(icon)];
