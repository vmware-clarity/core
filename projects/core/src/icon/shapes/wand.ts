/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34.1,4,31.71,1.6a1.83,1.83,0,0,0-1.31-.54h0a2.05,2.05,0,0,0-1.45.62L1.76,29.23A2,2,0,0,0,1.68,32l2.4,2.43A1.83,1.83,0,0,0,5.39,35h0a2.05,2.05,0,0,0,1.45-.62L34,6.79A2,2,0,0,0,34.1,4ZM5.42,32.93,3.16,30.65h0L24.11,9.43l2.25,2.28ZM32.61,5.39l-5.12,5.18L25.24,8.29l5.13-5.2,2.25,2.28Z"/><path d="M32.53,20.47l2.09-2.09a.8.8,0,0,0-1.13-1.13l-2.09,2.09-2.09-2.09a.8.8,0,0,0-1.13,1.13l2.09,2.09-2.09,2.09a.8.8,0,0,0,1.13,1.13l2.09-2.09,2.09,2.09a.8.8,0,0,0,1.13-1.13Z"/><path d="M14.78,6.51a.8.8,0,0,0,1.13,0L17.4,5l1.49,1.49A.8.8,0,0,0,20,5.38L18.54,3.89,20,2.4a.8.8,0,0,0-1.13-1.13L17.4,2.76,15.91,1.27A.8.8,0,1,0,14.78,2.4l1.49,1.49L14.78,5.38A.8.8,0,0,0,14.78,6.51Z"/><path d="M8.33,15.26a.8.8,0,0,0,1.13,0l1.16-1.16,1.16,1.16a.8.8,0,1,0,1.13-1.13L11.76,13l1.16-1.16a.8.8,0,1,0-1.13-1.13l-1.16,1.16L9.46,10.68a.8.8,0,1,0-1.13,1.13L9.49,13,8.33,14.13A.8.8,0,0,0,8.33,15.26Z"/>',
};

export const wandIconName = 'wand';
export const wandIcon: IconShapeTuple = [wandIconName, renderIcon(icon)];
