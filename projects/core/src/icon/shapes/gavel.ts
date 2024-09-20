/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23.7 10.41a1 1 0 0 1-.71-.29l-7.43-7.43A1 1 0 0 1 17 1.28l7.44 7.43a1 1 0 0 1-.71 1.7ZM11.86 22.25a1 1 0 0 0-.29-.71l-7.43-7.43a1 1 0 0 0-1.42 1.42L10.15 23a1 1 0 0 0 1.42 0 1 1 0 0 0 .29-.75M21.93 34H3a1 1 0 0 1-1-1.27l1.13-4a1 1 0 0 1 1-.73H20.8a1 1 0 0 1 1 .73l1.13 4a1 1 0 0 1-.17.87 1 1 0 0 1-.83.4M4.31 32H20.6l-.6-2H4.87Zm28.8-4.56-14-14 2.36-2.36-6.95-6.95-8.94 8.94L12.51 20l2.35-2.34 14 14a3 3 0 0 0 4.24 0 3 3 0 0 0 .01-4.22M8.4 13.07 14.52 7l4.11 4.11-6.12 6.11Zm23.29 17.2a1 1 0 0 1-1.41 0l-14-14 1.41-1.41 14 14a1 1 0 0 1 0 1.41"/>',
  solid:
    '<path d="M23.7 10.79a1 1 0 0 1-.71-.3l-7.43-7.43A1 1 0 0 1 17 1.65l7.44 7.43a1 1 0 0 1 0 1.41 1 1 0 0 1-.74.3m-13.01 13a1 1 0 0 1-.7-.29l-7.44-7.43A1 1 0 1 1 4 14.65l7.43 7.43a1 1 0 0 1-.71 1.71ZM20.64 31l.5 1.77a.89.89 0 0 1-.85 1.12H3.67a.89.89 0 0 1-.85-1.12L3.33 31a1.51 1.51 0 0 1 1.47-1.08h14.36A1.53 1.53 0 0 1 20.64 31m11.55-2.92L18.43 14.46l3-3-6.91-6.96-8.94 8.94 6.93 6.94 3.21-3.2 13.74 13.6a1.9 1.9 0 0 0 1.36.56 1.91 1.91 0 0 0 1.37-3.26"/>',
};

export const gavelIconName = 'gavel';
export const gavelIcon: IconShapeTuple = [gavelIconName, renderIcon(icon)];
