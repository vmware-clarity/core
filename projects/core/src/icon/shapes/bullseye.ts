/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2a16 16 0 0 0-4.25.59l.77 1.86a14.07 14.07 0 1 1-10 10l-1.86-.78A16 16 0 1 0 18 2"/><path d="M12.812 27.49A10.81 10.81 0 0 1 7.45 15.7l1.55.62A9.24 9.24 0 1 0 16.37 9l-.62-1.56a10.81 10.81 0 1 1-2.938 20.05"/><path d="M14 18.41a4.08 4.08 0 0 0 4 3.68 4.07 4.07 0 0 0 .43-8.09l-.67-1.69H18A5.69 5.69 0 1 1 12.37 18v-.27z"/><path d="M8.55 13.49a.5.5 0 0 1-.35-.15L2.65 7.77A.5.5 0 0 1 3 6.92h3.94v-4a.5.5 0 0 1 .85-.35l5.59 5.59a.5.5 0 0 1 .15.35V12L19 17.44a1.008 1.008 0 1 1-1.43 1.42l-5.37-5.37z"/>',
  solid:
    '<path d="M18 2a16 16 0 0 0-4.25.59l1.6 3.89a11.89 11.89 0 1 1-8.86 8.82l-3.88-1.62A16 16 0 1 0 18 2"/><path fill-rule="evenodd" d="M8.55 13.49a.5.5 0 0 1-.35-.15L2.65 7.77A.5.5 0 0 1 3 6.92h3.94v-4a.5.5 0 0 1 .85-.35l5.59 5.59a.5.5 0 0 1 .15.35V12L16 14.46a4.1 4.1 0 0 0-1.45 1.38l-2.35-2.35zm7.45.97 3 3a1 1 0 0 1 0 1.39 1 1 0 0 1-1.41 0l-3-3a4 4 0 0 0-.68 2.15A4.09 4.09 0 1 0 18 13.91a4 4 0 0 0-2 .55" clip-rule="evenodd"/><path d="M13.128 26.926A10.17 10.17 0 0 1 8 15.94l4.12 1.71V18A5.88 5.88 0 1 0 18 12.11h-.31L16 8a10.17 10.17 0 1 1-2.872 18.926"/>',
};

export const bullseyeIconName = 'bullseye';
export const bullseyeIcon: IconShapeTuple = [bullseyeIconName, renderIcon(icon)];
