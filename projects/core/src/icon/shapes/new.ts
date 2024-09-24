/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m34.59 23-4.08-5 4-4.9a1.82 1.82 0 0 0 .23-1.94 1.93 1.93 0 0 0-1.8-1.16h-31A1.91 1.91 0 0 0 0 11.88v12.25A1.91 1.91 0 0 0 1.94 26h31.11a1.93 1.93 0 0 0 1.77-1.09 1.82 1.82 0 0 0-.23-1.91M2 24V12h30.78l-4.84 5.93L32.85 24Z"/><path d="M9.39 19.35 6.13 15H5v6.18h1.13v-4.34l3.26 4.34h1.12V15H9.39zm2.79 1.83h4.66v-1.02h-3.53v-1.61h3.19v-1.03h-3.19v-1.49h3.53V15h-4.66zm12.34-1.75L23.06 15h-1.22l-1.47 4.43L19.05 15h-1.23l1.96 6.18h1.11l1.56-4.59L24 21.18h1.13L27.08 15h-1.23z"/>',
  solid:
    '<path d="m34.11 24.49-3.92-6.62 3.88-6.35a1 1 0 0 0-.85-1.52H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h31.25a1 1 0 0 0 .86-1.51m-23.6-3.31H9.39l-3.26-4.34v4.35H5V15h1.13l3.27 4.35V15h1.12ZM16.84 16h-3.53v1.49h3.2v1h-3.2v1.61h3.53v1h-4.66V15h4.65Zm8.29 5.16H24l-1.55-4.59-1.55 4.61h-1.12l-2-6.18H19l1.32 4.43L21.84 15h1.22l1.46 4.43L25.85 15h1.23Z"/>',
};

export const newIconName = 'new';
export const newIcon: IconShapeTuple = [newIconName, renderIcon(icon)];
