/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34 11.12V6.58a4.5 4.5 0 0 0-4.5-4.5h-16A4.5 4.5 0 0 0 9 6.58v23a2.5 2.5 0 1 1-5 0V26h3.19v-2H2v5.5A4.5 4.5 0 0 0 6.5 34h19.08a4.5 4.5 0 0 0 4.5-4.5V13.13h-2v16.41a2.5 2.5 0 0 1-2.5 2.5H10.24a4.47 4.47 0 0 0 .76-2.5v-23a2.5 2.5 0 0 1 5 0v4.54Zm-4.5-7A2.5 2.5 0 0 1 32 6.58v2.54H18V6.58a4.5 4.5 0 0 0-.76-2.5Z"/>',

  outlineAlerted:
    '<path d="M28.08 15.4v14.14a2.5 2.5 0 0 1-2.5 2.5H10.24a4.47 4.47 0 0 0 .76-2.5v-23a2.5 2.5 0 0 1 5 0v4.54h2.61A3.7 3.7 0 0 1 19 9.89l.44-.76H18V6.58a4.5 4.5 0 0 0-.76-2.5h5.16l1.15-2H13.5A4.5 4.5 0 0 0 9 6.58v23a2.5 2.5 0 1 1-5 0V26h3.19v-2H2v5.5A4.5 4.5 0 0 0 6.5 34h19.08a4.5 4.5 0 0 0 4.5-4.5V15.4Z"/>',

  outlineBadged:
    '<path d="M30 13.5a7.5 7.5 0 0 1-1.92-.26v16.3a2.5 2.5 0 0 1-2.5 2.5H10.24a4.47 4.47 0 0 0 .76-2.5v-23a2.5 2.5 0 0 1 5 0v4.54h8.54a7.5 7.5 0 0 1-1.35-2H18v-2.5a4.5 4.5 0 0 0-.76-2.5h5.52a7.4 7.4 0 0 1 .86-2H13.5A4.5 4.5 0 0 0 9 6.58v23a2.5 2.5 0 1 1-5 0V26h3.19v-2H2v5.5A4.5 4.5 0 0 0 6.5 34h19.08a4.5 4.5 0 0 0 4.5-4.5v-16Z"/>',

  solid:
    '<path d="M34 11.12V6.58a4.5 4.5 0 0 0-4.5-4.5h-16A4.5 4.5 0 0 0 9 6.58V24H2v5.5A4.5 4.5 0 0 0 6.5 34h19.08a4.5 4.5 0 0 0 4.5-4.5V13.13h-2v16.41a2.5 2.5 0 0 1-2.5 2.5H10.24a4.47 4.47 0 0 0 .76-2.5v-23a2.5 2.5 0 0 1 5 0v4.54Z"/>',

  solidAlerted:
    '<path d="M28.08 15.4v14.14a2.5 2.5 0 0 1-2.5 2.5H10.24a4.47 4.47 0 0 0 .76-2.5v-23a2.5 2.5 0 0 1 5 0v4.54h2.61A3.7 3.7 0 0 1 19 9.89l4.51-7.8H13.5A4.5 4.5 0 0 0 9 6.58V24H2v5.5A4.5 4.5 0 0 0 6.5 34h19.08a4.5 4.5 0 0 0 4.5-4.5V15.4Z"/>',

  solidBadged:
    '<path d="M30 13.5a7.5 7.5 0 0 1-1.92-.26v16.3a2.5 2.5 0 0 1-2.5 2.5H10.24a4.47 4.47 0 0 0 .76-2.5v-23a2.5 2.5 0 0 1 5 0v4.54h8.54a7.46 7.46 0 0 1-.92-9H13.5A4.5 4.5 0 0 0 9 6.58V24H2v5.5A4.5 4.5 0 0 0 6.5 34h19.08a4.5 4.5 0 0 0 4.5-4.5v-16Z"/>',
};

export const scrollIconName = 'scroll';
export const scrollIcon: IconShapeTuple = [scrollIconName, renderIcon(icon)];
