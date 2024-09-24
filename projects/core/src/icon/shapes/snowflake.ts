/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18.05 33.61a1 1 0 0 1-1-1V3.37a1 1 0 1 1 1.95 0v29.26a1 1 0 0 1-.95.98"/><path d="m18.06 10.07-3.54-3.53a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0l2.13 2.12 2.12-2.12a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41Zm2.79 21.1a1 1 0 0 1-.7-.29L18 28.76l-2.1 2.12a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42L18 25.93l3.54 3.53a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.29m10.07-4.67a1 1 0 0 1-.5-.13l-26-15A1 1 0 0 1 4.07 10a1 1 0 0 1 1.37-.36l26 15a1 1 0 0 1-.5 1.87Z"/><path d="M6 15.37a1 1 0 0 1-.26-2l2.9-.78-.8-2.86a1 1 0 1 1 1.93-.52l1.3 4.79-4.83 1.33a.8.8 0 0 1-.24.04m21.05 12.17a1 1 0 0 1-1-.75L24.8 22l4.82-1.3a1 1 0 1 1 .52 1.93l-2.9.78.78 2.9a1 1 0 0 1-.71 1.22.8.8 0 0 1-.26.01M4.94 26.5a1 1 0 0 1-.5-1.87l26-15a1 1 0 0 1 1.36.36 1 1 0 0 1-.36 1.37l-26 15a1 1 0 0 1-.5.14"/><path d="M8.81 27.54a.8.8 0 0 1-.26 0 1 1 0 0 1-.71-1.22l.78-2.9-2.9-.78A1 1 0 0 1 5 21.38a1 1 0 0 1 1.23-.71L11.07 22l-1.3 4.82a1 1 0 0 1-.96.72m21.07-12.17a.8.8 0 0 1-.26 0L24.8 14l1.29-4.83a1 1 0 1 1 1.91.56l-.78 2.89 2.9.78a1 1 0 0 1-.26 2Z"/>',
};

export const snowflakeIconName = 'snowflake';
export const snowflakeIcon: IconShapeTuple = [snowflakeIconName, renderIcon(icon)];
