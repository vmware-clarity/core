/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M3.5,13.56,18,5.23l14.5,8.33a1,1,0,0,0,1-1.73L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73Z"/><path d="M4,26a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H28V17.63H26V25H19V17.63H17V25H10V17.63H8V25H5A1,1,0,0,0,4,26Z"/><rect x="5.02" y="14" width="26" height="2"/><path d="M33,29H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z"/><path d="M22.15,11.58h3.21L18.65,7.72a.8.8,0,0,0-.8,0l-6.72,3.86h3.21l3.9-2.24Z"/>',

  outlineAlerted:
    '<path d="M4,26a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H28V17.63H26V25H19V17.63H17V25H10V17.63H8V25H5A1,1,0,0,0,4,26Z"/><path d="M33,29H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z"/><path d="M22.5,15A3.51,3.51,0,0,1,20,14H5v2H31V15Z"/><path d="M19.46,9.74l.68-1.17-1.49-.85a.8.8,0,0,0-.8,0l-6.72,3.86h3.21l3.9-2.24,1.1.63C19.39,9.89,19.42,9.81,19.46,9.74Z"/><path d="M22.05,5.25,18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L18,5.23,21.05,7Z"/>',

  outlineBadged:
    '<path d="M4,26a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H28V17.63H26V25H19V17.63H17V25H10V17.63H8V25H5A1,1,0,0,0,4,26Z"/><rect x="5.02" y="14" width="26" height="2"/><path d="M33,29H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z"/><path d="M22.15,11.58h3.21L18.65,7.72a.8.8,0,0,0-.8,0l-6.72,3.86h3.21l3.9-2.24Z"/><path d="M22.5,6c0-.16,0-.32,0-.48L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L18,5.23,22.77,8A7.49,7.49,0,0,1,22.5,6Z"/><path d="M31.94,13.24l.56.32a1,1,0,0,0,1.44-1.19A7.45,7.45,0,0,1,31.94,13.24Z"/>',

  solid:
    '<path d="M3.5,13.56,5,12.68V16H31V12.71l1.48.85a1,1,0,0,0,1-1.73L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73ZM17.85,7.11a.8.8,0,0,1,.8,0L25.37,11H22.15l-3.9-2.24L14.35,11H11.14Z"/><path d="M32.85,27H32v-.85A1.15,1.15,0,0,0,30.85,25H28V17.63H24V25H20V17.63H16V25H12V17.63H8V25H5.15A1.15,1.15,0,0,0,4,26.15V27H3.15A1.15,1.15,0,0,0,2,28.15V31H34V28.15A1.15,1.15,0,0,0,32.85,27Z"/>',

  solidAlerted:
    '<path d="M32.85,27H32v-.85A1.15,1.15,0,0,0,30.85,25H28V17.63H24V25H20V17.63H16V25H12V17.63H8V25H5.15A1.15,1.15,0,0,0,4,26.15V27H3.15A1.15,1.15,0,0,0,2,28.15V31H34V28.15A1.15,1.15,0,0,0,32.85,27Z"/><path d="M22.5,15a3.51,3.51,0,0,1-3-5.26l.14-.24-1.35-.78L14.35,11H11.14l6.72-3.86a.8.8,0,0,1,.8,0l1.75,1,1.65-2.86L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L5,12.68V16H31V15Z"/>',

  solidBadged:
    '<path d="M32.85,27H32v-.85A1.15,1.15,0,0,0,30.85,25H28V17.63H24V25H20V17.63H16V25H12V17.63H8V25H5.15A1.15,1.15,0,0,0,4,26.15V27H3.15A1.15,1.15,0,0,0,2,28.15V31H34V28.15A1.15,1.15,0,0,0,32.85,27Z"/><path d="M30,13.5A7.47,7.47,0,0,1,24.39,11H22.15l-3.9-2.24L14.35,11H11.14l6.72-3.86a.8.8,0,0,1,.8,0l5,2.87A7.45,7.45,0,0,1,22.5,6c0-.16,0-.32,0-.48L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L5,12.68V16H31V13.42A7.53,7.53,0,0,1,30,13.5Z"/><path d="M31.94,13.24l.56.32a1,1,0,0,0,1.44-1.19A7.45,7.45,0,0,1,31.94,13.24Z"/>',
};

export const bankIconName = 'bank';
export const bankIcon: IconShapeTuple = [bankIconName, renderIcon(icon)];
