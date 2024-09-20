/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21.89 2H7.83A1.88 1.88 0 0 0 6 3.91V15h2V4h12v8h8v20H8v-5H6v5.09A1.88 1.88 0 0 0 7.83 34h20.34A1.88 1.88 0 0 0 30 32.09V9.92Zm.11 8V4.1l6 5.9Z"/><path d="m9.78 25.35-2.83-3.97 2.83-3.93H7.85L6 20.04l-1.86-2.59H2.19l2.82 3.97-2.82 3.93h1.92l1.86-2.59 1.84 2.59zm.88-7.9v7.9h5.49v-1.53h-3.83v-6.37zm9.53 6.6a3.74 3.74 0 0 1-2.54-1l-.95 1.16a4.92 4.92 0 0 0 3.42 1.31c1.88 0 3-1 3-2.51s-1.1-2-2.75-2.35c-1.19-.27-1.65-.46-1.65-1s.42-.85 1.13-.85a3.57 3.57 0 0 1 2.2.87l.86-1.22a4.36 4.36 0 0 0-3-1.09A2.54 2.54 0 0 0 17 19.51a2 2 0 0 0 0 .26c0 1.53 1.15 2 2.78 2.38 1.17.28 1.62.45 1.62 1s-.4.9-1.21.9"/>',
  solid:
    '<path d="M21.89 2H7.83A1.88 1.88 0 0 0 6 3.91V14h2V4h12v8h8v4H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h25v4H8v-2H6v2.09A1.88 1.88 0 0 0 7.83 34h20.34A1.88 1.88 0 0 0 30 32.09V9.92ZM12 25.87h-2l-1.8-2.54-1.79 2.54H4.53L7.29 22l-2.76-3.87h1.91l1.81 2.54 1.81-2.54H12L9.19 22Zm6.24 0h-5.43v-7.74h1.63v6.24h3.75Zm3.88.13a4.83 4.83 0 0 1-3.35-1.28l.94-1.14a3.64 3.64 0 0 0 2.48 1c.81 0 1.23-.38 1.23-.86s-.44-.72-1.6-1c-1.59-.37-2.72-.84-2.72-2.33A2.5 2.5 0 0 1 21.7 18h.14a4.27 4.27 0 0 1 2.95 1.07L24 20.26a3.5 3.5 0 0 0-2.15-.85c-.69 0-1.11.37-1.11.83s.45.74 1.61 1c1.62.37 2.7.87 2.7 2.3S23.91 26 22.07 26ZM22 10V4.1l6 5.9Z"/>',
};

export const xlsFileIconName = 'xls-file';
export const xlsFileIcon: IconShapeTuple = [xlsFileIconName, renderIcon(icon)];
