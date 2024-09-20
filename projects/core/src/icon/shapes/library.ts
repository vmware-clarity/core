/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m33.48 29.63-6.74-17.81a2 2 0 0 0-2.58-1.16L21 11.85V8.92A1.92 1.92 0 0 0 19.08 7H14V4.92A1.92 1.92 0 0 0 12.08 3H5a2 2 0 0 0-2 2v27a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V19.27l5 13.21a1 1 0 0 0 1.29.58l5.61-2.14a1 1 0 0 0 .58-1.29M12 8.83V31H5V5h7ZM19 31h-5V9h5Zm8.51-.25-6.38-16.83 3.74-1.42 6.39 16.83Z"/>',
  solid:
    '<path d="M12.75 3h-7.5A1.15 1.15 0 0 0 4 4v29h10V4a1.15 1.15 0 0 0-1.25-1m21.02 28.09-6.94-18.3a1 1 0 0 0-1.29-.58L22 13.59V9a1 1 0 0 0-1-1h-5v25h6V14.69L28.93 33Z"/>',
};

export const libraryIconName = 'library';
export const libraryIcon: IconShapeTuple = [libraryIconName, renderIcon(icon)];
