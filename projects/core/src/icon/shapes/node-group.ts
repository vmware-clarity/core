/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m33.53 21.58-4.94-2.83v-5.66a1 1 0 0 0-.51-.87L22.64 9.1a1 1 0 0 0-1 0l-5.44 3.12a1 1 0 0 0-.51.87v5.66l-4.94 2.83a1 1 0 0 0-.5.87v6.24a1 1 0 0 0 .5.86l5.45 3.12a1 1 0 0 0 1 0l4.95-2.83 4.95 2.83a1 1 0 0 0 .5.14 1 1 0 0 0 .49-.14l5.45-3.12a1 1 0 0 0 .5-.86v-6.24a1 1 0 0 0-.51-.87M22.14 11.12l4.45 2.55V19l-4.46 2.56-4.44-2.6v-5.29Zm-5.45 19.53-4.44-2.54V23l4.68-2.68 4.4 2.57V28ZM32 28.11l-4.44 2.54L22.93 28v-5.07l4.46-2.57L32 23Z"/><path d="M7 27.43a1 1 0 0 1-1-1V19.9a1 1 0 0 1 .5-.9l4.95-2.83v-5.63a1 1 0 0 1 .5-.87l5.21-3a1 1 0 0 1 1.37.37 1 1 0 0 1-.38 1.37l-4.7 2.68v5.66a1 1 0 0 1-.51.87L8 20.48v5.95a1 1 0 0 1-1 1"/><path d="M3 25.05a1 1 0 0 1-1-1v-6.52a1 1 0 0 1 .5-.86l5-2.84V8.17a1 1 0 0 1 .5-.86l5.25-3a1 1 0 0 1 1 1.74l-4.8 2.7v5.66a1 1 0 0 1-.51.87L4 18.11v5.94a1 1 0 0 1-1 1"/>',
};

export const nodeGroupIconName = 'node-group';
export const nodeGroupIcon: IconShapeTuple = [nodeGroupIconName, renderIcon(icon)];
