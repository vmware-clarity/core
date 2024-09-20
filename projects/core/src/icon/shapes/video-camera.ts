/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34 10.34a2.11 2.11 0 0 0-1.16-1.9 2 2 0 0 0-2.13.15L26 11.6V8a2 2 0 0 0-2-2H6a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h18a2 2 0 0 0 2-2v-3.6l4.64 3a2.07 2.07 0 0 0 2.2.2A2.11 2.11 0 0 0 34 25.66Zm-2.07 15.43c-.06 0-.11 0-.19-.06L24 20.77V28H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18v7.23l7.8-5a.11.11 0 0 1 .13 0 .11.11 0 0 1 .07.11v15.32a.11.11 0 0 1-.07.11"/>',
  solid:
    '<path d="M32.3 9.35 26 12.9V8a2 2 0 0 0-2-2H6a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h18a2 2 0 0 0 2-2v-4.92l6.3 3.55a1.1 1.1 0 0 0 1.7-.86V10.2a1.1 1.1 0 0 0-1.7-.85"/>',
};

export const videoCameraIconName = 'video-camera';
export const videoCameraIcon: IconShapeTuple = [videoCameraIconName, renderIcon(icon)];
