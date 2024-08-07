/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.47,3.84a5.78,5.78,0,0,0-7.37-.63,16.08,16.08,0,0,1,8.2,7.65A5.73,5.73,0,0,0,31.47,3.84Z"/><path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z"/><path d="M16.4,4.09A14,14,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41L28,27.78A14,14,0,0,0,16.4,4.09ZM19.58,29.9A12,12,0,1,1,29.92,19.56,12,12,0,0,1,19.58,29.9Z"/><path d="M24.92,20.34l-6.06-3V9.5a.9.9,0,0,0-1.8,0v9L24.12,22a.9.9,0,1,0,.79-1.62Z"/>',

  outlineAlerted:
    '<path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z"/><path d="M18.86,9.5a.9.9,0,0,0-1.8,0v9L24.12,22a.9.9,0,1,0,.79-1.62l-6.06-3Z"/><path d="M28,27.78A13.88,13.88,0,0,0,31.77,15.4h-2a12.07,12.07,0,1,1-8.67-9l1-1.8a14,14,0,0,0-14,23.27L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41Z"/>',

  outlineBadged:
    '<path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z"/><path d="M18.86,9.5a.9.9,0,0,0-1.8,0v9L24.12,22a.9.9,0,1,0,.79-1.62l-6.06-3Z"/><path d="M28,27.78a13.89,13.89,0,0,0,3.21-14.39,7,7,0,0,1-2.11.05A12,12,0,1,1,22.56,6.9,7.54,7.54,0,0,1,22.5,6a7.52,7.52,0,0,1,.11-1.21A14,14,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41Z"/>',

  solid:
    '<path d="M31.47,3.84a5.78,5.78,0,0,0-7.37-.63,16.08,16.08,0,0,1,8.2,7.65A5.73,5.73,0,0,0,31.47,3.84Z"/><path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z"/><path d="M18,4A14,14,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41L28,27.78A14,14,0,0,0,18,4Zm7.47,17.43a1,1,0,0,1-1.33.47L17,18.44V9.69a1,1,0,0,1,2,0v7.5L25,20.1A1,1,0,0,1,25.49,21.43Z"/>',

  solidAlerted:
    '<path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z"/><path d="M28,27.78A13.88,13.88,0,0,0,31.77,15.4H22.23A3.69,3.69,0,0,1,19,13.56L19,13.4v3.78L25,20.1a1,1,0,1,1-.87,1.8L17,18.44V9.69a1,1,0,0,1,2,0V10L19,9.89l3-5.28a14,14,0,0,0-14,23.27L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41Z"/>',

  solidBadged:
    '<path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z"/><path d="M28,27.78a13.89,13.89,0,0,0,3.21-14.39A7.46,7.46,0,0,1,22.5,6a7.52,7.52,0,0,1,.11-1.21A14,14,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41Zm-2.52-6.35a1,1,0,0,1-1.33.47L17,18.44V9.69a1,1,0,0,1,2,0v7.5L25,20.1A1,1,0,0,1,25.49,21.43Z"/>',
};

export const alarmClockIconName = 'alarm-clock';
export const alarmClockIcon: IconShapeTuple = [alarmClockIconName, renderIcon(icon)];
