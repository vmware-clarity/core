/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28.728 28c-.46 0-.87-.32-.97-.77l-3.311-13.91-3.311 13.91a.995.995 0 0 1-1.94 0l-3.312-13.91-3.31 13.91a.995.995 0 0 1-1.94 0L7.27 13.12c-.39 1.52-.84 3.33-1.27 5.11-.11.45-.51.77-.971.77h-2.03C2.45 19 2 18.55 2 18s.45-1 1-1h1.21c1.011-4.17 2.101-8.22 2.111-8.26.12-.44.53-.73.98-.74.46 0 .85.32.961.77l3.321 13.92 3.311-13.92a.995.995 0 0 1 1.94 0l3.312 13.91 3.32-13.91a.995.995 0 0 1 1.94 0l3.312 13.91 1.18-4.97c.11-.45.51-.77.971-.77h2.13c.55 0 1.001.45 1.001 1s-.45 1-1 1h-1.34l-1.971 8.29c-.11.45-.51.77-.97.77z"/>',
};

export const resistorIconName = 'resistor';
export const resistorIcon: IconShapeTuple = [resistorIconName, renderIcon(icon)];
