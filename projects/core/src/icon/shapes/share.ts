/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29 24c-1.59 0-3 .76-3.91 1.93l-13.28-6.64c.11-.41.19-.84.19-1.29s-.08-.87-.19-1.29l13.28-6.64C26.01 11.23 27.41 12 29 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5c0 .45.08.87.19 1.29l-13.28 6.64C9.99 13.77 8.59 13 7 13c-2.76 0-5 2.24-5 5s2.24 5 5 5c1.59 0 3-.76 3.91-1.93l13.28 6.64c-.11.41-.19.84-.19 1.29 0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5m0-20c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M7 21c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3m22 11c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3"/>',
  solid:
    '<path d="M29 24c-1.59 0-3 .76-3.91 1.93l-13.28-6.64c.11-.41.19-.84.19-1.29s-.08-.87-.19-1.29l13.28-6.64C26.01 11.23 27.41 12 29 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5c0 .45.08.87.19 1.29l-13.28 6.64C9.99 13.77 8.59 13 7 13c-2.76 0-5 2.24-5 5s2.24 5 5 5c1.59 0 3-.76 3.91-1.93l13.28 6.64c-.11.41-.19.84-.19 1.29 0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5"/>',
};

export const shareIconName = 'share';
export const shareIcon: IconShapeTuple = [shareIconName, renderIcon(icon)];
