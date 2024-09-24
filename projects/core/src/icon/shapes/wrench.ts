/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M33.41 26.29 20.487 13.368a9.35 9.35 0 0 0-3.205-9.248A9.34 9.34 0 0 0 7.587 2.8l-1.35.594 5.419 5.42-2.84 2.85-5.418-5.419-.594 1.34a9.34 9.34 0 0 0 1.309 9.706 9.34 9.34 0 0 0 9.255 3.198l12.921 12.924a2.013 2.013 0 0 0 2.85 0l4.27-4.271a2.015 2.015 0 0 0 0-2.851m-5.7 5.702-13.738-13.75-.574.162a7.32 7.32 0 0 1-9.376-7.052c-.001-.5.05-1 .151-1.49l4.643 4.643 5.7-5.701L9.873 4.17a7.32 7.32 0 0 1 8.53 9.227l-.16.574 13.746 13.75zm.754-4.886a1.31 1.31 0 1 1-2.618 0 1.31 1.31 0 0 1 2.618 0" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M19.466 13.386 33.69 27.61a1.08 1.08 0 0 1 0 1.517l-4.563 4.563a1.08 1.08 0 0 1-1.517 0L13.386 19.466A8.893 8.893 0 0 1 2.763 7.326l5.433 5.392 4.522-4.522-5.392-5.433a8.893 8.893 0 0 1 12.14 10.623m7.482 15.486a1.396 1.396 0 1 0 1.99-1.958 1.396 1.396 0 0 0-1.99 1.958" clip-rule="evenodd"/>',
};

export const wrenchIconName = 'wrench';
export const wrenchIcon: IconShapeTuple = [wrenchIconName, renderIcon(icon)];
