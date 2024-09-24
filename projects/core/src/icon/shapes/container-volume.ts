/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M8 17.58a32.4 32.4 0 0 0 6.3.92 4.1 4.1 0 0 1 .92-1.37 31 31 0 0 1-7.22-1Z"/><path d="M6 28V8.19c.34-.76 4.31-2.11 11-2.11s10.67 1.35 11 2v.3c-.82.79-4.58 2.05-11.11 2.05A33.5 33.5 0 0 1 8 9.44v1.44a35.6 35.6 0 0 0 8.89 1c4.29 0 8.8-.58 11.11-1.82v5.07a5.3 5.3 0 0 1-1.81.88H30V8.12c0-3.19-8.17-4-13-4s-13 .85-13 4V28c0 2.63 5.39 3.68 10 4v-2c-4.87-.34-7.72-1.38-8-2"/><path d="M8 24.28a31.3 31.3 0 0 0 6 .89v-1.4a29 29 0 0 1-6-.93ZM32 18H18a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2M18 32V20h14v12Z"/><path d="M21 21.7a.7.7 0 0 0-.7.7v7.49a.7.7 0 0 0 1.4 0V22.4a.7.7 0 0 0-.7-.7m4 .12a.7.7 0 0 0-.7.7V30a.7.7 0 1 0 1.4 0v-7.48a.7.7 0 0 0-.7-.7m4-.12a.7.7 0 0 0-.7.7v7.49a.7.7 0 1 0 1.4 0V22.4a.7.7 0 0 0-.7-.7"/>',
  solid:
    '<path d="M32 18H18a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2M18 32V20h14v12Z"/><path d="M21 21.7a.7.7 0 0 0-.7.7v7.49a.7.7 0 0 0 1.4 0V22.4a.7.7 0 0 0-.7-.7m4 .12a.7.7 0 0 0-.7.7V30a.7.7 0 1 0 1.4 0v-7.48a.7.7 0 0 0-.7-.7m4-.12a.7.7 0 0 0-.7.7v7.49a.7.7 0 1 0 1.4 0V22.4a.7.7 0 0 0-.7-.7"/><path d="M18 16h10V8.12c0-1.68-5.38-3-12-3s-12 1.32-12 3V28c0 1.5 4.33 2.75 10 3v-5.78a29.2 29.2 0 0 1-8-1.29v-1.49l.24.1A26.6 26.6 0 0 0 14 23.82V20a4 4 0 0 1 .29-1.47A29.2 29.2 0 0 1 6 17.23v-1.48l.24.09a29 29 0 0 0 9 1.32A4 4 0 0 1 18 16M6 10.54V9.05l.24.09A30.1 30.1 0 0 0 16 10.47a28.3 28.3 0 0 0 10-1.42v1.5a32.5 32.5 0 0 1-10 1.32 32.4 32.4 0 0 1-10-1.33"/>',
};

export const containerVolumeIconName = 'container-volume';
export const containerVolumeIcon: IconShapeTuple = [containerVolumeIconName, renderIcon(icon)];
