/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M33.723 9.301 27.88 3.418a2.06 2.06 0 0 0-2.906 0L4.26 24.138l-1.89 8.176a2.06 2.06 0 0 0 .402 1.722c.386.484.97.767 1.589.77q.213.023.428 0l8.25-1.894 20.684-20.7c.8-.805.8-2.106 0-2.911M12.044 31.117l-7.733 1.626 1.761-7.598L21.57 9.68l5.972 5.983zm10.86-22.883 5.971 5.983 3.365-3.45-5.873-5.983z" clip-rule="evenodd"/>',
  solid:
    '<path d="m27.792 3.418 5.87 5.883a2.066 2.066 0 0 1 .01 2.922l-3.263 3.27-8.786-8.804 3.264-3.27a2.057 2.057 0 0 1 2.905 0M2.32 32.314l1.89-8.176L19.912 8.384l8.796 8.794-15.761 15.734-8.21 1.895a2 2 0 0 1-.427 0 2.05 2.05 0 0 1-1.588-.771 2.06 2.06 0 0 1-.402-1.722"/>',
};

export const pencilIconName = 'pencil';
export const pencilIcon: IconShapeTuple = [pencilIconName, renderIcon(icon)];
