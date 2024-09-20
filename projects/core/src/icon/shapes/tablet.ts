/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M17 29h2v2h-2z"/><path d="M30 2H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 2v22.38H6V4ZM6 32v-4h24v4Z"/>',
  solid:
    '<path d="M30 2H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M19 32h-2v-2h2ZM6 28V4h24v24Z"/>',
};

export const tabletIconName = 'tablet';
export const tabletIcon: IconShapeTuple = [tabletIconName, renderIcon(icon)];
