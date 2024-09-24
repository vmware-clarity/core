/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M7.38 32a4.54 4.54 0 0 0 .76-2.5v-23a2.5 2.5 0 0 1 5 0V11h12.08v3.07a11.4 11.4 0 0 1 2 .3v-3.3h3.92V6.58a4.49 4.49 0 0 0-4.48-4.5h-16a4.49 4.49 0 0 0-4.5 4.48v23a2.5 2.5 0 0 1-2.5 2.5 2.6 2.6 0 0 1-.78-.06v2a4 4 0 0 0 .76.08H19a11 11 0 0 1-2.34-2ZM26.64 4.12a2.49 2.49 0 0 1 2.5 2.46v2.54h-14V6.58a4.54 4.54 0 0 0-.76-2.5Z"/><g data-name="Layer 5"><path d="M24.88 33.88a9 9 0 1 1 9-9 9 9 0 0 1-9 9m0-16a7 7 0 1 0 7 7 7 7 0 0 0-7-7"/><path d="M29.12 25.92H24V20h2v4h3.12z"/></g>',
  solid:
    '<path d="M7.38 32a4.54 4.54 0 0 0 .76-2.5v-23a2.5 2.5 0 0 1 5 0V11h12.08v3.07a11.4 11.4 0 0 1 2 .3v-3.3h3.92V6.58a4.49 4.49 0 0 0-4.48-4.5h-16a4.49 4.49 0 0 0-4.5 4.48v23a2.5 2.5 0 0 1-2.5 2.5 2.6 2.6 0 0 1-.78-.06v2a4 4 0 0 0 .76.08H19a11 11 0 0 1-2.34-2ZM26.64 4.12a2.49 2.49 0 0 1 2.5 2.46v2.54h-14V6.58a4.54 4.54 0 0 0-.76-2.5Z"/><path d="M24.88 15.88a9 9 0 1 0 9 9 9 9 0 0 0-9-9M29.46 27H24v-7h2v5h3.46Z"/>',
};

export const scriptScheduleIconName = 'script-schedule';
export const scriptScheduleIcon: IconShapeTuple = [scriptScheduleIconName, renderIcon(icon)];
