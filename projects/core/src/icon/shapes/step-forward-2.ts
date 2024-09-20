/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M7.08 6.52a1.68 1.68 0 0 0 0 2.4L16.51 18l-9.39 9.08a1.7 1.7 0 0 0 2.36 2.44L21.4 18 9.48 6.47a1.69 1.69 0 0 0-2.4.05M26.49 5a1.7 1.7 0 0 0-1.7 1.7v22.6a1.7 1.7 0 0 0 3.4 0V6.7a1.7 1.7 0 0 0-1.7-1.7"/>',
};

export const stepForward2IconName = 'step-forward-2';
export const stepForward2Icon: IconShapeTuple = [stepForward2IconName, renderIcon(icon)];
