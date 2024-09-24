/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26.54 20.82a.88.88 0 0 0-.88-.88h-4.91l1.1-1.1a.88.88 0 0 0-1.25-1.24l-3.21 3.22L20.6 24a.88.88 0 1 0 1.25-1.24l-1.09-1.06h4.9a.88.88 0 0 0 .88-.88m2.73.88a.88.88 0 1 0 0-1.76h-.58a.88.88 0 1 0 0 1.76Zm2.94-1.7h-.06a.85.85 0 0 0-.85.88.91.91 0 0 0 .91.88.88.88 0 1 0 0-1.76m.38-9a.88.88 0 0 0-1.25 1.24l1.1 1.1h-4.91a.88.88 0 1 0 0 1.76h4.9l-1.09 1.09a.88.88 0 0 0 1.25 1.24l3.21-3.22Zm-8.09 4.07a.88.88 0 1 0 0-1.76h-.58a.88.88 0 1 0 0 1.76Zm-2.6-.8a.85.85 0 0 0-.85-.88H21a.88.88 0 1 0 0 1.76.91.91 0 0 0 .9-.88"/><path d="M30.36 23.65v.39a3.77 3.77 0 0 1-3.62 3.89H7.28a5.32 5.32 0 0 1-5.13-5.48A5.32 5.32 0 0 1 7.28 17h1.63l.09-.88a8.92 8.92 0 0 1 8.62-8h.08a8.49 8.49 0 0 1 6.56 3.29h2.37a10.55 10.55 0 0 0-8.91-5.25h-.11A10.82 10.82 0 0 0 7.22 15a7.28 7.28 0 0 0-7 7.43 7.27 7.27 0 0 0 7.08 7.43h19.47A5.72 5.72 0 0 0 32.35 24a4 4 0 0 0 0-.39Z"/>',
};

export const cloudTrafficIconName = 'cloud-traffic';
export const cloudTrafficIcon: IconShapeTuple = [cloudTrafficIconName, renderIcon(icon)];
