/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-1.54 22H5.66l7-7.24-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z"/>',

  outlineAlerted:
    '<path d="M33.68 15.26H32v11.45l-7.36-7.36-1.41 1.41L30.46 28H5.66l7-7.24-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0l6.66-6.63h-2.83l-5.24 5.21L5.31 8h14.75l1.15-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.24Z"/>',

  outlineBadged:
    '<path d="M32 13.08v13.63l-7.36-7.36-1.41 1.41L30.46 28H5.66l7-7.24-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0l8.83-8.78a7.4 7.4 0 0 1-2-.85l-8.26 8.21L5.31 8h17.5a7.5 7.5 0 0 1-.31-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.2a7.5 7.5 0 0 1-2 .88"/>',

  solid:
    '<path d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z"/><path d="m33.81 7.39-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21 1.41 1.41Zm26.61 0h-1.4l-7.29-7.23 1.41-1.41 7.27 7.21Z"/>',

  solidAlerted:
    '<path d="M33.68 15.4h-7.91l-6.52 6.49a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.38ZM5.3 28H3.91v-1.43l7.27-7.21 1.41 1.41Zm26.61 0h-1.4l-7.29-7.23 1.41-1.41 7.27 7.21Z"/><path d="M22.94 15.4h-.7A3.68 3.68 0 0 1 19 9.89L21.29 6H3.92a2 2 0 0 0-.53.08l14.45 14.39Z"/>',

  solidBadged:
    '<path d="M26 12.34A7.49 7.49 0 0 1 22.5 6H3.92a2 2 0 0 0-.53.08l14.45 14.39Z"/><path d="M30 13.5a7.5 7.5 0 0 1-2-.29l-8.71 8.68a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.39A7.45 7.45 0 0 1 30 13.5M5.3 28H3.91v-1.43l7.27-7.21 1.41 1.41Zm26.61 0h-1.4l-7.29-7.23 1.41-1.41 7.27 7.21Z"/>',
};

export const envelopeIconName = 'envelope';
export const envelopeIcon: IconShapeTuple = [envelopeIconName, renderIcon(icon)];
