/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 4H3c-.55 0-1 .45-1 1v1.67c0 .479.19.929.53 1.269L14 19.574v8.477l2 .95V18.985c0-.27-.1-.52-.29-.71L4 6.589V6h28v.61L20.33 18.285c-.2.18-.32.44-.33.71V31l2 1V19.494L33.47 8c.34-.34.54-.81.53-1.3V5c0-.55-.45-1-1-1"/>',

  solid:
    '<path d="M33 4H3c-.55 0-1 .45-1 1v1.67c0 .48.19.93.53 1.27L14 19.58v8.48L22 32V19.49L33.47 8c.34-.34.54-.81.53-1.3V5c0-.55-.45-1-1-1"/>',
};

export const filterIconName = 'filter';
export const filterIcon: IconShapeTuple = [filterIconName, renderIcon(icon)];
