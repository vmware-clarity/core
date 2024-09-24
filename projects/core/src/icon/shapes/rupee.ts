/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27 7.947h-3.86a7.4 7.4 0 0 0-1.54-1.973H27c.552 0 1-.442 1-.987A.993.993 0 0 0 27 4H9c-.552 0-1 .442-1 .987s.448.987 1 .987h7.55a5.45 5.45 0 0 1 4.2 1.973H9c-.552 0-1 .442-1 .987s.448.987 1 .987h12.79c.14.485.21.986.21 1.49.006 2.98-2.431 5.402-5.45 5.418h-6.41a1 1 0 0 0-.91.58.98.98 0 0 0 .16 1.058l11.67 13.165a1.007 1.007 0 0 0 1.73-.317.98.98 0 0 0-.23-.986L12.35 18.804h4.21a7.55 7.55 0 0 0 5.772-2.742 7.34 7.34 0 0 0 1.528-6.14H27c.552 0 1-.442 1-.987a.993.993 0 0 0-1-.987"/>',
  solid:
    '<path fill-rule="evenodd" d="M2 18C2 9.163 9.163 2 18 2a16 16 0 0 1 16 16c0 8.837-7.163 16-16 16S2 26.837 2 18m24-7h-2.12a6.2 6.2 0 0 0-1.2-2.01H26a1 1 0 1 0 0-2H12.75a1.25 1.25 0 1 0 0 2.5h5.61a3.41 3.41 0 0 1 2.78 1.5h-8.32a1 1 0 1 0 0 2h9v.2a3.59 3.59 0 0 1-3.48 3.69h-4.71a1.25 1.25 0 0 0-1 2.06l8.54 10.13a1.252 1.252 0 1 0 1.91-1.62l-6.82-8.06h2a6.09 6.09 0 0 0 6-6.2V13H26a1 1 0 1 0 0-2" clip-rule="evenodd"/>',
};

export const rupeeIconName = 'rupee';
export const rupeeIcon: IconShapeTuple = [rupeeIconName, renderIcon(icon)];
