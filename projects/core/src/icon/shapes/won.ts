/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M33 18.003h-4.25l.5-2H33a1 1 0 0 0 0-2h-3.26l2.17-8.763A1 1 0 0 0 30 4.76l-2.32 9.242h-6.37L19 4.76a1 1 0 0 0-1.94 0l-2.27 9.242H8.42L6.13 4.76a1 1 0 0 0-1.94.48l2.17 8.762H3a1 1 0 0 0 0 2h3.85l.5 2.001H3a1 1 0 0 0 0 2h4.84l2.79 11.243a1 1 0 0 0 1.94 0l2.79-11.242h5.38l2.79 11.242a1 1 0 0 0 1.94 0l2.78-11.242H33a1 1 0 0 0 0-2m-5.82-2-.5 2H22.3l-.5-2zm-7.93-2L18 9.16l-1.15 4.841zm-10.34 2h5.38l-.5 2H9.41zm1 4 1.69 6.842 1.7-6.841zm5.94-2 .5-2h3.39l.5 2zm6.95 2 1.69 6.842 1.7-6.841z" clip-rule="evenodd"/>',
  solid:
    '<path d="m23.6 20-.82 3.1-.81-3.1zm-2.16-2h2.69l.53-2h-3.75zm-7.34 2-.81 3.1-.82-3.1zm-2.16-2h2.69l.53-2h-3.75zm5.28 0 .52-2h.58l.53 2z"/><path fill-rule="evenodd" d="M18 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 18 2m11 18h-2.81L24 28.32a1.25 1.25 0 0 1-2.42 0L19.38 20h-2.69l-2.19 8.32a1.25 1.25 0 0 1-2.42 0L9.88 20H7a1 1 0 1 1 0-2h2.35l-.53-2H7a1 1 0 1 1 0-2h1.3l-1-3.68a1.252 1.252 0 0 1 2.42-.64L10.88 14h4.8l1.14-4.32a1.25 1.25 0 0 1 2.42 0L20.38 14h4.8l1.14-4.32a1.252 1.252 0 1 1 2.42.64l-1 3.68H29a1 1 0 1 1 0 2h-1.76l-.53 2H29a1 1 0 1 1 0 2" clip-rule="evenodd"/>',
};

export const wonIconName = 'won';
export const wonIcon: IconShapeTuple = [wonIconName, renderIcon(icon)];
