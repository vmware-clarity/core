/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M24 8h9a1 1 0 0 1 1 1v8a5 5 0 0 1-5 5h-1v-2h1a3 3 0 0 0 3-3v-7H4v7a3 3 0 0 0 3 3h3v-2.06h2v5.46a1 1 0 1 1-2 0V22H7a5 5 0 0 1-5-5V9a1 1 0 0 1 1-1h9V6.38A2.42 2.42 0 0 1 14.45 4h7.1A2.42 2.42 0 0 1 24 6.38zm-2 0h-8V6.43a.45.45 0 0 1 .45-.43h7.11a.43.43 0 0 1 .44.42z" clip-rule="evenodd"/><path d="M4 30h28v-6.69a6.7 6.7 0 0 0 2-1.42V30a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8.11a7.1 7.1 0 0 0 2 1.43z"/><path d="M26 23.4a1 1 0 1 1-2 0V22H14v-2h10v-2.06h2z"/>',
  solid:
    '<path fill-rule="evenodd" d="M30 20.034a4.064 4.064 0 0 0 4-4.008V8.009H24V6.435a2.45 2.45 0 0 0-.722-1.726A2.44 2.44 0 0 0 21.55 4h-7.1a2.44 2.44 0 0 0-1.728.71A2.45 2.45 0 0 0 12 6.434V8.01H2v8.017a4.064 4.064 0 0 0 4.05 4.008h4V17.95h2v5.712a1.001 1.001 0 1 1-2 0V22.1H6.06A6.05 6.05 0 0 1 2 20.525v9.47C2 31.104 2.895 32 4 32h28c1.105 0 2-.897 2-2.004v-9.47a6 6 0 0 1-4.06 1.573H28v-2.065zM14 6.435a.45.45 0 0 1 .45-.43h7.1c.24 0 .44.189.45.43V8.01h-8zm11 18.23c.552 0 1-.45 1-1.003V17.95h-2v2.084H14V22.1h10v1.563c0 .553.448 1.002 1 1.002" clip-rule="evenodd"/>',
};

export const suitcaseIconName = 'suitcase';
export const suitcaseIcon: IconShapeTuple = [suitcaseIconName, renderIcon(icon)];
