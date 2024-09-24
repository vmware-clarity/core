/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29 21.5c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm-2 1c0-.55-.45-1-1-1h-4.59l1.29-1.29a.996.996 0 1 0-1.41-1.41l-3 3-.71.71.71.71 3 3c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41l-1.29-1.29h4.59c.55 0 1-.45 1-1zm2.59-9H25c-.55 0-1 .45-1 1s.45 1 1 1h4.59l-1.29 1.29a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l3-3 .71-.71-.71-.71-3-3a.996.996 0 1 0-1.41 1.41l1.29 1.29zm3.41 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-14-7c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1m11 11h-.57c-.88 1.77-2.69 3-4.79 3H9.55c-.08-.02-.16-.02-.25-.02h-.12c-.06.01-.12.02-.19.02-2.76 0-5-2.24-5-5 0-2.48 1.78-4.55 4.22-4.93.53-.08.9-.57.84-1.11q-.06-.48-.06-.96c0-4.41 3.59-8 8-8 2.69 0 5.08 1.34 6.53 3.39.44-.25.94-.39 1.47-.39h.65a9.99 9.99 0 0 0-8.65-5c-5.5 0-9.99 4.49-9.99 10v.29c-2.95.86-5 3.55-5 6.71 0 3.86 3.14 7 7 7h15.63c3.35 0 6.18-2.25 7.07-5.32-.07-.03-.14-.05-.2-.09-.44.26-.95.4-1.5.4zm-8-10c.55 0 1-.45 1-1s-.45-1-1-1h-1c-.55 0-1 .45-1 1s.45 1 1 1z"/>',
};

export const cloudTrafficIconName = 'cloud-traffic';
export const cloudTrafficIcon: IconShapeTuple = [cloudTrafficIconName, renderIcon(icon)];
