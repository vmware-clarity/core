/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M12.29 12.95C11.91 13.33 11.91 13.95 12.29 14.34L18.02 20.05L23.77 14.35C24.11 13.96 24.08 13.38 23.72 13.01C23.35 12.65 22.77 12.62 22.37 12.96L19.02 16.28V2.98C19.02 2.44 18.58 2 18.03 2C17.48 2 17.04 2.44 17.04 2.98V16.3L13.69 12.97C13.31 12.59 12.7 12.58 12.31 12.94L12.29 12.95ZM28.5 6H22V8H28V22H22C22 24.21 20.21 26 18 26C15.79 26 14 24.21 14 22H8V8H14V6H7.5C6.67 6 6 6.67 6 7.5V32.5C6 33.33 6.67 34 7.5 34H28.5C29.33 34 30 33.33 30 32.5V7.5C30 6.67 29.33 6 28.5 6ZM28 31V32H8V24H12.35C13.18 26.33 15.39 28 18 28C20.61 28 22.82 26.33 23.65 24H28V31Z" fill="black"/>\n',

  outlineBadged:
    '<path d="M12.23,13.09a1,1,0,0,0,0,1.41L18,20.3l5.79-5.79a1,1,0,0,0-1.41-1.41L19,16.47V2A1,1,0,0,0,18,1a1,1,0,0,0-1,1v14.5l-3.38-3.38A1,1,0,0,0,12.23,13.09Z"/><path d="M30,13.5a7.52,7.52,0,0,1-1-.07V21H23.61l-.1.89a5.42,5.42,0,0,1-10.77,0l-.1-.89H7V7h7V5H6.5A1.5,1.5,0,0,0,5,6.5v25A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5V13.43A7.52,7.52,0,0,1,30,13.5ZM29,31H7V23h3.91a7.42,7.42,0,0,0,14.44,0H29Z"/>',
};

export const inboxIconName = 'inbox';
export const inboxIcon: IconShapeTuple = [inboxIconName, renderIcon(icon)];
