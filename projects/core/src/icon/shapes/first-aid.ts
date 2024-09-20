/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 6h-8.09V4.5a2.5 2.5 0 0 0-2.5-2.5h-7a2.5 2.5 0 0 0-2.5 2.5V6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M13.91 4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V6h-8ZM4 28V8h28v20Z"/><path d="M20.15 25.2h-3.41a1.3 1.3 0 0 1-1.3-1.3v-2.7h-2.7a1.3 1.3 0 0 1-1.3-1.3v-3.4a1.3 1.3 0 0 1 1.3-1.3h2.7v-2.7a1.3 1.3 0 0 1 1.3-1.3h3.41a1.3 1.3 0 0 1 1.29 1.3v2.7h2.71a1.3 1.3 0 0 1 1.29 1.3v3.4a1.3 1.3 0 0 1-1.29 1.3h-2.71v2.7a1.3 1.3 0 0 1-1.29 1.3M17 23.6h2.81v-4h4v-2.8h-4v-4H17v4h-4v2.8h4Zm7.11-6.8"/>',
  solid:
    '<path d="M32 6h-8.09V4.5a2.5 2.5 0 0 0-2.5-2.5h-7a2.5 2.5 0 0 0-2.5 2.5V6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M13.91 4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V6h-8Zm10.73 15.4a.5.5 0 0 1-.5.5h-3.5v3.5a.5.5 0 0 1-.5.5h-3.4a.5.5 0 0 1-.5-.5v-3.5h-3.5a.5.5 0 0 1-.5-.5v-3.4a.5.5 0 0 1 .5-.5h3.5v-3.5a.5.5 0 0 1 .5-.5h3.4a.5.5 0 0 1 .5.5V16h3.5a.5.5 0 0 1 .5.5Z"/>',
};

export const firstAidIconName = 'first-aid';
export const firstAidIcon: IconShapeTuple = [firstAidIconName, renderIcon(icon)];
