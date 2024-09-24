/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28.35 17.9c.188.184.444.286.711.285.403-.002.766-.24.921-.604a.97.97 0 0 0-.21-1.068L18.033 5 6.3 16.513a.97.97 0 0 0 .052 1.335c.37.363.964.386 1.361.052L18.032 7.782z"/><path d="M28.35 28.715c.188.184.444.287.711.285.403-.002.766-.24.921-.604a.97.97 0 0 0-.21-1.068l-11.74-11.513L6.3 27.328a.97.97 0 0 0 .052 1.335c.37.363.964.386 1.361.052l10.318-10.117z"/>',
};

export const angleDoubleIconName = 'angle-double';
export const angleDoubleIcon: IconShapeTuple = [angleDoubleIconName, renderIcon(icon)];
