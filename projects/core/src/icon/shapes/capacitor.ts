/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M15 34.15a1 1 0 0 1-1-1.003V3.153a1.004 1.004 0 0 1 1-1.003 1 1 0 0 1 1 1.003v29.994a1.005 1.005 0 0 1-1 1.003m6 0a1 1 0 0 1-1-1.003V3.153a1.004 1.004 0 0 1 1-1.003 1 1 0 0 1 1 1.003v29.994a1.005 1.005 0 0 1-1 1.003"/><path d="M14.46 19.047H3a1 1 0 0 1-1-1.002 1.004 1.004 0 0 1 1-1.003h11.46a1 1 0 0 1 1 1.003 1.004 1.004 0 0 1-1 1.002m18.54 0H21.54a1 1 0 0 1-1-1.002 1.004 1.004 0 0 1 1-1.003H33a1 1 0 0 1 1 1.003 1.004 1.004 0 0 1-1 1.002"/>',
};

export const capacitorIconName = 'capacitor';
export const capacitorIcon: IconShapeTuple = [capacitorIconName, renderIcon(icon)];
