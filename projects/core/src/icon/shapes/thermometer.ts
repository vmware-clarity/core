/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M25 15c.55 0 1-.45 1-1s-.45-1-1-1h-1.09v-2H25c.55 0 1-.45 1-1s-.45-1-1-1h-1.09V8c0-3.31-2.69-6-6-6s-6 2.69-6 6v12.81a8 8 0 0 0 .65 11.06c3.14 2.92 8.03 2.83 11.07-.18 3.05-3.02 3.17-7.9.28-11.07v-1.61H25c.55 0 1-.45 1-1s-.45-1-1-1h-1.09v-2H25zm-1.01 11c0 2.69-1.8 5.06-4.39 5.78-2.6.72-5.36-.38-6.75-2.68a6.005 6.005 0 0 1 .78-7.22l.27-.29V8c0-2.21 1.79-4 4-4s4 1.79 4 4v13.44l.3.29A6 6 0 0 1 23.99 26m-5-14.54V23.2c1.38.49 2.2 1.9 1.96 3.34a3.004 3.004 0 0 1-5.92 0c-.25-1.44.58-2.85 1.96-3.34V11.46z" clip-rule="evenodd"/>',
};

export const thermometerIconName = 'thermometer';
export const thermometerIcon: IconShapeTuple = [thermometerIconName, renderIcon(icon)];
