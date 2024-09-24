/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 30H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2M4 8v20h28V8Z"/><path d="M9 25.3a.8.8 0 0 1-.8-.8v-13a.8.8 0 0 1 1.6 0v13a.8.8 0 0 1-.8.8m5.92 0a.8.8 0 0 1-.8-.8v-13a.8.8 0 0 1 1.6 0v13a.8.8 0 0 1-.8.8m6.08 0a.8.8 0 0 1-.8-.8v-13a.8.8 0 0 1 1.6 0v13a.8.8 0 0 1-.8.8m6 0a.8.8 0 0 1-.8-.8v-13a.8.8 0 0 1 1.6 0v13a.8.8 0 0 1-.8.8"/>',
  solid:
    '<path d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M9.63 24.23a.79.79 0 0 1-.81.77.79.79 0 0 1-.82-.77V11.77a.79.79 0 0 1 .82-.77.79.79 0 0 1 .81.77Zm6 0a.79.79 0 0 1-.82.77.79.79 0 0 1-.81-.77V11.77a.79.79 0 0 1 .81-.77.79.79 0 0 1 .82.77Zm6.21 0a.79.79 0 0 1-.82.77.79.79 0 0 1-.81-.77V11.77a.79.79 0 0 1 .81-.77.79.79 0 0 1 .82.77Zm6.12 0a.79.79 0 0 1-.82.77.79.79 0 0 1-.81-.77V11.77a.79.79 0 0 1 .81-.77.79.79 0 0 1 .82.77Z"/>',
};

export const containerIconName = 'container';
export const containerIcon: IconShapeTuple = [containerIconName, renderIcon(icon)];
