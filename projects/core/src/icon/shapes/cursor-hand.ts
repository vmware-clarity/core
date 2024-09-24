/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M24.87 11.374a13.65 13.65 0 0 1 6.87 3.836c.156.17.247.39.26.621v6.01a12.84 12.84 0 0 1-3 8.372v2.704a1.07 1.07 0 0 1-1 1.081H14.09a1.07 1.07 0 0 1-1-1.081v-1.923a10.1 10.1 0 0 1-2-2.544 11.6 11.6 0 0 1-1.43-4.006L5 18.916a3.6 3.6 0 0 1-1-2.564 3.68 3.68 0 0 1 1.12-2.634 3.766 3.766 0 0 1 5.28 0L12 15.3V5.285A3.4 3.4 0 0 1 15.5 2 3.4 3.4 0 0 1 19 5.285v5.308c1.98.036 3.95.298 5.87.781m2.53 17.787a10.75 10.75 0 0 0 2.6-7.27v-5.64a11 11 0 0 0-2.5-1.732v4.777l-1.6-.35v-5.158a15 15 0 0 0-1.53-.49c-.43-.111-.85-.201-1.26-.281v5.358l-1.6-.35v-5.239a24 24 0 0 0-2.51-.18v4.928l-2-.431V5.285a1.42 1.42 0 0 0-1.5-1.282A1.42 1.42 0 0 0 14 5.285v14.993l-2 1.001v-3.145L9 15.13a1.76 1.76 0 0 0-2.47 0 1.704 1.704 0 0 0 0 2.424l4.92 5.829c.139.166.22.374.23.59a9.2 9.2 0 0 0 1.2 3.526 7.3 7.3 0 0 0 1.82 2.233c.276.187.44.498.44.831v1.483H27v-2.164c.036-.283.18-.54.4-.72" clip-rule="evenodd"/>',
  solid:
    '<path d="M29.804 14.33v4.83l-2.009-.43v-5.49c-.757-.34-1.54-.62-2.34-.84v5.82l-2.01-.43V12c-1.104-.18-2.189-.3-3.093-.36v5.51l-2.009-.43V4.34a2.537 2.537 0 0 0-2.611-2.43 2.537 2.537 0 0 0-2.612 2.43v15.52l-2.008 1V15.6l-2.34-2.39a2.85 2.85 0 0 0-4.018 0 2.92 2.92 0 0 0 0 4.09l6.026 7.1a10.8 10.8 0 0 0 1.396 4.22 8.4 8.4 0 0 0 2.22 2.73v2.56H28.9v-3.29a12.5 12.5 0 0 0 3.013-8.5v-6a10 10 0 0 0-2.11-1.79"/>',
};

export const cursorHandIconName = 'cursor-hand';
export const cursorHandIcon: IconShapeTuple = [cursorHandIconName, renderIcon(icon)];
