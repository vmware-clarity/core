/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M13.05 20.993h4.65v-1.03h-3.53v-1.608h3.19v-1.03h-3.19v-1.489h3.53v-1.029h-4.65zm-2.81-1.839-3.27-4.347H5.85v6.176h1.12v-4.347l3.27 4.347h1.12v-6.176h-1.12zm14.9.08-1.46-4.427h-1.21L21 19.234l-1.32-4.427h-1.23l1.96 6.176h1.12l1.56-4.587 1.55 4.587h1.12l1.95-6.176h-1.22l-1.33 4.427zm5.95-1.249 2.83-6.606c.13-.31.1-.66-.08-.94-.19-.28-.5-.449-.83-.449H3c-.55.01-1 .46-1 1.01v13.99c0 .55.45 1 1 1h30c.34 0 .65-.17.83-.45s.22-.64.08-.94l-2.83-6.605zM4 23.991V12h27.48l-2.4 5.606c-.11.25-.11.54 0 .79L31.48 24H4z"/>',
  solid:
    '<path d="m31.09 18 2.83-6.61c.13-.31.1-.66-.08-.94-.19-.28-.5-.45-.83-.45H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h30c.34 0 .65-.17.83-.45s.22-.64.08-.94L31.08 18zm-19.73 3h-1.12l-3.27-4.35V21H5.85v-6.18h1.12l3.27 4.35v-4.35h1.12zm6.35-5.16h-3.53v1.49h3.19v1.03h-3.19v1.61h3.53V21h-4.65v-6.18h4.65v1.03zM25.75 21h-1.12l-1.55-4.59L21.52 21H20.4l-1.96-6.18h1.23l1.32 4.43 1.47-4.43h1.21l1.46 4.43 1.33-4.43h1.22L25.73 21z"/>',
};

export const newIconName = 'new';
export const newIcon: IconShapeTuple = [newIconName, renderIcon(icon)];
