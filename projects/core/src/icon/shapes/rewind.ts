/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.44 4.1a1 1 0 0 0-1.05.1L21 12.91V5c0-.38-.22-.73-.56-.9a1 1 0 0 0-1.05.1l-17 13.01c-.25.19-.39.48-.39.79a1 1 0 0 0 .39.79l17 13c.18.14.39.21.61.21.15 0 .3-.03.44-.1.34-.17.56-.52.56-.9v-7.92l11.39 8.71c.3.23.71.27 1.05.1s.56-.52.56-.9V5c0-.38-.22-.73-.56-.9M32 28.97l-11.39-8.71a1 1 0 0 0-1.05-.1c-.34.17-.56.52-.56.9v7.92L4.65 18 19 7.02v7.92c0 .38.22.73.56.9s.75.13 1.05-.1L32 7.02z"/>',
  solid:
    '<path d="M33.44 4.1a1 1 0 0 0-1.05.1L21 12.91V5c0-.38-.22-.73-.56-.9a1 1 0 0 0-1.05.1l-17 13.01c-.25.19-.39.48-.39.79a1 1 0 0 0 .39.79l17 13c.18.14.39.21.61.21.15 0 .3-.03.44-.1.34-.17.56-.52.56-.9v-7.92l11.39 8.71c.3.23.71.27 1.05.1s.56-.52.56-.9V5c0-.38-.22-.73-.56-.9"/>',
};

export const rewindIconName = 'rewind';
export const rewindIcon: IconShapeTuple = [rewindIconName, renderIcon(icon)];
