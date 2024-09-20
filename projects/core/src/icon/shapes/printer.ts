/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29 9h-2V5H9v4H7a4 4 0 0 0-4 4v11h3.92v-1.91H5V13a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v9h-1.92v2H33V13a4 4 0 0 0-4-4m-4 0H11V7h14Z"/><path d="M28 18H8a1 1 0 0 0 0 2h1v12h18V20h1a1 1 0 0 0 0-2m-3 12H11V20h14Zm2-16.96h2v2h-2z"/>',

  outlineAlerted:
    '<path d="M28 18H8a1 1 0 0 0 0 2h1v12h18V20h1a1 1 0 0 0 0-2m-3 12H11V20h14Zm6-14.6v6.69h-1.92V24H33v-8.6z"/><path d="M5 13a2 2 0 0 1 2-2h11.64A3.7 3.7 0 0 1 19 9.89l.54-.89H11V7h9.71l1.13-2H9v4H7a4 4 0 0 0-4 4v11h3.92v-1.91H5Z"/>',

  outlineBadged:
    '<path d="M28 18H8a1 1 0 0 0 0 2h1v12h18V20h1a1 1 0 0 0 0-2m-3 12H11V20h14Zm2-16.96h2v2h-2zm6-.16a7.5 7.5 0 0 1-2 .55v8.66h-1.92V24H33z"/><path d="M5 13a2 2 0 0 1 2-2h17.42a7.5 7.5 0 0 1-1.27-2H11V7h11.57a7.5 7.5 0 0 1-.07-1 8 8 0 0 1 .07-1H9v4H7a4 4 0 0 0-4 4v11h3.92v-1.91H5Z"/>',

  solid:
    '<path d="M29 9h-2V5H9v4H7a4 4 0 0 0-4 4v11h6v8h18v-8h6V13a4 4 0 0 0-4-4m-4 15v6H11V19h14Zm0-15H11V7h14Zm4 6h-2v-2h2Z"/>',

  solidAlerted:
    '<path d="M22.23 15.4A3.68 3.68 0 0 1 19 9.89l.54-.89H11V7h9.71l1.13-2H9v4H7a4 4 0 0 0-4 4v11h6v8h18v-8h6v-8.6ZM25 24v6H11V19h14Z"/>',

  solidBadged:
    '<path d="M33 12.88a7.3 7.3 0 0 1-4 .55V15h-2v-2h.32a7.52 7.52 0 0 1-4.18-4H11V7h11.57a7.5 7.5 0 0 1-.07-1 8 8 0 0 1 .07-1H9v4H7a4 4 0 0 0-4 4v11h6v8h18v-8h6zM25 24v6H11V19h14Z"/>',
};

export const printerIconName = 'printer';
export const printerIcon: IconShapeTuple = [printerIconName, renderIcon(icon)];
