/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12.29 12.95a.99.99 0 0 0 0 1.39l5.73 5.71 5.75-5.7c.34-.39.31-.97-.05-1.34a1 1 0 0 0-1.35-.05l-3.35 3.32V2.98c0-.54-.44-.98-.99-.98s-.99.44-.99.98V16.3l-3.35-3.33a.997.997 0 0 0-1.38-.03zM28.5 6H22v2h6v14h-6c0 2.21-1.79 4-4 4s-4-1.79-4-4H8V8h6V6H7.5C6.67 6 6 6.67 6 7.5v25c0 .83.67 1.5 1.5 1.5h21c.83 0 1.5-.67 1.5-1.5v-25c0-.83-.67-1.5-1.5-1.5M28 31v1H8v-8h4.35c.83 2.33 3.04 4 5.65 4s4.82-1.67 5.65-4H28z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-7-5h-1v2h1.29A7 7 0 0 1 23 6"/><path fill-rule="evenodd" d="M28 12.71c.634.189 1.305.29 2 .29v19.5c0 .83-.67 1.5-1.5 1.5h-21c-.83 0-1.5-.67-1.5-1.5v-25C6 6.67 6.67 6 7.5 6H14v2H8v14h6c0 2.21 1.79 4 4 4s4-1.79 4-4h6zM28 32v-8h-4.35c-.83 2.33-3.04 4-5.65 4s-4.82-1.67-5.65-4H8v8z" clip-rule="evenodd"/><path d="M12.29 14.34a.99.99 0 0 1 0-1.39l.02-.01c.39-.36 1-.35 1.38.03l3.35 3.33V2.98c0-.54.44-.98.99-.98s.99.44.99.98v13.3l3.35-3.32a1 1 0 0 1 1.35.05c.36.37.39.95.05 1.34l-5.75 5.7z"/>',
};

export const inboxIconName = 'inbox';
export const inboxIcon: IconShapeTuple = [inboxIconName, renderIcon(icon)];
