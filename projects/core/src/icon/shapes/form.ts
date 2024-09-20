/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21 12H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1M8 10h12V7.94H8Zm13 4.08H7a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1h11.36L22 16.3v-1.22a1 1 0 0 0-1-1M20 18H8v-2h12Z"/><path d="M11.06 31.51v-.06l.32-1.39H4V4h20v10.25l2-1.89V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h8a3.4 3.4 0 0 1 .06-.49M22 19.17l-.78.79a1 1 0 0 0 .78-.79"/><path d="M6 26.94a1 1 0 0 0 1 1h4.84l.3-1.3.13-.55v-.05H8V24h6.34l2-2H7a1 1 0 0 0-1 1Zm27.49-10.27-3.37-3.37a1.61 1.61 0 0 0-2.28 0L14.13 27.09 13 31.9a1.61 1.61 0 0 0 1.26 1.9 1.6 1.6 0 0 0 .31 0 1.2 1.2 0 0 0 .37 0l4.85-1.07L33.49 19a1.6 1.6 0 0 0 0-2.27ZM18.77 30.91l-3.66.81.89-3.63L26.28 17.7l2.82 2.82Zm11.46-11.52-2.82-2.82L29 15l2.84 2.84Z"/>',
};

export const formIconName = 'form';
export const formIcon: IconShapeTuple = [formIconName, renderIcon(icon)];
