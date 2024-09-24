/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.855 8.005h-7.003c-.4-.04-.78.16-.99.52s-.21.8 0 1.16.6.55.99.51h2.041l-6.212 15.61h-2.53c-.4-.04-.78.16-.991.52s-.21.8 0 1.16.6.55.99.51h7.013c.4.04.78-.16.99-.51.21-.36.21-.8 0-1.16s-.6-.55-.99-.52h-2.191l6.222-15.6h2.66c.4.04.78-.16.99-.51.211-.36.211-.8 0-1.16-.21-.36-.6-.55-.99-.52z"/>',
};

export const italicIconName = 'italic';
export const italicIcon: IconShapeTuple = [italicIconName, renderIcon(icon)];
