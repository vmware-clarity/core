/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.47 3.84a5.78 5.78 0 0 0-7.37-.63 16.08 16.08 0 0 1 8.2 7.65 5.73 5.73 0 0 0-.83-7.02m-6.14 17.7a.9.9 0 0 0-.41-1.2l-3.2-1.56L24.89 22a.9.9 0 0 0 .44-.46M18 8.6a.9.9 0 0 0-.9.9v4.6l1.8 1.81V9.5a.9.9 0 0 0-.9-.9m-6.58-5.17a5.8 5.8 0 0 0-5.81-.81l2.69 2.7a16 16 0 0 1 3.12-1.89"/><path d="M18 4a13.9 13.9 0 0 0-8.3 2.75l1.42 1.43a12 12 0 0 1 16.7 16.72l1.42 1.43A14 14 0 0 0 18 4m-16.44.21 1.17 1.17a5.7 5.7 0 0 0 .67 6.1 15.8 15.8 0 0 1 2.06-3.36l1.42 1.43a13.94 13.94 0 0 0 1.23 18.33l-2.55 2.55A1 1 0 1 0 7 31.84l2.66-2.66a13.89 13.89 0 0 0 16.8 0l4.14 4.15L32 31.9 3 2.8ZM25 27.72A11.9 11.9 0 0 1 18 30 12 12 0 0 1 6 18a11.9 11.9 0 0 1 2.29-7Z"/>',
  solid:
    '<path d="M31.47 3.84a5.78 5.78 0 0 0-7.37-.63 16.08 16.08 0 0 1 8.2 7.65 5.73 5.73 0 0 0-.83-7.02m-20.05-.41a5.8 5.8 0 0 0-5.77-.82L8.33 5.3a16 16 0 0 1 3.09-1.87m13.5 18.51 4.34 4.36A14 14 0 0 0 9.75 6.73L17 14V9.69a1 1 0 0 1 2 0V16l2.33 2.34L25 20.1a1 1 0 0 1 .47 1.33 1 1 0 0 1-.55.51M1.61 4.21l1.12 1.13a5.73 5.73 0 0 0 .67 6.15A16 16 0 0 1 5.48 8.1l1.43 1.42a13.94 13.94 0 0 0 1.2 18.36l-2.55 2.55A1 1 0 1 0 7 31.84l2.66-2.66a13.89 13.89 0 0 0 16.83 0l4.16 4.17L32 31.9 3 2.8Z"/>',
};

export const alarmOffIconName = 'alarm-off';
export const alarmOffIcon: IconShapeTuple = [alarmOffIconName, renderIcon(icon)];
