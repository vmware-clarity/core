/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M15 17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4 8v7h11V8Zm28 9H21a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M21 8v7h11V8Zm-6 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4 21v7h11v-7Zm28 9H21a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m-11-9v7h11v-7Z"/>',

  outlineAlerted:
    '<path d="M15 17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4 8v7h11V8Zm28 9H21a2 2 0 0 1-1.97-1.652l.034.003q.104.009.206.006h14.698A2 2 0 0 1 32 17M19 8a2 2 0 0 1 2-2h.372L19 10.048Zm-4 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4 21v7h11v-7Zm28 9H21a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m-11-9v7h11v-7Z"/>',

  outlineBadged:
    '<path d="M15 17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4 8v7h11V8Zm28 9H21a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.59v.056c0 .673.09 1.325.258 1.944H21v7h11v-1.825a7.4 7.4 0 0 0 2-.906V15a2 2 0 0 1-2 2M15 30H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4 21v7h11v-7Zm28 9H21a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m-11-9v7h11v-7Z"/>',

  solid:
    '<path d="M15 17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m17 0H21a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M15 30H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m17 0H21a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"/>',

  solidAlerted:
    '<path d="M15 17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m17 0H21a2 2 0 0 1-1.97-1.652l.034.003q.104.009.206.006h14.698A2 2 0 0 1 32 17M19 8a2 2 0 0 1 2-2h.372L19 10.048Zm-4 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m17 0H21a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"/>',

  solidBadged:
    '<path d="M15 17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m17 0H21a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.59v.056A7.396 7.396 0 0 0 34 12.269V15a2 2 0 0 1-2 2M15 30H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m17 0H21a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"/>',
};

export const gridChartIconName = 'grid-chart';
export const gridChartIcon: IconShapeTuple = [gridChartIconName, renderIcon(icon)];
