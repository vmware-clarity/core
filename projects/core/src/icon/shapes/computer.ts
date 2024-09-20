/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M9.6 22.88V10.6h14.8L25.98 9H8v13.88z"/><path d="M6 7h24v16h2V6.5A1.5 1.5 0 0 0 30.5 5h-25A1.5 1.5 0 0 0 4 6.5V23h2ZM1 25v3.4A2.6 2.6 0 0 0 3.6 31h28.74a2.6 2.6 0 0 0 2.6-2.6V25Zm32 3.4a.6.6 0 0 1-.6.6H3.56a.6.6 0 0 1-.6-.6v-1.87h9.95a1.64 1.64 0 0 0 1.5 1h7.13a1.64 1.64 0 0 0 1.5-1H33Z"/>',

  outlineAlerted:
    '<path d="M1 25v3.4A2.6 2.6 0 0 0 3.6 31h28.74a2.6 2.6 0 0 0 2.6-2.6V25Zm32 3.4a.6.6 0 0 1-.6.6H3.56a.6.6 0 0 1-.6-.6v-1.87h9.95a1.64 1.64 0 0 0 1.5 1h7.13a1.64 1.64 0 0 0 1.5-1H33ZM9.6 22.88V10.6h9.14a3.6 3.6 0 0 1 .26-.71l.56-.89H8v13.88Z"/><path d="M6 7h14.71l1.15-2H5.5A1.5 1.5 0 0 0 4 6.5V23h2Zm24 8.4h2V23h-2z"/>',

  outlineBadged:
    '<path d="M1 25v3.4A2.6 2.6 0 0 0 3.6 31h28.74a2.6 2.6 0 0 0 2.6-2.6V25Zm32 3.4a.6.6 0 0 1-.6.6H3.56a.6.6 0 0 1-.6-.6v-1.87h9.95a1.64 1.64 0 0 0 1.5 1h7.13a1.64 1.64 0 0 0 1.5-1H33ZM22.5 6a7.5 7.5 0 0 1 .07-1H5.5A1.5 1.5 0 0 0 4 6.5V23h2V7h16.57a7.5 7.5 0 0 1-.07-1m7.5 7.5V23h2v-9.78a7.5 7.5 0 0 1-2 .28"/><path d="M23.13 9H8v13.88h1.6V10.6h14.48a7.5 7.5 0 0 1-.95-1.6"/>',

  solid:
    '<path d="M23.81 26c-.35.9-.94 1.5-1.61 1.5h-8.46c-.68 0-1.26-.6-1.61-1.5H1v1.75A2.45 2.45 0 0 0 3.6 30h28.8a2.45 2.45 0 0 0 2.6-2.25V26ZM7 10h22v14h3V7.57A1.54 1.54 0 0 0 30.5 6h-25A1.54 1.54 0 0 0 4 7.57V24h3Z"/>',

  solidAlerted:
    '<path d="M23.81 26c-.35.9-.94 1.5-1.61 1.5h-8.46c-.68 0-1.26-.6-1.61-1.5H1v1.75A2.45 2.45 0 0 0 3.6 30h28.8a2.45 2.45 0 0 0 2.6-2.25V26ZM29 15.4h3V24h-3zM7 10h12v-.11L21.29 6H5.5A1.54 1.54 0 0 0 4 7.57V24h3Z"/>',

  solidBadged:
    '<path d="M23.81 26c-.35.9-.94 1.5-1.61 1.5h-8.46c-.68 0-1.26-.6-1.61-1.5H1v1.75A2.45 2.45 0 0 0 3.6 30h28.8a2.45 2.45 0 0 0 2.6-2.25V26ZM7 10h16.66a7.46 7.46 0 0 1-1.16-4h-17A1.54 1.54 0 0 0 4 7.57V24h3Zm25 3.22a7.1 7.1 0 0 1-3 .2V24h3Z"/>',
};

export const computerIconName = 'computer';
export const computerIcon: IconShapeTuple = [computerIconName, renderIcon(icon)];
