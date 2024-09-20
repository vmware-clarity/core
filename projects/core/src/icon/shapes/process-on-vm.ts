/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.49 26.28a1 1 0 0 0-1.2-.7l-2.49.67a14.23 14.23 0 0 0 2.4-6.75 14.48 14.48 0 0 0-4.83-12.15 1 1 0 0 0-1.37.09 1 1 0 0 0 .09 1.41 12.45 12.45 0 0 1 4.16 10.46 12.2 12.2 0 0 1-2 5.74L28 22.54a1 1 0 1 0-1.95.16l.5 6.44 6.25-1.66a1 1 0 0 0 .69-1.2m-29.18-9.2a1.1 1.1 0 0 0 .44.16 1 1 0 0 0 1.12-.85A12.21 12.21 0 0 1 18.69 5.84l-2.24 1.53a1 1 0 0 0 .47 1.79 1 1 0 0 0 .64-.16l5.33-3.66L18.33.76a1 1 0 1 0-1.39 1.38l1.7 1.7A14.2 14.2 0 0 0 3.89 16.12a1 1 0 0 0 .42.96m17.42 12.85a12 12 0 0 1-4.84.51 12.3 12.3 0 0 1-9.57-6.3l2.49.93a1 1 0 0 0 .69-1.84l-4.59-1.7L4.44 21l-1.11 6.35a1 1 0 0 0 .79 1.13h.17a1 1 0 0 0 1-.81l.42-2.4a14.3 14.3 0 0 0 11 7.14 13.9 13.9 0 0 0 5.63-.6 1 1 0 0 0-.6-1.9ZM22 13h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-1 8h-6v-6h6Z"/>',
};

export const processOnVmIconName = 'process-on-vm';
export const processOnVmIcon: IconShapeTuple = [processOnVmIconName, renderIcon(icon)];
