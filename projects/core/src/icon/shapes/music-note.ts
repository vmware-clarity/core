/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.68 6.16c-1.92-3.3-10.6-4-11.58-4.09L19 2v20.34a6 6 0 0 0-.82-.56 8.33 8.33 0 0 0-6.53-.41c-4.08 1.33-6.73 5.13-5.87 8.47a5.33 5.33 0 0 0 2.66 3.32 7.5 7.5 0 0 0 3.61.88 9.5 9.5 0 0 0 2.95-.47c3.67-1.18 6.17-4.33 6.06-7.36V9.34a29 29 0 0 1 6.55 1.43 1 1 0 1 0 .72-1.87A31.4 31.4 0 0 0 21 7.33V4.17c3.33.36 8 1.38 8.92 3 2 3.41-2.33 7.36-2.37 7.4a1 1 0 0 0 1.33 1.49c.27-.21 5.62-5.06 2.8-9.9M14.35 31.67a6.43 6.43 0 0 1-5-.26 3.3 3.3 0 0 1-1.69-2.07c-.6-2.33 1.45-5.05 4.58-6.06a7.5 7.5 0 0 1 2.3-.37 5.5 5.5 0 0 1 2.65.62 3.3 3.3 0 0 1 1.69 2.07c.66 2.34-1.39 5.06-4.53 6.07"/>',
  solid:
    '<path d="M31.68 6.16c-1.92-3.3-10.6-4-11.58-4.09L19 2v20.29a6 6 0 0 0-.81-.55 8.33 8.33 0 0 0-6.53-.41c-4.12 1.33-6.77 5.13-5.91 8.47a5.33 5.33 0 0 0 2.66 3.32 7.5 7.5 0 0 0 3.61.88 9.5 9.5 0 0 0 2.98-.48c3.7-1.19 6.2-4.37 6.06-7.42V8.49c1 .12 2.37.33 3.82.64a11.2 11.2 0 0 1 4.06 1.46c1 .66.38 1.9.33 2a11.8 11.8 0 0 1-1.66 2 1 1 0 0 0 1.33 1.49c.21-.23 5.56-5.08 2.74-9.92"/>',
};

export const musicNoteIconName = 'music-note';
export const musicNoteIcon: IconShapeTuple = [musicNoteIconName, renderIcon(icon)];
