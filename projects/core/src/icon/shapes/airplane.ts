/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m5.567 13.93 5.72 2.29 1.48-1.56-5.06-2.02.63-.63h6.94l1.9-2h-9.24c-.27 0-.52.11-.71.29l-2 2a.99.99 0 0 0-.27.91c.07.33.3.6.61.73zM31.937 4h-5c-.83 0-1.63.35-2.19.95L9.507 21h-5.57c-.4 0-.77.24-.92.62-.16.37-.07.8.22 1.09l6 6a1 1 0 0 0 1.35.06l7.84-6.56 4.62 9.24c.14.29.42.49.73.54.05 0 .11.01.16.01.26 0 .52-.1.71-.29l2-2a1 1 0 0 0 .29-.71V15.09l6.8-5.69c.75-.56 1.2-1.46 1.2-2.4 0-1.65-1.35-3-3-3m.56 3.83-7.2 6.02c-.23.19-.36.47-.36.77v13.96l-.73.73-4.57-9.13c-.14-.27-.39-.47-.69-.53-.07-.01-.14-.02-.2-.02-.23 0-.46.08-.64.23l-8.11 6.79L6.347 23h3.59c.27 0 .54-.11.73-.31l15.54-16.37c.19-.2.46-.32.73-.32h5c.55 0 1 .45 1 1 0 .31-.15.61-.44.83"/>',
  solid:
    '<path d="m5.567 13.93 5.72 2.29 5.9-6.22h-9.25c-.27 0-.52.11-.71.29l-2 2a.99.99 0 0 0-.27.91c.07.33.3.6.61.73M31.937 4h-5c-.83 0-1.63.35-2.19.95L9.507 21h-5.57c-.4 0-.77.24-.92.62-.16.37-.07.8.22 1.09l6 6a1 1 0 0 0 1.35.06l7.84-6.56 4.62 9.24c.14.29.42.49.73.54.05 0 .11.01.16.01.26 0 .52-.1.71-.29l2-2a1 1 0 0 0 .29-.71V15.09l6.8-5.69c.75-.56 1.2-1.46 1.2-2.4 0-1.65-1.35-3-3-3"/>',
};

export const airplaneIconName = 'airplane';
export const airplaneIcon: IconShapeTuple = [airplaneIconName, renderIcon(icon)];
