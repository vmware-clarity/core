/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26.5 2h-17A1.5 1.5 0 0 0 8 3.5V34h20V3.5A1.5 1.5 0 0 0 26.5 2M26 32H10V4h16Z"/><path d="M12 6.2h12v1.6H12zm0 4h12v1.6H12zm6 12.58a3 3 0 1 0 3 3 3 3 0 0 0-3-3m0 4.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5"/>',

  outlineAlerted:
    '<path d="M18 28.78a3 3 0 1 0-3-3 3 3 0 0 0 3 3m0-4.5a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5m.89-14.08H12v1.6h6.56a3.7 3.7 0 0 1 .33-1.6M12 6.2v1.6h8.25l.93-1.6z"/><path d="M26 32H10V4h12.45l1.15-2H9.5A1.5 1.5 0 0 0 8 3.5V34h20V15.4h-2Z"/><path d="m34.78 11.05-5.72-9.91a1.28 1.28 0 0 0-2.21 0l-5.72 9.91a1.27 1.27 0 0 0 1.1 1.95h11.45a1.27 1.27 0 0 0 1.1-1.95"/>',

  outlineBadged:
    '<path d="M15 25.78a3 3 0 1 0 3-3 3 3 0 0 0-3 3m4.5 0a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5M12 11.8h12v-1.31c-.07-.1-.15-.19-.21-.29H12Zm0-5.6v1.6h10.73a7 7 0 0 1-.22-1.6Z"/><path d="M26 32H10V4h12.78a7.7 7.7 0 0 1 .88-2H9.5A1.5 1.5 0 0 0 8 3.5V34h20V13.22a7.7 7.7 0 0 1-2-.88Z"/><circle cx="30" cy="6" r="5"/>',

  solid:
    '<circle cx="18" cy="25.64" r="1.5"/><path d="M26.5 1.86h-17A1.5 1.5 0 0 0 8 3.36v30.5h20V3.36a1.5 1.5 0 0 0-1.5-1.5M18 28.64a3 3 0 1 1 3-3 3 3 0 0 1-3 3m6-17H12v-1.6h12Zm0-4H12V6.06h12Z"/>',

  solidAlerted:
    '<circle cx="18" cy="25.64" r="1.5"/><path d="M19.05 13.56a3.64 3.64 0 0 1-.49-1.9H12v-1.6h7a1 1 0 0 1 .09-.17l1.28-2.23H12v-1.6h9.25l2.43-4.2H9.5A1.5 1.5 0 0 0 8 3.36v30.5h20V15.4h-5.77a3.66 3.66 0 0 1-3.18-1.84M18 28.64a3 3 0 1 1 3-3 3 3 0 0 1-3 3"/><path d="m34.78 11.05-5.72-9.91a1.28 1.28 0 0 0-2.21 0l-5.72 9.91a1.27 1.27 0 0 0 1.1 1.95h11.45a1.27 1.27 0 0 0 1.1-1.95"/>',

  solidBadged:
    '<circle cx="18" cy="25.64" r="1.5"/><path d="M24 10.49v1.17H12v-1.6h11.7a7.4 7.4 0 0 1-1-2.4H12v-1.6h10.5V6a7.45 7.45 0 0 1 1.25-4.14H9.5A1.5 1.5 0 0 0 8 3.36v30.5h20V13.22a7.5 7.5 0 0 1-4-2.73m-6 18.15a3 3 0 1 1 3-3 3 3 0 0 1-3 3"/><circle cx="30" cy="6" r="5"/>',
};

export const hostIconName = 'host';
export const hostIcon: IconShapeTuple = [hostIconName, renderIcon(icon)];
