/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12 14.5v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1m2 1h8v8h-8zm-8.74 6.78c.55-.08.93-.58.85-1.13-.08-.54-.11-1.1-.11-1.66 0-6.08 4.55-11.1 10.47-11.88l-.18.18a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l2.71-2.71-2.71-2.7A.996.996 0 1 0 16.3 5.2l.36.36C9.56 6.25 4 12.23 4 19.5c0 .65.04 1.3.13 1.93.07.5.5.86.99.86h.14zm18.41 7.79c-1.73.93-3.69 1.42-5.67 1.42-3.7 0-7.17-1.73-9.43-4.59l.26.04c.55.1 1.06-.28 1.15-.82s-.28-1.06-.82-1.15l-3.78-.63-.63 3.78c-.09.54.28 1.06.82 1.15.06 0 .11.01.17.01.48 0 .9-.35.99-.83l.09-.53C9.45 31.4 13.59 33.5 18 33.5c2.31 0 4.6-.57 6.62-1.66.49-.26.67-.87.41-1.35a.996.996 0 0 0-1.35-.41zm6.42-3.24-.19.03c1.36-2.2 2.1-4.74 2.1-7.37 0-5.59-3.32-10.64-8.45-12.86a.99.99 0 0 0-1.31.52c-.22.51.01 1.1.52 1.31 4.4 1.9 7.25 6.23 7.25 11.02 0 2.32-.67 4.56-1.91 6.48l-.11-.64a.99.99 0 0 0-1.15-.82c-.54.09-.91.6-.82 1.15l.62 3.78 3.78-.62c.54-.09.91-.6.82-1.15a.99.99 0 0 0-1.15-.82z"/>',
};

export const processOnVmIconName = 'process-on-vm';
export const processOnVmIcon: IconShapeTuple = [processOnVmIconName, renderIcon(icon)];
