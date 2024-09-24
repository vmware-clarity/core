/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14"/><path d="m18.08 8.26-7.61 7.61a1 1 0 1 0 1.41 1.41l5.12-5.1v15a1 1 0 0 0 2 0V12l5.28 5.28a1 1 0 1 0 1.41-1.41Z"/>',

  solid:
    '<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m8 15.57a1.43 1.43 0 0 1-2 0L19.4 13v14.14a1.4 1.4 0 0 1-2.8 0v-14l-4.43 4.43a1.4 1.4 0 0 1-2-2l7.91-7.87L26 15.59a1.4 1.4 0 0 1 0 1.98"/>',
};

export const circleArrowIconName = 'circle-arrow';
export const circleArrowIcon: IconShapeTuple = [circleArrowIconName, renderIcon(icon)];
