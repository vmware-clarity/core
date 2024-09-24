/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M7.38 32a4.54 4.54 0 0 0 .76-2.5v-23a2.5 2.5 0 0 1 5 0V11h12.08v7.12l2 1v-8h3.92V6.58a4.49 4.49 0 0 0-4.48-4.5h-16a4.49 4.49 0 0 0-4.5 4.48v23a2.5 2.5 0 0 1-2.5 2.5 2.4 2.4 0 0 1-.78-.06v2a4 4 0 0 0 .76.08h14A4.26 4.26 0 0 1 17 32ZM26.64 4.12a2.49 2.49 0 0 1 2.5 2.46v2.54h-14V6.58a4.54 4.54 0 0 0-.76-2.5Z"/><path d="m32.86 24.39-10.69-5.47a2.2 2.2 0 0 0-1-.24A2.17 2.17 0 0 0 19 20.87v11a2.19 2.19 0 0 0 1 1.86 2.1 2.1 0 0 0 1.18.32 2.3 2.3 0 0 0 1-.23l10.68-5.48a2.15 2.15 0 0 0 1.19-1.95 2.2 2.2 0 0 0-1.19-2M32 26.51 21.27 32a.19.19 0 0 1-.18 0 .17.17 0 0 1-.09-.16v-11a.17.17 0 0 1 .09-.16.14.14 0 0 1 .09 0h.09L32 26.17a.19.19 0 0 1 .1.17.16.16 0 0 1-.1.17"/>',
  solid:
    '<path d="m34 24.94-12.82-6.56A1.5 1.5 0 0 0 19 19.71v13.13a1.5 1.5 0 0 0 2.18 1.34L34 27.61a1.5 1.5 0 0 0 0-2.67"/><path d="M17 32H7.38a4.54 4.54 0 0 0 .76-2.5v-23a2.5 2.5 0 0 1 5 0V11h12.08v7.12l2 1v-8h3.92V6.58a4.49 4.49 0 0 0-4.48-4.5h-16a4.49 4.49 0 0 0-4.5 4.48v23a2.5 2.5 0 0 1-2.5 2.5 2.4 2.4 0 0 1-.78-.06v2a4 4 0 0 0 .76.08h13.59a3.4 3.4 0 0 1-.23-1.24Zm9.64-27.88a2.49 2.49 0 0 1 2.5 2.46v2.54h-14V6.58a4.54 4.54 0 0 0-.76-2.5Z"/>',
};

export const scriptExecuteIconName = 'script-execute';
export const scriptExecuteIcon: IconShapeTuple = [scriptExecuteIconName, renderIcon(icon)];
