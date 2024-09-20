/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M11 5h14v3h2V5a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v6.85h2Z"/><path d="M30 10H17v2h8v6h2v-6h3v14h-8v-9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3h8a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M6 31V17h14v9h-4v-6h-2v6a2 2 0 0 0 2 2h4v3Z"/>',

  outlineAlerted:
    '<path d="M11 5h10.87L23 3H11a2 2 0 0 0-2 2v6.85h2Zm14.01 10.4H27V18h-1.99z"/><path d="M30 15.4V26h-8v-9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3h8a2 2 0 0 0 2-2V15.4ZM6 31V17h14v9h-4v-6h-2v6a2 2 0 0 0 2 2h4v3Zm11-21v2h1.57a3.67 3.67 0 0 1 .43-2Z"/>',

  outlineBadged:
    '<path d="M11 5h11.57a7.5 7.5 0 0 1 .55-2H11a2 2 0 0 0-2 2v6.85h2Zm19 8.5V26h-8v-9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3h8a2 2 0 0 0 2-2V13.22a7.5 7.5 0 0 1-2 .28M6 31V17h14v9h-4v-6h-2v6a2 2 0 0 0 2 2h4v3Z"/><path d="M17 12h8v6h2v-5.13A7.5 7.5 0 0 1 23.66 10H17Z"/>',

  solid:
    '<path d="M13.59 12a3.6 3.6 0 0 1 3.6-3.6H27V5a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v8.4h4.59Z"/><path d="M30 10H17.19a2 2 0 0 0-2 2v1.4H20a3.6 3.6 0 0 1 3.6 3.6v8H22v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.4h-4.81a3.6 3.6 0 0 1-3.6-3.6v-6h1.6v6a2 2 0 0 0 2 2H30a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2"/>',

  solidAlerted:
    '<path d="M13.59 12a3.6 3.6 0 0 1 3.6-3.6h2.72L23 3H11a2 2 0 0 0-2 2v8.4h4.59Z"/><path d="M17.19 10a2 2 0 0 0-2 2v1.4H19a3.68 3.68 0 0 1 0-3.4Zm6.02 5.4a3.55 3.55 0 0 1 .39 1.6v8H22v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.4h-4.81a3.6 3.6 0 0 1-3.6-3.6v-6h1.6v6a2 2 0 0 0 2 2H30a2 2 0 0 0 2-2V15.4Z"/>',

  solidBadged:
    '<path d="M13.59 12a3.6 3.6 0 0 1 3.6-3.6h5.71a7.45 7.45 0 0 1 .23-5.4H11a2 2 0 0 0-2 2v8.4h4.59Z"/><path d="M30 13.5a7.49 7.49 0 0 1-6.34-3.5h-6.47a2 2 0 0 0-2 2v1.4H20a3.6 3.6 0 0 1 3.6 3.6v8H22v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.4h-4.81a3.6 3.6 0 0 1-3.6-3.6v-6h1.6v6a2 2 0 0 0 2 2H30a2 2 0 0 0 2-2V13.22a7.5 7.5 0 0 1-2 .28"/>',
};

export const vmIconName = 'vm';
export const vmIcon: IconShapeTuple = [vmIconName, renderIcon(icon)];
