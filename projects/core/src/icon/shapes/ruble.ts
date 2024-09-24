/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M29 12.003c-.131 4.534-4.081 8.111-8.831 8h-7.93v2h9.428c.578 0 1.047.447 1.047 1s-.469 1-1.047 1h-9.429v7c0 .552-.469 1-1.047 1-.58 0-1.048-.448-1.048-1v-7H8.048c-.579 0-1.048-.448-1.048-1 0-.553.469-1 1.048-1h2.095v-2H8.048c-.579 0-1.048-.448-1.048-1 0-.553.469-1 1.048-1h2.095v-13c0-.553.469-1 1.047-1h8.979c4.75-.112 8.7 3.465 8.831 8m-8.831-6h-7.93v12h7.93c3.593.112 6.605-2.57 6.736-6-.137-3.428-3.145-6.107-6.736-6" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M18 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 18 2m2.75 18.56H15V22h8.29a1 1 0 1 1 0 2H15v5a1.25 1.25 0 1 1-2.5 0v-5h-1.25a1 1 0 1 1 0-2h1.21v-1.44h-1.21a1.25 1.25 0 1 1 0-2.5h1.21V8c0-.69.56-1.25 1.25-1.25h7a7.14 7.14 0 0 1 7.36 6.9 7.15 7.15 0 0 1-7.32 6.91M15 9.25h5.75a4.65 4.65 0 0 1 4.9 4.41 4.66 4.66 0 0 1-4.86 4.4H15z" clip-rule="evenodd"/>',
};

export const rubleIconName = 'ruble';
export const rubleIcon: IconShapeTuple = [rubleIconName, renderIcon(icon)];
