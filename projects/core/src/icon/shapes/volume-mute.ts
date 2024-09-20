/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M3.61 6.41 9.19 12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.14l7.41 7.47A2 2 0 0 0 18 32a2 2 0 0 0 .76-.15A2 2 0 0 0 20 30v-7.23l5.89 5.89c-.25.15-.49.29-.75.42a1 1 0 0 0 .9 1.79 14 14 0 0 0 1.31-.75l2.28 2.28L31 31 5 5ZM18 30l-7.73-7.77a1 1 0 0 0-.71-.23H4v-8h5.64a1 1 0 0 0 .71-.3l.26-.26L18 20.81Zm6.89-23.31A12.42 12.42 0 0 1 29 26.1l1.42 1.42a14.42 14.42 0 0 0-4.66-22.64 1 1 0 1 0-.87 1.8Z"/><path d="M22.69 12.62A6.27 6.27 0 0 1 25.8 18a6.17 6.17 0 0 1-1.24 3.71L26 23.13A8.15 8.15 0 0 0 27.8 18a8.28 8.28 0 0 0-4.1-7.11 1 1 0 1 0-1 1.73ZM18 6v9.15l2 2V6a2 2 0 0 0-3.42-1.41L12 9.17l1.41 1.41Z"/>',
  solid:
    '<path d="M24.87 6.69a12.42 12.42 0 0 1 3.88 19.61l1.42 1.42a14.43 14.43 0 0 0-4.43-22.84 1 1 0 0 0-.87 1.8Zm2.43 20.98-3.84-3.84-.57-.57L4.63 5 3.21 6.41 8.8 12H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.83l9.51 8.3a1 1 0 0 0 1.66-.75V23.2l5.59 5.59c-.17.1-.34.2-.51.29a1 1 0 0 0 .9 1.79c.37-.19.72-.4 1.08-.62l2.14 2.14L30.61 31l-3.25-3.25Z"/><path d="M22.69 12.62A6.27 6.27 0 0 1 25.8 18a6.17 6.17 0 0 1-1.42 3.92l1.42 1.42a8.16 8.16 0 0 0 2-5.34 8.28 8.28 0 0 0-4.1-7.11 1 1 0 1 0-1 1.73Zm-2.69-8a1 1 0 0 0-1.66-.75l-6.42 5.6L20 17.54Z"/>',
};

export const volumeMuteIconName = 'volume-mute';
export const volumeMuteIcon: IconShapeTuple = [volumeMuteIconName, renderIcon(icon)];
