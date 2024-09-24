/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 30H6V6h16V4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14h-2Zm3.57-20.67-7-7a1 1 0 0 0-1.41 1.41l7 7a1 1 0 1 0 1.41-1.41"/><path d="m22.1 11.19.7.5L26.46 8 25 6.56l-2.49 2.57c-2-.87-4.35.14-5.92 1.68l-.72.71 3.54 3.54-3.67 3.67 1.41 1.41 3.67-3.67L24.37 20l.71-.72c1.54-1.57 2.55-3.92 1.68-5.93l2.54-2.57-1.42-1.4-3.67 3.72.49.69c.76 1 .25 2.37-.41 3.33l-5.52-5.52c1.07-.74 2.38-1.1 3.33-.41"/>',
  solid:
    '<path d="M30 30H6V6h16V4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14h-2Z"/><path d="m33.57 9.33-7-7a1 1 0 0 0-1.41 1.41l1.38 1.38-4 4c-2-.87-4.35.14-5.92 1.68l-.72.71 3.54 3.54-3.67 3.67 1.41 1.41 3.67-3.67L24.37 20l.71-.72c1.54-1.57 2.55-3.91 1.68-5.92l4-4 1.38 1.38a1 1 0 1 0 1.41-1.41Z"/>',
};

export const pinboardIconName = 'pinboard';
export const pinboardIcon: IconShapeTuple = [pinboardIconName, renderIcon(icon)];
