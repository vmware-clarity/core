/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m16.004 20.59-3.29-3.29a.996.996 0 1 0-1.411 1.41l4.711 4.71 8.713-8.71a.996.996 0 1 0-1.41-1.41l-7.293 7.29zM31.26 7.81c-2.271-.6-4.482-1.3-6.623-2.26a45 45 0 0 1-6.082-3.21l-.55-.34-.54.35a45 45 0 0 1-6.082 3.21C9.242 6.52 7.02 7.21 4.75 7.81L4 8v7.43c0 13.28 13.325 18.32 13.655 18.45l.34.12.34-.12c.14 0 13.665-5.05 13.665-18.45V8l-.75-.19zm-1.25 7.62c0 11-10.004 15.61-12.005 16.43-2-.82-12.004-5.44-12.004-16.43V9.55c2.11-.61 4.171-1.27 6.182-2.16q3.015-1.305 5.822-3a48.5 48.5 0 0 0 5.822 3c2.01.89 4.071 1.55 6.182 2.16z"/>',

  solid:
    '<path d="M31.26 7.81c-2.271-.6-4.482-1.3-6.623-2.26a45 45 0 0 1-6.082-3.21l-.55-.34-.54.35a45 45 0 0 1-6.082 3.21C9.242 6.52 7.02 7.21 4.75 7.81L4 8v7.43c0 13.28 13.325 18.32 13.655 18.45l.34.12.34-.12c.14 0 13.665-5.05 13.665-18.45V8l-.75-.19zm-6.403 7.04-8.713 8.71-.14.14-.14-.14-4.711-4.71c-.23-.23-.35-.53-.35-.85s.12-.62.35-.85.53-.35.85-.35.62.12.85.35l3.151 3.15 7.153-7.15c.23-.23.53-.35.85-.35s.62.12.85.35.35.53.35.85-.12.62-.35.85"/>',
};

export const shieldCheckIconName = 'shield-check';
export const shieldCheckIcon: IconShapeTuple = [shieldCheckIconName, renderIcon(icon)];
